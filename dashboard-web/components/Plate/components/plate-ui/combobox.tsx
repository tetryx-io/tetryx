'use client';

import React, { useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { cn, withRef } from '@udecode/cn';
import {
  comboboxActions,
  ComboboxContentItemProps,
  ComboboxContentProps,
  ComboboxProps,
  useActiveComboboxStore,
  useComboboxContent,
  useComboboxContentState,
  useComboboxControls,
  useComboboxItem,
  useComboboxSelectors,
} from '@udecode/plate-combobox';
import {
  useEditorRef,
  useEditorSelector,
  useEventEditorSelectors,
  usePlateSelectors,
} from '@udecode/plate-common';
import { createVirtualRef } from '@udecode/plate-floating';

export const ComboboxItem = withRef<'div', ComboboxContentItemProps | any>(
  ({ combobox, index, item, onRenderItem, className, ...rest }, ref) => {
    const { props } = useComboboxItem({ item, index, combobox, onRenderItem });

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex gap-[8px] cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors text-neutral-600 font-medium' ,
          'hover:bg-accent hover:text-accent-foreground data-[highlighted=true]:bg-accent data-[highlighted=true]:text-accent-foreground',
          className
        )}
        {...props}
        {...rest}
      >
        {item?.logo_url && item?.logo_url !== "None" ?
        <img width={32} height={32} className="rounded" src={ item?.logo_url} alt="Logo" /> : <span className='w-[32px] min-w-[32px] h-[32px] bg-slate-200 rounded'></span>} <span className='leading-[18px] font-[15px] inline-block'>{item.text}</span>
      </div>
    );
  }
);

export function ComboboxContent(props: ComboboxContentProps) {
  const {
    component: Component,
    items,
    portalElement,
    combobox,
    onRenderItem,
  } = props;

  const editor = useEditorRef();

  const filteredItems = useComboboxSelectors.filteredItems();
  const activeComboboxStore = useActiveComboboxStore()!;

  const state = useComboboxContentState({ items, combobox });
  const { menuProps, targetRange }: any = useComboboxContent(state);
  return (
    <Popover.Root open>
      <Popover.PopoverAnchor
        virtualRef={createVirtualRef(editor, targetRange ?? undefined)}
      />

      <Popover.Portal container={portalElement}>
        <Popover.Content
          {...menuProps}
          sideOffset={5}
          side="bottom"
          align="start"
          className={cn(
            'z-50 m-0 max-h-[288px] w-[300px] overflow-hidden rounded-md bg-slate-50 p-0 border border-neutral-200 shadow-[0_-2px_24px_0px_rgba(0,0,0,0.08)]'
          )}
          onOpenAutoFocus={(event) => event.preventDefault()}
          onChange={(e) => { console.log("e", e) }}
        >
          {Component ? Component({ store: activeComboboxStore }) : null}

          {items?.map((item: {key: string, text: string, logo_url: string}, index) => {
            return (
              <ComboboxItem
                key={item.key}
                item={item}
                combobox={combobox}
                index={index}
                onRenderItem={onRenderItem}

              />
            )
          })}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Combobox({
  id,
  trigger,
  // searchPattern,
  onSelectItem,
  controlled,
  maxSuggestions,
  filter,
  sort,
  disabled: _disabled,
  ...props
}: ComboboxProps) {
  const storeItems = useComboboxSelectors.items();
  const disabled =
    _disabled ?? (storeItems.length === 0 && !props.items?.length);

  const focusedEditorId = useEventEditorSelectors.focus?.();
  const combobox = useComboboxControls();
  const activeId = useComboboxSelectors.activeId();
  const selectionDefined = useEditorSelector(
    (editor) => !!editor.selection,
    []
  );
  const editorId = usePlateSelectors().id();

  useEffect(() => {
    comboboxActions.setComboboxById({
      id,
      trigger,
      // searchPattern,
      controlled,
      onSelectItem,
      maxSuggestions,
      filter,
      sort,
    });
  }, [
    id,
    trigger,
    // searchPattern,
    controlled,
    onSelectItem,
    maxSuggestions,
    filter,
    sort,
  ]);

  if (
    !combobox ||
    !selectionDefined ||
    focusedEditorId !== editorId ||
    activeId !== id ||
    disabled
  ) {
    return null;
  }

  return <ComboboxContent combobox={combobox} {...props} />;
}
