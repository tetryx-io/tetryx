"use client";

import { useEffect, useState } from "react";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RiCalendarLine } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import { DateTooltip } from "@/components/Shared/DateTooltip";
import { CaretDownIcon } from "@radix-ui/react-icons";
import AddWebhook from "./AddWebhook";
import EditWebhook from "./EditWebhook";
import { useAgentInstallationHooksSubscription } from "@/generated/graphql";
import ConformationModel from "@/components/Modals/ConformationModel";
import { toast } from "react-hot-toast";
import { deleteWebhook } from "@/lib/services/webhook";
export interface Webhook {
  id: string;
  target_endpoint: string;
  headers: any;
  _up: Date;
  _cr: Date;
}

const ListWebhook = ({
  agent_id,
  installation_id,
}: {
  agent_id: string;
  installation_id: string;
}) => {
  const [isAddWebhookDialogOpen, setIsAddWebhookDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const {
    data: hooks,
    loading: hooksLoading,
    error: hooksError,
  } = useAgentInstallationHooksSubscription({
    variables: { agent_installation_id: installation_id },
    skip: !installation_id,
  });

  useEffect(() => {
    if (hooks) {
      const webhooks = hooks.agent_installation[0].hooks;
      if (searchQuery) {
        setWebhooks(
          webhooks.filter((hook) =>
            hook.target_endpoint
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
          ),
        );
      } else {
        setWebhooks(webhooks);
      }
    }
  }, [hooks, searchQuery]);

  const handleDelete = async () => {
    const res = await deleteWebhook({
      agent_id: agent_id,
      installation_id: installation_id,
      webhook_id: expandedRow,
    });
    if (res.status) {
      setIsDeleteDialogOpen(false);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold">Webhooks</h2>
        <button
          className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-neutral-800 whitespace-nowrap"
          onClick={() => setIsAddWebhookDialogOpen(true)}
        >
          <PlusIcon className="h-4 w-4" />
          <span>Add Webhook</span>
        </button>
      </div>
      <p className="text-neutral-600 mb-8 text-lg">
        Manage schedules for your agent.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search webhooks..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {webhooks.length === 0 ? (
            <div className="text-center py-8 text-neutral-600">
              No webhooks found.
            </div>
          ) : (
            webhooks.map((webhook: Webhook) => (
              <div key={webhook.id} className="border rounded-md">
                {/* Main Row Content */}

                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 gap-4 sm:gap-2 hover:bg-neutral-50 ${
                    expandedRow === webhook.id ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 w-full sm:w-1/3">
                    <RiCalendarLine className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <div
                        className="font-medium truncate cursor-pointer hover:text-blue-600 transition-colors"
                        data-tooltip-id={`key-${webhook.id}`}
                      >
                        {webhook.target_endpoint}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-1/3">
                    <div className="text-sm text-neutral-500 truncate">
                      <DateTooltip
                        date={webhook._up}
                        id={`updated-${webhook.id}`}
                      >
                        {webhook._up
                          ? `Updated ${formatDistanceToNow(new Date(webhook._up))} ago`
                          : "Never updated"}
                      </DateTooltip>
                    </div>
                  </div>
                  {/* Add a more prominent caret button */}
                  <button
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === webhook.id ? null : webhook.id,
                      )
                    }
                    className={`flex items-center justify-center w-8 h-8 hover:bg-neutral-100 rounded-md transition-transform ${
                      expandedRow === webhook.id
                        ? "rotate-180 bg-neutral-100"
                        : ""
                    }`}
                  >
                    <CaretDownIcon className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>
                {expandedRow === webhook.id && (
                  <div className="px-4 py-4 bg-neutral-50">
                    <EditWebhook
                      webhook={webhook}
                      agent_id={agent_id}
                      installation_id={installation_id}
                      handleDelete={() => setIsDeleteDialogOpen(true)}
                      handleClose={() => setExpandedRow(null)}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <AddWebhook
        show={isAddWebhookDialogOpen}
        handleClose={() => setIsAddWebhookDialogOpen(false)}
        agent_id={agent_id}
        installation_id={installation_id}
      />
      <ConformationModel
        isOpen={isDeleteDialogOpen}
        title="Delete Webhook"
        closeModel={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ListWebhook;
