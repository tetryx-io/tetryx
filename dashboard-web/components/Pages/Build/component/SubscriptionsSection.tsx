import React, { useMemo, useState, useCallback } from 'react';
import Table from "@/components/Shared/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { useAgentSubscriptionsSubscription } from "@/generated/graphql";
import { useParams } from "next/navigation";
import Loader from "@/components/Common/AtriumLoader";
import { RiFileCopyLine, RiSearchLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { formatPrice } from "@/lib/utils";
import { DateTooltip } from "@/components/Shared/DateTooltip";
import { AgentSubscriptionsSubscription } from "@/generated/graphql";
import debounce from 'lodash/debounce';

type Subscription = NonNullable<
  NonNullable<AgentSubscriptionsSubscription['agent_installation']>[number]['subscriptions']
>[number];

const subscriptionColumnHelper = createColumnHelper<Subscription>();

const formatDate = (timestamp: string | number | null | undefined) => {
  if (!timestamp) return null;
  const date = new Date(typeof timestamp === 'number' ? timestamp * 1000 : timestamp);
  return date.getFullYear() > 1970 ? format(date, 'MMM dd, yyyy') : null;
};

const columns = [
  subscriptionColumnHelper.accessor("workspace", {
    header: () => <div>Workspace</div>,
    cell: ({ row }) => (
      <div className="flex gap-2 items-center w-40">
        <div className="h-8 w-8 flex-shrink-0">
          <img
            className="h-8 w-8 rounded object-cover"
            src={row.original.workspace?.image_key ?? "/images/avatar.svg"}
            alt={row.original.workspace?.name ?? "Workspace"}
          />
        </div>
        <div className="font-medium truncate">{row.original.workspace?.name ?? "Unknown Workspace"}</div>
      </div>
    ),
  }),
  subscriptionColumnHelper.accessor("user", {
    header: () => <div>Installer</div>,
    cell: ({ row }) => (
      <div className="flex gap-2 items-center w-40">
        <div className="h-8 w-8 flex-shrink-0">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={row.original.user?.picture ?? "/images/avatar.svg"}
            alt={row.original.user?.name ?? "User"}
          />
        </div>
        <div className="flex flex-col">
          <div className="font-medium truncate">{row.original.user?.name ?? "Unknown User"}</div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <a 
              href={`mailto:${row.original.user?.email ?? ""}`}
              className="truncate hover:text-blue-600 transition-colors"
            >
              {row.original.user?.email ?? "No email"}
            </a>
            <button
              onClick={() => handleCopyEmail(row.original.user?.email ?? "")}
              className="p-1 hover:bg-neutral-100 rounded transition-colors"
              title="Copy email"
            >
              <RiFileCopyLine size={14} />
            </button>
          </div>
        </div>
      </div>
    ),
  }),
  subscriptionColumnHelper.accessor("_cr", {
    header: () => <div>Started On</div>,
    cell: ({ row }) => (
      <div className="text-sm w-48">
        <DateTooltip date={row.original._cr} id={`start-date-${row.original._cr}`}>
          <div>{format(new Date(row.original._cr), 'MMM dd, yyyy')}</div>
        </DateTooltip>
        
        {row.original.trial_end && (
          <DateTooltip 
            date={new Date(row.original.trial_end * 1000)} 
            id={`trial-end-${row.original.trial_end}`}
          >
            {new Date(row.original.trial_end * 1000) > new Date() ? (
              <div className="text-sm text-blue-600">
                Trial ends {format(new Date(row.original.trial_end * 1000), 'MMM dd, yyyy')}
              </div>
            ) : (
              <div className="text-sm text-neutral-500">
                Trial ended {format(new Date(row.original.trial_end * 1000), 'MMM dd, yyyy')}
              </div>
            )}
          </DateTooltip>
        )}
        
        {row.original.canceled_at && (
          <DateTooltip date={new Date(row.original.canceled_at)} id={`canceled-at-${row.original.canceled_at}`}>
            <div className="text-sm text-red-600">
              Canceled {format(new Date(row.original.canceled_at), 'MMM dd, yyyy')}
            </div>
          </DateTooltip>
        )}
      </div>
    ),
  }),
  subscriptionColumnHelper.accessor("active", {
    header: () => <div>Status</div>,
    cell: ({ row }) => (
      <div className="text-sm mb-0.5">
        {row.original.active ? (
          <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            Active
          </span>
        ) : (
          <span className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-500 rounded-full">
            Inactive
          </span>
        )}
      </div>
    ),
  }),
  subscriptionColumnHelper.accessor("price", {
    header: () => <div>Product & Price</div>,
    cell: ({ row }) => (
      <div className="w-48">
        <div className="font-medium text-gray-900">
          {row.original.price?.product?.name ?? "Unknown Product"}
        </div>
        <div className="text-sm text-gray-500">
          {formatPrice(
            row.original.price?.product?.price?.unit_amount ?? 0,
            row.original.price?.product?.price?.currency ?? 'usd',
            row.original.price?.product?.price?.interval ?? 'month',
            row.original.price?.product?.price?.interval_count ?? 1
          )}
        </div>
      </div>
    ),
  }),
];

const handleCopyEmail = (email: string) => {
  navigator.clipboard.writeText(email).then(() => {
    toast.success('Email copied to clipboard');
  }).catch(() => {
    toast.error('Failed to copy email');
  });
};

const SubscriptionsSection: React.FC = () => {
  let { id: agent_id } = useParams();
  agent_id = Array.isArray(agent_id) ? agent_id[0] : agent_id;
  agent_id = agent_id?.slice(-16) || '';

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce the search input
  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, 300),
    []
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debouncedSetSearch(e.target.value);
  };

  const { data, loading, error } = useAgentSubscriptionsSubscription({
    variables: { agent_id },
    skip: !agent_id
  });

  // Memoize subscriptions once
  const subscriptions = useMemo(() => {
    if (!data?.agent_installation) return [];
    
    return data.agent_installation
      .flatMap(installation => installation.subscriptions || [])
      .sort((a, b) => {
        const dateA = a?._cr ? new Date(a._cr).getTime() : 0;
        const dateB = b?._cr ? new Date(b._cr).getTime() : 0;
        return dateB - dateA;
      });
  }, [data]);

  // Filter subscriptions based on debounced query
  const filteredSubscriptions = useMemo(() => {
    if (!debouncedQuery.trim()) return subscriptions;

    const query = debouncedQuery.toLowerCase().trim();
    return subscriptions.filter(sub => {
      const workspaceName = sub.workspace?.name?.toLowerCase() ?? '';
      const userName = sub.user?.name?.toLowerCase() ?? '';
      const userEmail = sub.user?.email?.toLowerCase() ?? '';
      const productName = sub.price?.product?.name?.toLowerCase() ?? '';

      return workspaceName.includes(query) ||
             userName.includes(query) ||
             userEmail.includes(query) ||
             productName.includes(query);
    });
  }, [subscriptions, debouncedQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error loading subscriptions: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-6 md:p-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xl font-bold">Subscriptions</div>
          <p className="text-neutral-600 mt-2">
            View all active and past subscriptions for this agent
          </p>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search subscriptions..."
            className="w-full h-9 pl-9 pr-4 text-sm border border-neutral-200 rounded-md 
                      placeholder:text-neutral-400 focus:outline-none focus:ring-2 
                      focus:ring-blue-500/20 focus:border-blue-500"
          />
          <RiSearchLine 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" 
            size={16}
          />
        </div>
      </div>
      <div className="overflow-x-auto flex-grow">
        <div className="min-w-[600px] h-full">
          <Table 
            data={filteredSubscriptions ?? []}
            columns={columns}
            getRowClassName={(row) => 
              row.active === false ? 'bg-neutral-100' : ''
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsSection; 