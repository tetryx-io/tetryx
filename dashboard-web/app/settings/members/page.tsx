"use client";

import MembersManagement from "@/components/Pages/Settings/UserManagement";
import { useNotificationContext } from "@/components/Shared/Notification";
import React, { ChangeEvent, useMemo, useState } from "react";
import { useSessionContext } from "@/lib/context/session";
import Loader from "@/components/Common/AtriumLoader";
import {
  inviteUsersByWorkspace,
  resendInviteToUser,
  userRoleChange,
  userToRemove,
} from "@/lib/services/user";
import { gql } from "@apollo/client";
import { createApolloClient } from "@/lib/apolloClient";

const UPDATE_ANUAL_INVITES = gql`
  mutation AnnulInvite($invite_id: String!) {
    delete_invite(where: { id: { _eq: $invite_id } }) {
      returning {
        id
        _uid
      }
    }
  }
`;

const MembersPage = () => {
  const apolloClient = useMemo(() => createApolloClient(""), []);
  const [showRemoveMemberDialog, setShowRemoveMemberDialog] =
    useState<boolean>(false);
  const [showAnnulInviteDialog, setShowAnnulInviteDialog] =
    useState<boolean>(false);
  const [showChangeRoleDialog, setShowChangeRoleDialog] =
    useState<boolean>(false);
  const [showResendInviteDialog, setShowResendInviteDialog] =
    useState<boolean>(false);
  const [modalApiCallLoading, setModalApiCallLoading] =
    useState<boolean>(false);
  const [inviteUsersLoading, setInviteUsersLoading] = useState<boolean>(false);
  const { session } = useSessionContext();

  const pendingInvites = {};
  const currentMembership = {};

  const notifier: any = useNotificationContext();

  const defaultState = [{ email: "", role: "" }];
  const [inputs, setInputs] = useState(defaultState);

  const handleEmailInput = (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const values = [...inputs];
    values[index].email = event.target.value;
    setInputs(values);
  };

  const handleRoleSelection = (
    event: ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const inputsCopy = [...inputs];
    inputsCopy[index].role = event.target.value;
    setInputs(inputsCopy);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { email: "", role: "" }]);
  };

  const handleDeleteFields = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setInviteUsersLoading(true);
    await inviteUsersByWorkspace(inputs)
      .then((res) => {
        setInviteUsersLoading(false);
        if (!res?.status) {
          notifier.error({
            title: res?.message || "Failed to send invitations"
          });
          return;
        }

        setInputs(defaultState);
        notifier.success({
          title: res.message
        });
      })
      .catch((error) => {
        setInviteUsersLoading(false);
        notifier.error({
          title: error?.message || "Failed to send invitations - Please try again later"
        });
      });
  };

  const handleChangeRole = async (userId: string, newRole: string) => {
    setModalApiCallLoading(true);
    await userRoleChange({
      user_id: userId,
      new_role: newRole,
    })
      .then((res) => {
        if (res && res.data) {
          notifier.success({
            title: `Role Successfully Changed`,
          });
          setModalApiCallLoading(false);
          setShowChangeRoleDialog(false);
        }
      })
      .catch((e) => {
        console.error(e);
        notifier.error({
          title: `Failed to change role`,
        });
        setModalApiCallLoading(false);
        setShowChangeRoleDialog(false);
      });
  };

  const handleRemoveUser = async (userId: string) => {
    setModalApiCallLoading(true);
    console.log(userId)
    await userToRemove({ id: userId })
      .then((res) => {
        if (res && res.data) {
          notifier.success({
            title: `User successfully removed`,
          });
          setModalApiCallLoading(false);
          setShowRemoveMemberDialog(false);
        }
      })
      .catch((e) => {
        console.error(e);
        notifier.error({
          title: `Failed to remove user`,
        });
        setModalApiCallLoading(false);
        setShowRemoveMemberDialog(false);
      });
  };

  const onCloseModal = () => {
    setShowRemoveMemberDialog(false);
    setShowChangeRoleDialog(false);
    setShowAnnulInviteDialog(false);
    setShowResendInviteDialog(false);
  };

  const handleAnnulInvite = async (inviteId: string) => {
    try {
      setModalApiCallLoading(true);
      const response = await apolloClient.mutate({
        mutation: UPDATE_ANUAL_INVITES,
        variables: {
          invite_id: inviteId,
        },
      });
      if (response) {
        notifier.success({
          title: `Invite successfully annulled`,
        });
        setShowAnnulInviteDialog(false);
      }
    } catch (e) {
      console.error(e);
      notifier.error({
        title: `Failed to annul invite`,
      });
    } finally {
      setModalApiCallLoading(false);
      setShowAnnulInviteDialog(false);
    }
  };

  const handleResendInvite = async (inviteId: string) => {
    setModalApiCallLoading(true);
    await resendInviteToUser({
      invite_id: inviteId,
    })
      .then((res) => {
        if (res && res.data) {
          notifier.success({
            title: `Invite successfully resent`,
          });
          setInputs(defaultState);
          setModalApiCallLoading(false);
          setShowResendInviteDialog(false);
        }
      })
      .catch((e) => {
        console.error(e);
        notifier.error({
          title: `Failed to resend invite`,
        });
        setModalApiCallLoading(false);
        setShowResendInviteDialog(false);
      });
  };

  if (session.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <Loader />
        </div>
      </div>
    );
  }

  if (session.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl font-semibold">
          Error: Unable to load session data
        </p>
      </div>
    );
  }

  return (
    <div>
      <MembersManagement
        members={session?.data?.workspace?.member_list}
        pendingInvites={pendingInvites}
        inputs={inputs}
        sess
        workspace={session?.data?.workspace}
        handleOnSubmit={handleOnSubmit}
        handleAddInput={handleAddInput}
        handleDeleteFields={handleDeleteFields}
        handleEmailInput={handleEmailInput}
        handleRoleSelection={handleRoleSelection}
        handleChangeRole={handleChangeRole}
        handleRemoveUser={handleRemoveUser}
        handleAnnulInvite={handleAnnulInvite}
        handleResendInvite={handleResendInvite}
        showRemoveMemberDialog={showRemoveMemberDialog}
        setShowRemoveMemberDialog={setShowRemoveMemberDialog}
        onCloseModal={onCloseModal}
        showChangeRoleDialog={showChangeRoleDialog}
        setShowChangeRoleDialog={setShowChangeRoleDialog}
        showAnnulInviteDialog={showAnnulInviteDialog}
        setShowAnnulInviteDialog={setShowAnnulInviteDialog}
        showResendInviteDialog={showResendInviteDialog}
        setShowResendInviteDialog={setShowResendInviteDialog}
        modalApiCallLoading={modalApiCallLoading}
        inviteUsersLoading={inviteUsersLoading}
        currentMembership={currentMembership}
      />
    </div>
  );
};

export default MembersPage;
