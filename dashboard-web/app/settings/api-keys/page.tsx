"use client";

import ApiKeysManagement from "@/components/Pages/Settings/API-Keys";
import { useNotificationContext } from "@/components/Shared/Notification";
import React, { useState } from "react";
import { deleteApiKey } from "@/lib/services/user";

const MembersPage = () => {
  const [showDeleteApiKeyDialog, setShowDeleteApiKeyDialog] = useState<boolean>(false);
  const notifier: any = useNotificationContext();

  const handleDeleteApiKey = async (apiKey: { id: string }) => {
    if (!apiKey?.id) {
      notifier.error({
        title: "API key ID not found",
      });
      return;
    }
    
    const res = await deleteApiKey(apiKey.id);
    if (res?.status) {
      notifier.success({
        title: `API key successfully deleted`,
      });
      setShowDeleteApiKeyDialog(false);
    } else {
      throw new Error(res?.message || 'Failed to delete API key');
    }
  };

  const onCloseModal = () => {
    setShowDeleteApiKeyDialog(false);
  };

  return (
    <div>
      <ApiKeysManagement
        handleDeleteApiKey={handleDeleteApiKey}
        showDeleteApiKeyDialog={showDeleteApiKeyDialog}
        setShowDeleteApiKeyDialog={setShowDeleteApiKeyDialog}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

export default MembersPage;