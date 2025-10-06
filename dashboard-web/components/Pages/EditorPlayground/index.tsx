import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import { CollapsedFieldProps } from 'react-json-view'
import pg_value from "./pg.json"
import {motion} from "framer-motion"
import { BiRefresh, BiEraser,BiLinkExternal } from "react-icons/bi";

// Dynamically import components that might use 'document'
const PlaygroundEditor = dynamic(() => import("@/components/Plate/components/playground-editor"), { ssr: false });
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

const Agent = () => {
  const default_value = [{ id: "1", type: "p", children: [{ text: '' }] }]
  const [description, setDescription] = useState<any>(pg_value);
  const [isEditing, setIsEditing] = useState(true);
  const editorKey = useRef(`agent-description-${Date.now()}`); // Add this line

  const shouldCollapse = (key: string) => {
    return false;
  };

  const handleReset = () => {
    setDescription(pg_value);
  };

  const handleClear = () => {
    setDescription(default_value)
  };

  useEffect(() => {
    console.log(description);
  }, [description]);

  return (
    <div className="max-w-[1920px] px-6 lg:px-10 mx-auto mt-8">
    <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-y-6 md:justify-between md:items-center mb-8"
      >
        <div>
          <h1 className="text-2xl font-bold">Playground</h1>
        </div>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClear}
            className="flex items-center px-2 py-1 bg-red-500 text-white rounded-md shadow-md"
          >
            <BiEraser className="mr-2" />
            Clear Input
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md shadow-md"
          >
            <BiRefresh className="mr-2" />
            Reset Input
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="flex items-center px-2 py-1 bg-orange-500 text-white rounded-md shadow-md"
          >
            <BiLinkExternal className="mr-2" />
            <a href="https://platejs.org/" target="_blank" rel="noopener noreferrer">PlateJS Reference</a>
          </motion.button>
        </div>
      </motion.div>
      <div className="space-y-6">
        <div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              {typeof window !== 'undefined' && (
                <PlaygroundEditor
                  showToolBar={true}
                  description={description}
                  isCreating={false}
                  isEditing={isEditing}
                  setPromptData={(newValue) => {
                    setDescription(newValue);
                  }}
                  onSubmit={() => {console.log("submit")}}
                  customKey={editorKey.current} // Change this line
                />
              )}
            </div>
            <div className="w-1/2">
              {typeof window !== 'undefined' && (
                <ReactJson
                  onDelete={false}
                  onAdd={false}
                  displayDataTypes={false}
                  onEdit={false}
                  theme="shapeshifter:inverted"
                  shouldCollapse={(field: CollapsedFieldProps) => shouldCollapse(field?.name ?? '')}
                  iconStyle="circle"
                  src={description ?? ''}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
