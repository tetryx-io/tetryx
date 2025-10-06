import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import slugify from "slugify";
import { FaBug } from 'react-icons/fa';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { RiGlobalLine, RiLockLine, RiTeamLine } from 'react-icons/ri';
import { __agent_url } from '@/lib/utils';

// Define the props interface
interface ThreadHeaderProps {
  title: string;
  agent: {
    id: string;
    name: string;
    avatar_url?: string;
  };
  thread: {
    data: {
      thread: {
        agent_debug_mode: boolean
      }
    }
    loading: boolean
    error: any
  }
  visibility: 'PUBLIC' | 'WORKSPACE' | 'USER';
  onVisibilityChange: (value: 'PUBLIC' | 'WORKSPACE' | 'USER') => void;
}

// Breadcrumbs component
const Breadcrumbs: React.FC<{ agentName: string; title: string; agentId: string; avatarUrl?: string }> = ({ agentName, title, agentId, avatarUrl }) => {
  const slugifiedAgentName = slugify(agentName, { replacement: "-", lower: true });
  const agentLink = __agent_url({ name: agentName, id: agentId });


  return (
    <nav className="flex items-center text-neutral-500">
      <div className="w-8 h-8 flex items-center justify-center mr-2 text">
        <img
          src={avatarUrl || '/default-avatar.png'}
          alt="Agent Avatar"
          className="w-8 h-8 rounded-md object-cover"
        />
      </div>
      <Link className="text-black font-semibold hover:underline w-fit max-w-52 md:max-w-72 truncate" href={agentLink}>
        {agentName}
      </Link>
      <div className="hidden md:flex text-nowrap">
        <span className="mx-2 text-neutral-400">/</span>
        <span className="text-neutral-600 max-w-xs truncate">{title}</span>
      </div>
    </nav>
  );
};

// Updated VisibilitySelect component
const VisibilitySelect: React.FC<{
  value: 'PUBLIC' | 'WORKSPACE' | 'USER';
  onChange: (value: 'PUBLIC' | 'WORKSPACE' | 'USER') => void;
}> = ({ value, onChange }) => {
  const options = [
    { value: 'PUBLIC', label: 'Public', icon: <RiGlobalLine size={20} /> },
    { value: 'WORKSPACE', label: 'Workspace', icon: <RiTeamLine size={20} /> },
    { value: 'USER', label: 'Only You', icon: <RiLockLine size={20} /> },
  ];

  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center px-2.5 h-8 rounded-md font-medium bg-neutral-100 text-neutral-700 focus:outline-none focus:ring-0 hover:bg-atrium-offWhite">
        <div className="hidden lg:flex">{options.find(option => option.value === value)?.icon}</div>
        <span className="ml-2">{options.find(option => option.value === value)?.label}</span>
        <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 right-0 mt-2 w-[200px] rounded-md bg-white border text-neutral-600 shadow-lg">
        <div className="py-1">
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full px-4 py-2 text-left text-[15px] hover:bg-neutral-100"
              onClick={() => {
                onChange(option?.value as 'PUBLIC' | 'WORKSPACE' | 'USER');
              }}
            >
              <div className="flex items-center">
                {option.icon}
                <span className="ml-2">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

// Updated DebugIcon component
const DebugIcon: React.FC<{ isDevMode: boolean }> = ({ isDevMode }) => {
  if (!isDevMode) return null;

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="focus:outline-none">
            <span className="mr-2 text-yellow-500 border border-yellow-500 rounded-md p-1" title="Dev Mode Active">
              <FaBug className="h-5 w-5 inline" />
            </span>
          </Popover.Button>
          <Popover.Panel
            className={`absolute right-0 -translate-y-2 mt-4 z-10 bg-white border border-neutral-200 rounded-md shadow-lg p-2 w-72 transform text-sm ${open ? '' : 'hidden'}`}
          >
            <span>This thread was started in dev mode. Additional debugging information may be available.</span>
            <a
              href="https://docs.atrium.st/dev-mode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-700 hover:text-amber-800 font-medium flex items-center gap-1"
            >
              Learn more about dev mode
              <ArrowRightIcon
              />
            </a>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

const ThreadHeader: React.FC<ThreadHeaderProps> = ({
  title,
  agent,
  visibility,
  onVisibilityChange,
  thread
}) => {

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className='w-1/2'>
          {agent && agent.name && agent.id && agent.avatar_url ? (
            <Breadcrumbs agentName={agent.name} agentId={agent.id} title={title} avatarUrl={agent.avatar_url} />
          ) : (
            <span>...</span>
          )}
        </div>

        {/* Debug Icon and Visibility Select on the right */}
        <div className="flex items-center">
          <DebugIcon isDevMode={thread?.data?.thread?.agent_debug_mode || false} />
          <VisibilitySelect value={visibility} onChange={onVisibilityChange} />
        </div>
      </div>
    </>
  );
};

export default ThreadHeader;