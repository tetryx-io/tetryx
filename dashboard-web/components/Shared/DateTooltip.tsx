import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { Tooltip } from 'react-tooltip';

interface DateTooltipProps {
  date: Date | string | number;
  id: string;
  children: React.ReactNode;
}

export const DateTooltip: React.FC<DateTooltipProps> = ({ date, id, children }) => {
  const dateObj = new Date(date);
  const utcDate = new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60000);
  const localTimeZone = new Intl.DateTimeFormat('en', { timeZoneName: 'short' })
    .formatToParts(dateObj)
    .find(part => part.type === 'timeZoneName')?.value || 'LOCAL';
  
  const tooltipContent = (
    <div className="flex flex-col gap-3 text-sm py-1">
      <div className="font-medium text-black">
        {formatDistanceToNow(dateObj, { addSuffix: true })}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="bg-neutral-100 px-2 py-0.5 text-xs rounded font-medium text-black">UTC</span>
          <span className="font-mono text-xs text-black">{format(utcDate, 'MMMM d, yyyy')}    {format(utcDate, 'hh:mm:ss aa')}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-neutral-100 px-2 py-0.5 text-xs rounded font-medium text-black">{localTimeZone}</span>
          <span className="font-mono text-xs text-black">{format(dateObj, 'MMMM d, yyyy')}    {format(dateObj, 'hh:mm:ss aa')}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <span data-tooltip-id={id}>
        {children}
      </span>
      <Tooltip
        id={id}
        place="top"
        float={true}
        delayShow={150}
        clickable={true}
        className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
      >
        {tooltipContent}
      </Tooltip>
    </>
  );
}; 