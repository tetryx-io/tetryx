import { Plate } from "@udecode/plate-common";
import React from 'react';
import { FiTrash2, FiDownload } from 'react-icons/fi';
import clsx from 'clsx';
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";

interface PublicAgentDescriptionProps {
    agent: {
      description: string;
      install_count: number;
      run_count: number;
      installed: boolean;
      _cr: string;
    };
    containerRef?: React.RefObject<HTMLDivElement>;
  }

const PublicAgentDescription = ({ agent, containerRef }: PublicAgentDescriptionProps) => {
	return (
		

            <div className="w-full mb-4">
                    <Plate
                        readOnly={true}
                        plugins={plugins}
                        value={agent?.description?.['components'] || [{ id: "1", type: "p", children: [{ text: '' }] }]}
                    >
                        
                        <div
                            ref={containerRef}
                            className={"leading-[25.6px] list-decimal text-neutral-600 mb-2 pt-1"}
                        >
                            <Editor
                                className={"leading-[25.6px] list-decimal text-neutral-600 mb-2 pt-1"}
                                readOnly={true}
                                autoFocus
                                placeholder="Type a prompt..."
                                focusRing={false}
                                variant="ghost"
                                size="md"
                            />
                        </div>
                    </Plate>
            </div>

	)
}

export default PublicAgentDescription;