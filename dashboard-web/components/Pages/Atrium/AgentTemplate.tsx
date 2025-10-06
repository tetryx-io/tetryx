import React from 'react';
import { RiCalendarScheduleLine, RiFileCopyLine } from 'react-icons/ri';
import { useRouter } from "next/navigation";

interface AgentTemplateProps {
  title: string;
  desc: string;
  clone_count: any;
  agent_id: any;
}

const AgentTemplate: React.FC<AgentTemplateProps> = ({ title, desc, clone_count, agent_id }) => {
  const router = useRouter();
  const handleDummyQuestionPrompt = (text: string) => {
    const promptDataToShow = [
      {
        type: "p",
        id: "1",
        children: [
          {
            text: text,
          },
        ],
      },
    ];
    if (typeof window !== "undefined") {
      sessionStorage.setItem("promptData", JSON.stringify(promptDataToShow));
    }
    router.push(`/agent/${agent_id}/`);
  };
  return (
        <div className="flex flex-col justify-between p-3 border bg-white hover:bg-neutral-100 rounded-md transition-all cursor-pointer"
             onClick={() => {
               handleDummyQuestionPrompt(
                 "Collect images of eletrical utility assets (posts, transformers) from Google streetview on Custer Street in Plano Texas"
               );
             }}>
            <div>
              <div className="font-medium mb-1.5">{title}</div>
              <div className="text-sm text-neutral-500 mb-5">{desc}</div>
            </div>
            
            <div className="flex justify-between">
                <div className="bg-neutral-50 border p-1.5 rounded-md h-fit text-neutral-600">
                    <RiCalendarScheduleLine size={16} />
                </div>

                <div className="flex h-8 items-center bg-neutral-50 border p-1.5 gap-1.5 rounded-md text-neutral-600 text-sm font-medium hover:cursor-pointer hover:bg-black hover:text-white">
                    <div className="flex gap-1 items-center"><RiFileCopyLine size={16} />Run</div>
                    <div className="h-3 border-l border-neutral-500/40"/>
                    <div>{clone_count}</div>
                </div>
            </div>
        </div>
    )
}

export default AgentTemplate;