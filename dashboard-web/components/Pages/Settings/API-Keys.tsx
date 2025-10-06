"use client";

import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { createColumnHelper } from "@tanstack/react-table";
import Input from "@/components/Shared/Input";
import { Table } from "@/components/Shared/Table";
import { format } from "date-fns";
import { Menu, Transition, Switch } from "@headlessui/react";
import {
  RiAddLine,
  RiCloseLine,
  RiKey2Line,
  RiFileCopyLine,
  RiSearchLine,
  RiMore2Fill,
} from "react-icons/ri";
import { Fragment, useMemo, useState } from "react";
import Dialog from "@/components/Common/Dialog";
import { ImSpinner8 } from "react-icons/im";
import { createApiKey } from "@/lib/services/user";
import { useNotificationContext } from "@/components/Shared/Notification";
import { useSessionContext } from "@/lib/context/session";
import { fontMono } from "@/components/Plate/lib/fonts";
import { CaretSortIcon, CaretDownIcon } from "@radix-ui/react-icons";
import AgentApiKeyTable from "./ApiKey/AgentApiKeyTable";

export const columnHelper: any = createColumnHelper();
export const sortOptions = [
  { key: "name", label: "Name" },
  { key: "_cr", label: "Creation Date" },
  { key: "last_used", label: "Last Used" },
  { key: "creator.name", label: "Created By" },
  { key: "assignee.name", label: "Assigned To" },
];
function ApiKeyActionsMenu({
  apiKey,
  setSelectedApiKey,
  setShowDeleteApiKeyDialog,
  isWorkspaceAdmin,
}: {
  apiKey: any;
  setSelectedApiKey: (apiKey: any) => void;
  setShowDeleteApiKeyDialog: (show: boolean) => void;
  isWorkspaceAdmin: boolean;
}) {
  if (!isWorkspaceAdmin) {
    return null;
  }

  return (
    <div className="">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-neutral-100 px-3 py-2 text-sm text-neutral-400">
            <RiMore2Fill className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 z-50 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-col gap-2 px-2 py-3">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-red-100" : ""
                    } group flex gap-3 w-full items-center text-red-600 rounded-md px-3 py-2 text-sm`}
                    onClick={() => {
                      setSelectedApiKey(apiKey);
                      setShowDeleteApiKeyDialog(true);
                    }}
                  >
                    <RiKey2Line size={16} />
                    Delete API Key
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default function ApiKeysManagement({
  handleDeleteApiKey,
  setShowDeleteApiKeyDialog,
  showDeleteApiKeyDialog,
  onCloseModal,
}: any) {
  const { session } = useSessionContext();
  const currentUserId = session?.data?.user?.id;
  const workspace = session?.data?.workspace;
  const members = workspace?.member_list;
  const isWorkspaceAdmin = useMemo(() => {
    return workspace?.members?.some(
      (member: any) =>
        member.user.id === currentUserId && member.role === "ADMIN",
    );
  }, [workspace?.members, currentUserId]);
  const [selectedApiKey, setSelectedApiKey] = useState<null | Record<
    string,
    string
  >>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [apiKeyName, setApiKeyName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    label: string;
  }>({ key: "name", label: "Name" });
  const [selectedMember, setSelectedMember] = useState(() => {
    if (
      currentUserId &&
      members?.some((member) => member.id === currentUserId)
    ) {
      return currentUserId;
    }
    return "";
  });
  const [isDevMode, setIsDevMode] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const notifier: any = useNotificationContext();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newApiKey, setNewApiKey] = useState<{
    id: string;
    secret: string;
    name: string;
  } | null>(null);


  const filteredAndSortedApiKeys = useMemo(() => {
    let apiKeys =
      workspace?.api_key_list.filter((key: any) => key.type === "USER") || [];

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
        if (key.type === "AGENT" && key.installation?.agent) {
          return key.installation.agent.name || "Unnamed Agent";
        }
        return key.assignee?.name || "";
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

  const handleCreateApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMember) return;

    setIsCreating(true);
    try {
      const result = await createApiKey({
        assignee_id: selectedMember,
        name: apiKeyName || undefined,
        type: "USER",
        is_dev_mode: isDevMode,
      });

      if (result?.status) {
        setNewApiKey({
          id: result.data.key.id,
          secret: result.data.key.secret,
          name: result.data.key.name,
        });
        setShowSuccessModal(true);
        setShowCreateModal(false);
        setSelectedMember("");
        setApiKeyName("");
        setIsDevMode(false);
      } else {
        notifier.error({
          title: result?.message || "Failed to create API key",
        });
      }
    } catch (error) {
      notifier.error({
        title: "Failed to create API key",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleCopyApiKey = async () => {
    if (!newApiKey?.secret) return;

    try {
      const secret = `${newApiKey.id}.${newApiKey.secret}`;
      await navigator.clipboard.writeText(secret);
      notifier.success({
        title: "API key copied to clipboard",
      });
    } catch (error) {
      notifier.error({
        title: "Failed to copy API key",
      });
    }
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor("member", {
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
      columnHelper.accessor("role", {
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
      columnHelper.accessor("role", {
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
          const assignee = row.original?.assignee;
          return (
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-4 items-center w-full">
                <div className="h-8 w-8 flex-shrink-0">
                  <img
                    src={assignee.picture || "https://rfm.sh/assets/avatar.png"}
                    className="h-8 w-8 rounded-full object-cover"
                    alt={assignee.name || "User Avatar"}
                  />
                </div>
                <div className="flex flex-col w-full truncate">
                  <div className="font-medium truncate" title={assignee.name}>
                    {assignee.name}
                  </div>
                </div>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("actions", {
        header: () => <div></div>,
        cell: ({ row }) => (
          <ApiKeyActionsMenu
            apiKey={row.original}
            setSelectedApiKey={setSelectedApiKey}
            setShowDeleteApiKeyDialog={setShowDeleteApiKeyDialog}
            isWorkspaceAdmin={isWorkspaceAdmin}
          />
        ),
      }),
    ],
    [isWorkspaceAdmin],
  );

  const modals = {
    deleteApiKeyModal: {
      name: "Delete API Key",
      icon: <RiKey2Line size={24} />,
      type: "destructive",
      title: "Delete API Key",
      body: `Are you sure you want to delete this API Key? This action cannot be undone and will immediately revoke access for any services using this key.`,
      primary_cta: {
        label: isDeleting ? "Deleting..." : "Delete",
        action: async () => {
          if (!selectedApiKey?.id) {
            notifier.error({
              title: "No API key selected for deletion",
            });
            return;
          }
          if (selectedApiKey?.type === "AGENT") {
            notifier.error({
              title: "Cannot delete agent API keys",
            });
            return;
          }
          if (!isWorkspaceAdmin) {
            notifier.error({
              title: "Only workspace admins can delete API keys",
            });
            return;
          }
          setIsDeleting(true);
          try {
            await handleDeleteApiKey(selectedApiKey);
          } finally {
            setIsDeleting(false);
          }
        },
      },
      secondary_cta: {
        label: "Cancel",
        action: onCloseModal,
      },
    },
  };

  const actionDialog = ({
    name,
    icon,
    type,
    title,
    body,
    primary_cta,
    secondary_cta,
  }) => {
    const getModalStyle = () => {
      if (type === "destructive") {
        return "p-4 w-fit rounded-full bg-red-50 text-red-600";
      }
      return "p-4 w-fit rounded-full bg-neutral-100 text-neutral-600";
    };

    return (
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          {type && <div className={getModalStyle()}>{icon}</div>}
          <div>
            <div className="text-xl font-bold mb-3">{title}</div>
            <div className="text-neutral-600">{body}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <DefaultButton
            label={secondary_cta.label}
            onClick={secondary_cta.action}
            variant="default"
            size="medium"
            styleClass="font-medium text-neutral-500"
            disabled={isDeleting}
          />
          <DefaultButton
            label={primary_cta.label}
            onClick={primary_cta.action}
            variant="primary"
            size="medium"
            styleClass={`font-medium ${isDeleting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isDeleting}
            iconRight={
              isDeleting ? (
                <ImSpinner8 className="w-4 h-4 animate-spin" />
              ) : undefined
            }
          />
        </div>
        <div className="absolute top-10 right-10">
          <RiCloseLine
            size={32}
            onClick={onCloseModal}
            className="cursor-pointer hover:bg-neutral-100 rounded p-1 text-neutral-400"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="py-6 w-full flex flex-col gap-10 max-w-6xl h-full">
        <div className="rounded-md border border-neutral-200 flex-col p-10 justify-start items-start gap-8 mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">
                {workspace?.name} API Keys
              </div>
              <DefaultButton
                onClick={() => setShowCreateModal(true)}
                label="Create API Key"
                variant="primary"
                iconRight={<RiAddLine className="h-4 w-4" />}
                styleClass="w-fit font-medium"
              />
            </div>
            <div className="flex flex-col gap-4">
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
                      <CaretSortIcon className="h-4 w-4" />
                      <span>Sort by: {sortConfig.label}</span>
                      <CaretDownIcon className="h-4 w-4 text-neutral-400" />
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
                                  className={`${
                                    active ? "bg-neutral-50" : ""
                                  } ${
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

        <Dialog
          className="text-black"
          title={""}
          isOpen={showDeleteApiKeyDialog}
          closeModal={onCloseModal}
        >
          {actionDialog(modals.deleteApiKeyModal)}
        </Dialog>

        <Dialog
          className="text-black"
          title={""}
          isOpen={showCreateModal}
          closeModal={() => setShowCreateModal(false)}
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="p-4 w-fit rounded-full bg-neutral-100 text-neutral-600">
                <RiKey2Line size={24} />
              </div>
              <div>
                <div className="text-xl font-bold mb-3">Create new API Key</div>
                <div className="text-neutral-600">
                  Create a new API key for programmatic access to your
                  workspace.
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-6" onSubmit={handleCreateApiKey}>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-600">
                  Assign to member <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={selectedMember}
                  onChange={(e) => setSelectedMember(e.target.value)}
                  className="w-full p-2 rounded-md border border-neutral-200 focus:border-black focus:outline-none bg-white text-neutral-600"
                >
                  <option value="" disabled>
                    Select a member
                  </option>
                  {(members || []).map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.id === currentUserId
                        ? `${member.name || member.email} (You)`
                        : member.name || member.email}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-600">API Key name</label>
                <Input
                  type="text"
                  name="name"
                  value={apiKeyName}
                  placeholder="Enter API key name (optional)"
                  onChange={(e) => setApiKeyName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 border rounded-md">
                <span className="text-[15px] font-semibold text-neutral-600">
                  Dev Mode
                </span>
                <Switch
                  checked={isDevMode}
                  onChange={setIsDevMode}
                  className={`${
                    isDevMode ? "bg-black" : "bg-neutral-200"
                  } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black/20`}
                >
                  <span
                    className={`${
                      isDevMode ? "translate-x-5" : "translate-x-1"
                    } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <DefaultButton
                  label="Cancel"
                  onClick={() => setShowCreateModal(false)}
                  variant="default"
                  size="medium"
                  styleClass="font-medium text-neutral-500"
                />
                <DefaultButton
                  label={isCreating ? "Creating..." : "Create"}
                  type="submit"
                  variant="primary"
                  size="medium"
                  disabled={isCreating || !selectedMember}
                  styleClass={`font-medium ${isCreating || !selectedMember ? "opacity-50 cursor-not-allowed" : ""}`}
                  iconRight={
                    isCreating ? (
                      <ImSpinner8 className="w-4 h-4 animate-spin" />
                    ) : undefined
                  }
                />
              </div>
            </form>
            <div className="absolute top-10 right-10">
              <RiCloseLine
                size={32}
                onClick={() => setShowCreateModal(false)}
                className="cursor-pointer hover:bg-neutral-100 rounded p-1 text-neutral-400"
              />
            </div>
          </div>
        </Dialog>

        <Dialog
          className="text-black"
          title={""}
          isOpen={showSuccessModal}
          closeModal={() => setShowSuccessModal(false)}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-4 w-fit rounded-full bg-green-100 text-green-600">
                <RiKey2Line size={24} />
              </div>
              <div>
                <div className="text-xl font-bold mb-2">
                  API Key Created Successfully
                </div>
                <div className="text-neutral-600">
                  This is the only time you'll see this secret key. Please store
                  it securely.
                </div>
              </div>
            </div>

            {newApiKey?.name && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-600">
                  Name
                </label>
                <div className="text-sm bg-neutral-100 p-3 rounded-md">
                  {newApiKey.name}
                </div>
              </div>
            )}
            {newApiKey?.id && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-600">
                  API Key ID
                </label>
                <div className="text-sm bg-neutral-100 p-3 rounded-md">
                  {newApiKey.id}
                </div>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-600">
                API Key
              </label>
              <div className="flex gap-2">
                <code className="flex-1 font-mono text-sm bg-neutral-100 p-3 rounded-md break-all">
                  {`${newApiKey?.id}.${newApiKey?.secret}`}
                </code>
                <button
                  onClick={handleCopyApiKey}
                  className="p-3 hover:bg-neutral-100 rounded-md text-neutral-600"
                  title="Copy to clipboard"
                >
                  <RiFileCopyLine size={20} />
                </button>
              </div>
            </div>

            <DefaultButton
              label="Done"
              onClick={() => setShowSuccessModal(false)}
              variant="primary"
              size="medium"
              styleClass="w-full font-medium mt-2"
            />
          </div>
        </Dialog>
      </div>
      <AgentApiKeyTable
        workspace={workspace}
        isWorkspaceAdmin={isWorkspaceAdmin}
        notifier={notifier}
      />
    </>
  );
}
