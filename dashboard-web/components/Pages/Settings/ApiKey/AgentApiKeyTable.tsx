"use client";

import Table from "@/components/Shared/Table";
import { Fragment, useMemo, useState } from "react";
import { RiArrowDownSLine, RiFileCopyLine, RiSearchLine } from "react-icons/ri";
import { format } from "date-fns";
import { fontMono } from "@/components/Plate/lib/fonts";
import Link from "next/link";
import { __agent_url } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import { sortOptions, columnHelper } from "../API-Keys";

export default function AgentApiKeyTable({
  workspace,
  isWorkspaceAdmin,
  notifier,
}: {
  workspace: any;
  isWorkspaceAdmin: boolean;
  notifier: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    label: "Name",
  });

  const filteredAndSortedApiKeys = useMemo(() => {
    let apiKeys =
      workspace?.api_key_list.filter((key: any) => key.type === "AGENT") || [];

    // Apply search filter
    if (searchQuery) {
      apiKeys = apiKeys.filter((apiKey) => {
        const searchFields = [
          apiKey.name,
          apiKey.id,
          apiKey.assignee?.name,
          apiKey.creator?.name,
        ];
        const searchTerm = searchQuery.toLowerCase();
        return searchFields.some(
          (field) => field && field.toLowerCase().includes(searchTerm),
        );
      });
    }

    // Apply sorting
    return [...apiKeys].sort((a, b) => {
      const getValue = (obj: any, path: string) => {
        return path.split(".").reduce((o, i) => (o ? o[i] : null), obj);
      };

      const getAssigneeName = (key: any) => {
        return key.installation?.agent?.name || "Unnamed Agent";
      };

      const aValue =
        sortConfig.key === "assignee.name"
          ? getAssigneeName(a)
          : getValue(a, sortConfig.key) || "";
      const bValue =
        sortConfig.key === "assignee.name"
          ? getAssigneeName(b)
          : getValue(b, sortConfig.key) || "";

      if (sortConfig.key === "_cr" || sortConfig.key === "last_used") {
        const dateA = aValue ? new Date(aValue).getTime() : 0;
        const dateB = bValue ? new Date(bValue).getTime() : 0;
        return dateB - dateA; // Most recent first
      }

      return aValue.toString().localeCompare(bValue.toString());
    });
  }, [workspace?.api_key_list, searchQuery, sortConfig]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => <div className="">Name</div>,
        cell: ({ row }) => {
          const handleCopyKeyId = () => {
            const keyId = row.original?.id;
            navigator.clipboard
              .writeText(keyId)
              .then(() => {
                notifier.success({
                  title: "Key ID copied to clipboard",
                });
              })
              .catch(() => {
                notifier.error({
                  title: "Failed to copy Key ID",
                });
              });
          };

          return (
            <div className="flex gap-4 items-center w-full">
              <div className="flex flex-col group w-full">
                <div
                  className="font-medium truncate"
                  title={row.original?.name}
                >
                  {row.original?.name}
                </div>
                <div className="text-xs text-neutral-500 flex items-center w-full">
                  <span className="whitespace-nowrap w-full truncate">
                    <span
                      className={`${fontMono.className} truncate`}
                      title={row.original?.id}
                    >
                      {row.original?.id}
                    </span>
                  </span>
                  <button
                    onClick={handleCopyKeyId}
                    className="ml-1 p-1 hover:bg-neutral-100 rounded-md text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy Key ID"
                  >
                    <RiFileCopyLine size={12} />
                  </button>
                </div>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("_cr", {
        header: () => <div>Created On</div>,
        cell: ({ row }) => {
          const createdOn = row.original?._cr
            ? format(new Date(row.original?._cr), "MMM d, yyyy")
            : "-";

          return (
            <div className="text-sm w-full truncate" title={createdOn}>
              {createdOn}
            </div>
          );
        },
      }),
      columnHelper.accessor("last_used", {
        header: () => <div>Last Used</div>,
        cell: ({ row }) => {
          const lastUsed = row.original?.last_used
            ? format(new Date(row.original.last_used), "MMM d, yyyy")
            : "Never";

          return (
            <div className="text-sm w-full truncate" title={lastUsed}>
              {lastUsed}
            </div>
          );
        },
      }),
      columnHelper.accessor("creator", {
        header: () => <div className="flex flex-col">Created By</div>,
        cell: ({ row }) => {
          return (
            <div className="flex gap-4 items-center w-full">
              <div className="h-8 w-8 flex-shrink-0">
                <img
                  src={
                    row.original?.creator?.picture ||
                    "https://rfm.sh/assets/avatar.png"
                  }
                  alt={row.original?.creator?.name || "User Avatar"}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col w-full truncate">
                <div
                  className="font-medium truncate"
                  title={row.original?.creator?.name}
                >
                  {row.original?.creator?.name}
                </div>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("assignee", {
        header: () => <div className="">Assigned To</div>,
        cell: ({ row }) => {
          const agent = row.original?.installation?.agent;
          return (
            <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-4 items-center">
                  <div className="h-8 w-8 flex-shrink-0">
                    <img
                      src={
                        agent?.avatar_url || "https://rfm.sh/assets/avatar.png"
                      }
                      className="h-8 w-8 rounded-full object-cover"
                      alt="agent avatar"
                    />
                  </div>
                  <div className="flex flex-col w-full truncate">
                    <div className="font-medium truncate" title={agent?.name}>
                      <Link
                        href={__agent_url({
                          ...agent,
                          name: agent?.name || undefined,
                        })}
                        className="hover:underline"
                      >
                        {agent?.name || "Unnamed Agent"}
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          );
        },
      }),
    ],
    [isWorkspaceAdmin],
  );
  return (
    <div className="py-6 w-full flex flex-col gap-10 max-w-6xl h-full">
      <div className="rounded-md border border-neutral-200 flex-col p-10 justify-start items-start gap-8 mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              {workspace?.name} Agent API Keys
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-neutral-500">
              Agent API keys are automatically generated during agent
              installation. They cannot be deleted or manually created.
            </p>
            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Search Bar */}
              <div className="relative w-full sm:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiSearchLine className="h-4 w-4 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search API keys..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-neutral-50 whitespace-nowrap">
                    <RiArrowDownSLine className="h-4 w-4" />
                    <span>Sort by: {sortConfig.label}</span>
                    <RiArrowDownSLine className="h-4 w-4 text-neutral-400" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.key}>
                            {({ active }) => (
                              <button
                                onClick={() => setSortConfig(option)}
                                className={`${active ? "bg-neutral-50" : ""} ${
                                  sortConfig.key === option.key
                                    ? "text-blue-600"
                                    : "text-neutral-700"
                                } flex w-full items-center px-4 py-2 text-sm`}
                              >
                                {option.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Table
            data={
              filteredAndSortedApiKeys.map((apiKey) => ({
                ...apiKey,
                status: apiKey.last_seen ? "Active" : "Inactive",
              })) || []
            }
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
}
