"use client";

import * as Avatar from '@radix-ui/react-avatar';
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { createColumnHelper } from "@tanstack/react-table";
import Input from "@/components/Shared/Input";
import { Table } from "@/components/Shared/Table";
import Link from "next/link";
import { formatDistanceToNow, parseISO } from "date-fns";
import { capitalize } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import {
  RiAddCircleLine,
  RiArrowDownSLine,
  RiCloseLine,
  RiDeleteBinLine,
  RiMoreFill,
  RiProhibitedLine,
  RiSendPlaneFill,
  RiUserSettingsFill,
  RiUserSettingsLine,
  RiUserUnfollowFill,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { Fragment, useMemo, useState } from "react";
import Dialog from "@/components/Common/Dialog";
import { ImSpinner8 } from "react-icons/im";
import { useGetPendingInvitesSubscription } from "@/generated/graphql";
import { useSessionContext } from "@/lib/context/session";
import { Badge } from '@/components/ui/badge';

const columnHelper: any = createColumnHelper();

function MemberActionsMenu({
  user,
  setSelectedUser,
  setShowChangeRoleDialog,
  setShowRemoveMemberDialog,
}: any) {
  console.log("user", user)
  return (
    <div className="">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-neutral-100 px-3 py-2 text-sm text-neutral-400">
            <RiMoreFill className="h-5 w-5" aria-hidden="true" />
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
            <div className="flex flex-col gap-2 px-2 py-3 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-neutral-100" : "text-black"
                      } group flex gap-3 w-full items-center rounded-md px-3 py-2 text-sm`}
                    onClick={() => {
                      setSelectedUser(user);
                      setShowChangeRoleDialog(true);
                    }}
                  >
                    <RiUserSettingsLine size={16} />
                    Change role
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-red-100" : ""
                      } group flex gap-3 w-full items-center text-red-600 rounded-md px-3 py-2 text-sm`}
                    onClick={() => {
                      setSelectedUser(user);
                      setShowRemoveMemberDialog(true);
                    }}
                  >
                    <RiUserUnfollowLine size={16} />
                    Remove
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

function InviteesActionsMenu({
  user,
  selectedUser,
  setSelectedUser,
  handleAnnulInvite,
  setShowAnnulInviteDialog,
  handleResendInvite,
  setShowResendInviteDialog,
}: any) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-neutral-100 px-3 py-2 text-sm text-neutral-400">
            <RiMoreFill className="h-5 w-5" aria-hidden="true" />
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
            <div className="flex flex-col gap-2 px-2 py-3 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-neutral-100" : "text-black"
                      } group flex gap-3 w-full items-center rounded-md px-3 py-2 text-sm`}
                    onClick={() => {
                      setSelectedUser(user);
                      setShowResendInviteDialog(true);
                    }}
                  >
                    <RiSendPlaneFill size={16} />
                    Resend Invite
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-red-100" : ""
                      } group flex gap-3 w-full items-center text-red-600 rounded-md px-3 py-2 text-sm`}
                    onClick={() => {
                      setSelectedUser(user);
                      setShowAnnulInviteDialog(true);
                    }}
                  >
                    <RiProhibitedLine size={16} />
                    Annul Invite
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

