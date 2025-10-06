import React, { useState } from 'react';
import { FiTrash2, FiDownload, FiEdit } from 'react-icons/fi';
import clsx from 'clsx';
import { motion } from "framer-motion";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { useSessionContext } from "@/lib/context/session";
import { Agent } from "@/types/agent";
import { __agent_url } from "@/lib/utils";

interface PublicAgentHeaderProps {
  agent: Agent;
  onRemoveAgent: () => void;
  onInstallAgent: () => void;
}


const PublicAgentHeader: React.FC<PublicAgentHeaderProps> = ({ agent, onRemoveAgent, onInstallAgent }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogAction, setDialogAction] = useState<'add_to_workspace' | 'uninstall'>('add_to_workspace');
  const dialogText = {
    add_to_workspace: 'add this agent to your workspace',
    uninstall: 'uninstall this agent'
  }
  const { session } = useSessionContext();

  const openDialog = (action: 'add_to_workspace' | 'uninstall') => {
    setDialogAction(action);
    setIsDialogOpen(true);
  };

  const handleConfirmAction = () => {
    if (dialogAction === 'add_to_workspace') {
      onInstallAgent();
    } else {
      onRemoveAgent();
    }
    setIsDialogOpen(false);
  };

  const canEditAgent = ['PUBLIC', 'WORKSPACE'].includes(agent?.visibility || '') && agent?.workspace_id === session?.data?.workspace?.id || ['USER'].includes(agent?.visibility || '') && agent?.creator_id === session?.data?.user?.id

  return (
    <div className="flex justify-center items-center sm:px-12 p-4 mb-16">
      <div className="w-full max-w-6xl">
        <div className={clsx('bg-white rounded-lg shadow-md p-6 mb-8')}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-20 w-20 rounded-md border-2 border-gray-200 overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={agent.avatar_url || "https://icons.veryicon.com/png/o/cartoon/bicolor-icon/robot-9.png"}
                alt={agent.name}
              />
            </motion.div>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mb-2 mr-4">{agent.name}</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-sm text-gray-600 mr-4">
                  <span className="font-semibold">{agent.install_count}</span> Users
                </span>
                <span className="text-sm text-gray-600 mr-4">
                  <span className="font-semibold">{agent.run_count}</span> Runs
                </span>
                {agent.installed ? (
                  <DefaultButton
                    label="Remove"
                    iconLeft={<FiTrash2 size={15} />}
                    variant="danger"
                    size="small"
                    onClick={() => openDialog('uninstall')}
                  />
                ) : (
                  <DefaultButton
                    label="Add to Workspace"
                    iconLeft={<FiDownload size={15} />}
                    variant="primary"
                    size="small"
                    onClick={() => openDialog('add_to_workspace')}
                  />
                )}
                {canEditAgent && (
                  <Link href={__agent_url(agent)} passHref>
                    <DefaultButton
                      label="Edit"
                      iconLeft={<FiEdit size={15} />}
                      variant="primary"
                      size="small"
                    />
                  </Link>
                )}
              </div>
              <div className="flex justify-end mt-2">
                <p className="text-sm text-gray-600">
                  Created on {new Date(agent._cr || '').toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium mb-2">
              Confirm {dialogAction === 'add_to_workspace' ? 'Installation' : 'Uninstallation'}
            </Dialog.Title>
            <Dialog.Description className="mb-4">
              Are you sure you want to {dialogText[dialogAction]}?
            </Dialog.Description>

            <div className="flex justify-end space-x-2">
              <DefaultButton
                label="Cancel"
                variant="secondary"
                size="small"
                onClick={() => setIsDialogOpen(false)}
              />
              <DefaultButton
                label={dialogAction === 'add_to_workspace' ? 'Add to Workspace' : 'Uninstall'}
                variant={dialogAction === 'add_to_workspace' ? 'primary' : 'danger'}
                size="small"
                onClick={handleConfirmAction}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PublicAgentHeader;
