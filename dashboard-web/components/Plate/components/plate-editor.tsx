"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@udecode/cn";
import { Plate } from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { debounce } from "lodash";
import { CommentsPopover } from "@/components/Plate/components/plate-ui/comments-popover";
import { CursorOverlay } from "@/components/Plate/components/plate-ui/cursor-overlay";
import { Editor } from "@/components/Plate/components/plate-ui/editor";
import { MentionCombobox } from "@/components/Plate/components/plate-ui/mention-combobox";
import { plugins } from "@/components/Plate/lib/plate/plate-plugins";
import { promptSuggetion } from "@/lib/services/prompt";
import { CHECK_ARRAY_IS_EMPTY_OR_NOT } from "@/lib/utils";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";

export async function getServerSideProps() {
  const res = await promptSuggetion("");
  const refactorSuggetionData =
    res?.data["ORG-NAME"]?.map((item) => ({
      key: item.id,
      text: item.text,
      logo: item?.logo_url,
    })) || [];

  return {
    props: {
      initialSuggestionData: refactorSuggetionData,
    },
  };
}

export default function PlateEditor({
  files,
  setPromptData = () => {},
  readOnly = false,
  promptData = {},
  onSubmit = () => {},
  initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "" }],
    },
  ],
  customKey,
  isAddingCmnt,
  showToolBar = false,
}: any) {
  interface Suggetion {
    key: string;
    text: string;
    logo_url: string;
  }
  const [suggetionDetails, setSuggetionDetail] = useState([]);
  const [selectedSuggestionDetail, setSelectedSuggestionDetail] = useState<
    Array<Suggetion>
  >([]);
  const containerRef = useRef(null);

  const debounceSuggestionSearch = useMemo(
    () =>
      debounce(async (value) => {
        try {
          const res = await promptSuggetion(value);
          const refactorSuggetionData =
            res?.data["ORG-NAME"]?.map((item) => ({
              key: item.id,
              text: item.text,
              logo_url: item?.logo_url,
            })) || [];
          setSuggetionDetail(refactorSuggetionData);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      }, 200),
    []
  );

  const handleSuggestionSearch = useCallback(
    (value) => {
      debounceSuggestionSearch(value);
    },
    [debounceSuggestionSearch]
  );

  const onChangePromptResults = useCallback(
    (result) => {
      const mentionFilter = result[0]?.children?.filter(
        (item) =>
          item?.type === "mention_input" && item?.children[0]?.text !== ""
      );

      const searchText = mentionFilter?.length
        ? mentionFilter[0]?.children[0]?.text
        : "";
      if (searchText) {
        handleSuggestionSearch(searchText);
      } else if (CHECK_ARRAY_IS_EMPTY_OR_NOT(suggetionDetails)) {
        handleSuggestionSearch("");
      }

      if (setPromptData) {
        const refactorResult = result?.map((item) => ({
          ...item,
          children: item?.children?.map((subItem) => {
            if (subItem?.type === "mention") {
              const suggestion: any = suggetionDetails?.find(
                (suggestion: any) => suggestion.text === subItem?.value
              );
              if (suggestion) {
                setSelectedSuggestionDetail((prevDetails: any) => [
                  ...prevDetails,
                  suggestion,
                ]);
              }
              return {
                ...subItem,
                id: [...selectedSuggestionDetail]?.find(
                  (suggestion) => suggestion.text === subItem.value
                )?.key,
                value: `@${subItem?.value}`,
              };
            }
            return subItem;
          }),
        }));
        setPromptData(
          files?.length ? { ...refactorResult, files } : refactorResult
        );
      }
    },
    [files, setPromptData, suggetionDetails, handleSuggestionSearch]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      promptData = initialValue;
      onSubmit();
    }
  };

  return (
    <Plate
      plugins={plugins}
      key={customKey}
      value={promptData}
      initialValue={initialValue}
      onChange={onChangePromptResults}
    >
      <div className={isAddingCmnt ? `flex flex-col`:"w-full"}>
        {(isAddingCmnt || showToolBar) && (
          <div className="">
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>
          </div>
        )}

        <div
          ref={containerRef}
          className={cn(
            "w-full bg-white flex flex-col items-center justify-center overflow-hidden"
          )}
        >
          <Editor
            readOnly={readOnly}
            value={promptData}
            className="w-full px-4 py-2 bg-neutral-100 rounded-md text-neutral-700 overflow-y-auto"
            autoFocus
            placeholder={
              isAddingCmnt ? "Add a comment" : `How can I help you today?`
            }
            focusRing={false}
            style={{ minHeight: "92px" }}
            variant="ghost"
            size="md"
            onKeyDown={handleKeyDown}
          />

          <MentionCombobox items={suggetionDetails} />

          <CommentsPopover />

          <CursorOverlay containerRef={containerRef} />
        </div>
      </div>
    </Plate>
  );
}
