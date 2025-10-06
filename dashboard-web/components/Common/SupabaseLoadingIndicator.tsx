import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import * as Tooltip from '@radix-ui/react-tooltip';

interface SupabaseLoadingIndicatorProps {
  isLoading: boolean;
}

const SupabaseLoadingIndicator: React.FC<SupabaseLoadingIndicatorProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 9999,
          }}
        >
          <ProgressBar
            visible={true}
            height="40"
            width="40"
            barColor="#4fa94d"
            ariaLabel="supabase-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="TooltipContent"
          sideOffset={5}
          side="left"
        >
          Supabase is loading...
          <Tooltip.Arrow className="TooltipArrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default SupabaseLoadingIndicator;