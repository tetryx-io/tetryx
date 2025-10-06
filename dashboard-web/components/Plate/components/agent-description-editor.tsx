"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@udecode/cn";
import { Plate } from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { TooltipProvider } from "@/components/Plate/components/plate-ui/tooltip";

export default function PlateEditor({
  onChange = () => {},
  isEditing = false,
  description = [{ id: "1", type: "p", children: [{ text: '' }] }],
  initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Enter your Agent's Description" }],
    },
  ],
  customKey
}: any) {
  const onChangePromptResults = useCallback(
    (result) => {
      onChange(result);
    },
    [onChange]
  );

  const [editorValue, setEditorValue] = useState(description || initialValue);

  useEffect(() => {
    setEditorValue(description || initialValue);
  }, [description, initialValue]);

  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <Plate
        plugins={plugins}
        key={customKey}
        value={editorValue}
        onChange={onChangePromptResults}
      >
        <div>
          {(isEditing) && (
            <div className="">
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>
            </div>
          )}

          <div
            className={cn(
              "w-full bg-white flex flex-col items-center justify-center overflow-hidden"
            )}
          >
            <Editor
              readOnly={!isEditing}
              value={editorValue}
              className="w-full px-4 py-2 bg-neutral-100 rounded-md text-neutral-700 overflow-y-auto"
              autoFocus
              placeholder="Enter your Agent's Description"
              focusRing={false}
              style={{ minHeight: "80px" }}
              variant="ghost"
              size="md"
            />
          </div>
        </div>
      </Plate>
    </TooltipProvider>
  );
}