export default function MembersManagement({
  handleOnSubmit,
  handleEmailInput,
  handleRoleSelection,
  handleAddInput,
  handleDeleteFields,
  inputs,
  members,
  handleChangeRole,
  handleRemoveUser,
  handleAnnulInvite,
  handleResendInvite,
  setShowRemoveMemberDialog,
  showRemoveMemberDialog,
  onCloseModal,
  showChangeRoleDialog,
  setShowChangeRoleDialog,
  showAnnulInviteDialog,
  setShowAnnulInviteDialog,
  showResendInviteDialog,
  setShowResendInviteDialog,
  modalApiCallLoading,
  inviteUsersLoading,
  currentMembership,
  workspace,
}: any) {
  const [selectedUserOrInvite, setSelectedUserOrInvite] =
    useState<null | Record<string, string>>(null);
  const [changeRoleValue, setChangeRoleValue] = useState("");

  const { session } = useSessionContext();
  const { data: pendingInvites, loading: pendingInvitesLoading, error: pendingInvitesError } = useGetPendingInvitesSubscription();

  const currentUserRole = session?.data?.workspace?.member_list?.find(
    member => member.id === session?.data?.user?.id
  )?.role;
  
  const is_owner_or_admin = currentUserRole === "OWNER" || currentUserRole === "ADMIN";

  const columns = useMemo(
    () => [
      columnHelper.accessor("member", {
        header: () => <div className="">Name</div>,
        cell: ({ row }) => {
          if (row.original.__typename === "app_invite") {
            return (
              <div className="flex gap-4 items-center w-full truncate">
                <img
                  src="/images/avatar.svg"
                  className="hidden md:flex h-10 w-10 object-cover rounded-full"
                  alt="user avatar"
                />
                <div className="flex flex-col w-full truncate">
                  <div className="flex items-center gap-2 w-full truncate">
                    <Badge variant="outline" title="Pending">Pending</Badge>
                  </div>
                  <div className="font-medium truncate" title={row.original.email}>{row.original.email}</div>
                </div>


              </div>
            );
          }
          return (
            <div className="flex gap-4 items-center w-full truncate">
              {row?.original?.picture !== "https://rfm.sh/assets/avatar.png" ? (
                <img
                  src={row.original?.picture || "https://rfm.sh/assets/avatar.png"}
                  className="hidden md:flex h-10 w-10 object-cover rounded-full"
                  alt="user avatar"
                />
              ) : (
                <Avatar.Root className="hidden md:flex">
                  <Avatar.Image
                    src={row.original?.picture}
                    alt={row.original?.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <Avatar.Fallback 
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-600"
                  >
                    {row.original?.name?.charAt(0) || 'U'}
                  </Avatar.Fallback>
                </Avatar.Root>
              )}
              <div className="flex flex-col w-full truncate">
                <div className="font-medium truncate" title={row.original?.name}>{row.original?.name}</div>
                <div className="text-sm text-neutral-500 truncate" title={row.original?.email}>
                  {row.original?.email}
                </div>
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("role", {
        header: () => <div>Role</div>,
        cell: ({ row }) => (
          <div className="text-sm w-full truncate">{capitalize(row.original?.role || "-")}</div>
        ),
      }),
      columnHelper.accessor("status", {
        header: () => <div>Activity</div>,
        cell: ({ row }) => {
          if (row.original.__typename === "invite") {
            return (
              <div className="text-sm text-amber-600 italic w-full truncate">
                Pending Invite
              </div>
            );
          }
          // console.log(row.original, "last seen")

          return (
            <div className="text-sm text-neutral-500 w-full truncate">
              {row.original?.last_seen
                ? `${formatDistanceToNow(
                  parseISO(row.original?.last_seen)
                )} ago`
                : "-"}
            </div>
          );
        },
      }),
      columnHelper.accessor("actions", {
        header: () => <div></div>,
        cell: ({ row }) => {

          if (row.original.__typename === "invite") {
            return (
              <InviteesActionsMenu
                user={row.original}
                selectedUser={selectedUserOrInvite}
                setSelectedUser={setSelectedUserOrInvite}
                setShowAnnulInviteDialog={setShowAnnulInviteDialog}
                setShowResendInviteDialog={setShowResendInviteDialog}
                handleAnnulInvite={handleAnnulInvite}
                handleResendInvite={handleResendInvite}
              />
            );
          } else {
            return (
              <MemberActionsMenu
                user={row.original}
                selectedUser={selectedUserOrInvite}
                setSelectedUser={setSelectedUserOrInvite}
                setShowChangeRoleDialog={setShowChangeRoleDialog}
                setShowRemoveMemberDialog={setShowRemoveMemberDialog}
                handleChangeRole={handleChangeRole}
              />
            );
          }

          // if (
          //   row.original.role === "OWNER" &&
          //   currentMembership?.role !== "OWNER"
          // )
          //   return;

          // if (row.original.user._id === currentMembership?.user?._id) return;


        },
      }),
    ],
    [currentMembership]
  );

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
      if (type) {
        if (type === "destructive") {
          return "p-4 w-fit rounded-full bg-red-50 text-red-600";
        } else {
          return "p-4 w-fit rounded-full bg-neutral-100 text-neutral-600";
        }
      }
      return "p-4 w-fit rounded-full bg-neutral-100 text-neutral-600";
    };

    if (name === "Change role") {
      return (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            {type && <div className={getModalStyle()}>{icon}</div>}
            <div>
              <div className="text-xl font-bold mb-3">{title}</div>
              <div className="text-neutral-600">{body}</div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              primary_cta.action(changeRoleValue);
            }}
          >
            <div className="flex items-center w-7/12 p-2 mb-8 rounded-md border bg-neutral-50 focus:border-black">
              <select
                required
                defaultValue=""
                onChange={(e) => {
                  setChangeRoleValue(e.target.value);
                }}
                value={changeRoleValue}
                className="w-full nodrag focus:outline-none bg-neutral-50 text-neutral-600"
              >
                <option value="" disabled>
                  Choose role
                </option>
                <option value="ADMIN">Admin</option>
                <option value="MEMBER">Member</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type={"button"}
                onClick={onCloseModal}
                className="text-center flex gap-2 rounded-md flex-none items-center justify-center text-gray border hover:border-neutral-600 font-semibold px-4 py-2 text-sm text-neutral-500"
              >
                {secondary_cta.label}
              </button>
              <button
                type="submit"
                disabled={modalApiCallLoading}
                className="text-center flex gap-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md flex-none items-center justify-center bg-black text-white font-medium px-4 py-2 text-sm"
              >
                {primary_cta.label}
              </button>
            </div>
          </form>
          <div className="absolute top-10 right-10">
            <RiCloseLine
              size={32}
              onClick={onCloseModal}
              className="cursor-pointer hover:bg-neutral-100 rounded p-1 text-neutral-400"
            />
          </div>
        </div>
      );
    }

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
          />
          <DefaultButton
            label={primary_cta.label}
            onClick={primary_cta.action}
            variant="primary"
            size="medium"
            styleClass="font-medium"
            disabled={modalApiCallLoading}
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

  const modals = {
    rmModal: {
      name: "Remove member",
      icon: <RiUserUnfollowFill size={24} />,
      type: "destructive",
      title: "Remove this member",
      body: (
        <>
          Remove <strong>{selectedUserOrInvite?.name ?? selectedUserOrInvite?.email}</strong> with the role <strong>{capitalize(selectedUserOrInvite?.role || '')}</strong>. This action cannot be undone
        </>
      ),
      primary_cta: {
        label: "Remove",
        action: async () => {
          console.log("selectedUserOrInvite", selectedUserOrInvite)
          await handleRemoveUser(selectedUserOrInvite?.id);
          // onCloseModal();
        },
      },
      secondary_cta: {
        label: "Dismiss",
        action: onCloseModal,
      },
    },

    crModal: {
      name: "Change role",
      icon: <RiUserSettingsFill size={24} />,
      type: "update",
      title: "Change this user's role",
      body: `Review the changes carefully as this action will affect ${selectedUserOrInvite?.name}'s access and capabilities.`,
      primary_cta: {
        label: "Update",
        action: async (changeRoleValue: string) => {
          await handleChangeRole(selectedUserOrInvite?.id, changeRoleValue);
          setChangeRoleValue("");
        },
      },
      secondary_cta: {
        label: "Dismiss",
        action: onCloseModal,
      },
    },

    aiModal: {
      name: "Annul invite",
      icon: <RiProhibitedLine size={24} />,
      type: "destructive",
      title: "Annul invite",
      body: `This will invalidate the link sent to ${selectedUserOrInvite?.email}, preventing access to the ${workspace?.name} workspace.`,
      primary_cta: {
        label: "Annul invite",
        action: async () => {
          await handleAnnulInvite(selectedUserOrInvite?.id);
          onCloseModal();
        },
      },
      secondary_cta: {
        label: "Dismiss",
        action: onCloseModal,
      },
    },

    riModal: {
      name: "Resend invite",
      icon: <RiSendPlaneFill size={24} />,
      type: "confirmation",
      title: "Resend invite",
      body: `This will send an invitation link again to ${selectedUserOrInvite?.email} inviting them into the workspace.`,
      primary_cta: {
        label: "Send email",
        action: async () => {
          await handleResendInvite(selectedUserOrInvite?.id);
          onCloseModal();
        },
      },
      secondary_cta: {
        label: "Dismiss",
        action: onCloseModal,
      },
    },
  };

  return (
    <div className="py-6 w-full lg:w-8/12 flex flex-col gap-10 max-w-6xl h-full">
      {is_owner_or_admin && (
        <form
          onSubmit={handleOnSubmit}
          className="rounded-md border border-neutral-200 flex-col justify-start items-start gap-8"
        >
          <div className="flex flex-col gap-5 p-10">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="text-xl font-bold">Invite new members</div>

              </div>
              <div className="text-neutral-700">This is your username for this workspace. Your username will be used on activity logs, account reports, prompt history and billing information.</div>
            </div>
            {(inputs || []).map((item, index) => (
              <div key={index} className="flex gap-5">
                <div className="w-full">
                  <Input
                    required
                    type="email"
                    value={inputs[index].email}
                    name="name"
                    placeholder="Enter email"
                    onChange={(e) => {
                      handleEmailInput(e, index);
                    }}
                  />
                </div>
                <div className="flex items-center w-full h-fit py-1.5 px-3 rounded-md border bg-neutral-50 focus:border-black">
                  <select
                    defaultValue={""}
                    value={inputs[index].role}
                    required
                    onChange={(e) => {
                      handleRoleSelection(e, index);
                    }}
                    className="w-full p-0 nodrag focus:outline-none bg-neutral-50"
                  >
                    <option value="" disabled>
                      Choose role
                    </option>
                    {currentMembership?.role === "OWNER" && (
                      <option value="OWNER">Owner</option>
                    )}
                    <option value="ADMIN">Admin</option>
                    <option value="MEMBER">Member</option>
                  </select>
                </div>
                {(inputs || []).length > 1 && (
                  <DefaultButton
                    onClick={() => handleDeleteFields(index)}
                    variant="ghost"
                    iconRight={<RiDeleteBinLine className="h-4 w-4" />}
                    styleClass="w-fit font-medium text-neutral-500 hover:text-red-600"
                  />
                )}
              </div>
            ))}
            <DefaultButton
              onClick={handleAddInput}
              label="Add more"
              variant="default"
              iconRight={<RiAddCircleLine className="h-4 w-4" />}
              styleClass="w-fit !py-2 font-medium text-neutral-500"
            />
          </div>
          <div className="flex bg-neutral-50 py-4 px-10 justify-between items-center border-t">
            <div className="flex gap-1 text-sm text-neutral-500">
              Invitation links expire after 3 days.
            </div>
            {inviteUsersLoading ? (<ImSpinner8
              className="animate-spin"
              size={16}
              color="black"
            />) : (<DefaultButton
              disabled={ !((inputs || []).filter((item)=> item.email !== "").length === inputs?.length) }
              type={"submit"}
              label="Send invite"
              variant="primary"
              size="medium"
              styleClass="w-fit font-medium"
            />)}

          </div>
        </form>
      )}

      <div className="rounded-md border border-neutral-200 flex-col p-10 justify-start items-start gap-8 mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="text-xl font-bold">Team members</div>
          </div>
        </div>
        <Table
          data={is_owner_or_admin ? 
            ((members || []).map((member)=> ({
              ...member,
              status: member.last_seen ? "Active" : "Inactive"
            })) || []).concat(pendingInvites?.app_invite || [])
            :
            ((members || []).map((member)=> ({
              ...member,
              status: member.last_seen ? "Active" : "Inactive"
            })) || [])
          }
          columns={columns}
        />
      </div>
      <Dialog
        className="text-black"
        title={""}
        isOpen={showRemoveMemberDialog}
        closeModal={onCloseModal}
      >
        {actionDialog(modals.rmModal)}
      </Dialog>

      <Dialog
        className="text-black"
        title={""}
        isOpen={showChangeRoleDialog}
        closeModal={onCloseModal}
      >
        {actionDialog(modals.crModal)}
      </Dialog>

      <Dialog
        className="text-black"
        title={""}
        isOpen={showAnnulInviteDialog}
        closeModal={onCloseModal}
      >
        {actionDialog(modals.aiModal)}
      </Dialog>
      <Dialog
        className="text-black"
        title={""}
        isOpen={showResendInviteDialog}
        closeModal={onCloseModal}
      >
        {actionDialog(modals.riModal)}
      </Dialog>
    </div>
  );
}
