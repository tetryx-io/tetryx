"use client"
import Skeleton from 'react-loading-skeleton';
import { useAgentInstallationFileSubscription } from '@/generated/graphql';
import FileCard from '@/components/Common/FilePreview';
import { deleteFile } from '@/lib/services/prompt';
import { useParams } from "next/navigation";
import { motion } from 'framer-motion';

const UploadedFilesPanel = ({ }: any) => {
  const {agent_installation: agent_installation_id} = useParams();

  const __file = useAgentInstallationFileSubscription({
    variables: {
      agent_installation_id: agent_installation_id as string
    },
    skip: !agent_installation_id
  });

  console.log("⭐️",__file)


  if (__file.loading) {
    return <div><Skeleton baseColor="#f2f2f2" highlightColor="#fafafa" height={84} count={1} width={"w-full"} style={{ marginBottom: "8px" }} /></div>
  }

  const handleRemoveFile = (fileId: string) => {
      deleteFile(fileId)
  };

  return (
    <div className="mb-2 w-full">
      <div className="space-y-4">
        {__file?.data?.file?.map((item, index) => (
          <motion.div
            key={item.id} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index }}
          >
            <FileCard 
              key={item.id} 
              file={{...item, type: item.type || 'unknown'}} 
              onRemove={handleRemoveFile} 
            />
          </motion.div>
        ))}
      </div>
    </div>

  );
};

  export default UploadedFilesPanel;
