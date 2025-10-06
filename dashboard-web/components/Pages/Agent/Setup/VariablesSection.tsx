"use client";

import React, { useState, useCallback } from 'react';
import { 
  EyeOpenIcon, 
  EyeClosedIcon, 
  EyeNoneIcon,
  CaretDownIcon, 
  MagnifyingGlassIcon,
  CaretSortIcon,
  TrashIcon,
  CopyIcon,
  PlusIcon
} from "@radix-ui/react-icons";
import { ImSpinner8 } from "react-icons/im";
import { RiCodeLine } from "react-icons/ri";
import { formatDistanceToNow, format } from "date-fns";
import { Menu, Transition, Dialog, Switch } from "@headlessui/react";
import { Fragment } from "react";
import { useNotificationContext } from "@/components/Shared/Notification";
import { Tooltip } from 'react-tooltip';
import { ApolloError } from '@apollo/client';
import { AgentInstallationVariablesSubscription } from "@/generated/graphql";
import { DateTooltip } from "@/components/Shared/DateTooltip";
import { updateVariable, deleteVariable, createVariable } from "@/lib/services/variable";
import { useParams } from "next/navigation";
import JsonEditor from "@/components/Shared/Input/JsonEditor";

type InstallationVariable = NonNullable<
  NonNullable<AgentInstallationVariablesSubscription['agent_installation']>[number]['installation_variables']
>[number];

interface EditingVariable {
  key: string;
  value_string: string | null;
  value_url: string | null;
  value_json: any | null;
  comment: string | null;
}

interface NewVariable {
  key: string;
  value_string: string | null;
  value_url: string | null;
  value_json: any | null;
  comment: string | null;
  is_secret: boolean;
  value_type: 'string' | 'url' | 'json';
}

interface VariablesSectionProps {
  agent_installation_id: string;
  variables: InstallationVariable[];
  isLoading: boolean;
  error?: ApolloError;
}

const sortOptions = [
  { key: 'creation_date', label: 'Creation date' },
  { key: 'name', label: 'Name' },
  { key: 'last_updated', label: 'Last updated' },
  { key: 'editor', label: 'Editor' },
];

const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

const validateUrl = (url: string): boolean => {
  return URL_REGEX.test(url);
};

const MAX_KEY_LENGTH = 256;

const isKeyValid = (key: string | null | undefined): boolean => {
  return !!key && key.trim().length > 0 && key.length <= MAX_KEY_LENGTH;
};

const MAX_COMMENT_LENGTH = 2048;

const isCommentValid = (comment: string | null | undefined): boolean => {
  return !comment || comment.length <= MAX_COMMENT_LENGTH;
};

const MAX_VALUE_LENGTH = 512;

const isValueValid = (value: string | object | null | undefined): boolean => {
  if (!value) return false;
  if (typeof value === 'object') {
    return Object.keys(value).length > 0 && JSON.stringify(value).length <= MAX_VALUE_LENGTH;
  }
  return value.trim().length > 0 && value.length <= MAX_VALUE_LENGTH;
};

const validateJsonValue = (value: any) => {
  if (!value) return { isValid: false };
  if (typeof value === 'object') {
    return {
      isValid: Object.keys(value).length > 0 && JSON.stringify(value).length <= MAX_VALUE_LENGTH,
      message: JSON.stringify(value).length > MAX_VALUE_LENGTH ? 
        `Value must not exceed ${MAX_VALUE_LENGTH} characters (${JSON.stringify(value).length}/${MAX_VALUE_LENGTH})` : undefined
    };
  }
  return {
    isValid: value.trim().length > 0 && value.length <= MAX_VALUE_LENGTH,
    message: value.length > MAX_VALUE_LENGTH ? 
      `Value must not exceed ${MAX_VALUE_LENGTH} characters (${value.length}/${MAX_VALUE_LENGTH})` : undefined
  };
};

const VariablesSection: React.FC<VariablesSectionProps> = ({ 
  agent_installation_id,
  variables,
  isLoading,
  error
}) => {
  const [showValues, setShowValues] = useState<{[key: string]: boolean}>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllValues, setShowAllValues] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [editingVariable, setEditingVariable] = useState<EditingVariable | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [variableToDelete, setVariableToDelete] = useState<InstallationVariable | null>(null);
  const notifier: any = useNotificationContext();
  const { agent_name } = useParams();
  const agent_id = (Array.isArray(agent_name) ? agent_name[0] : agent_name)?.slice(-16) || '';
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNewVariableDialogOpen, setIsNewVariableDialogOpen] = useState(false);
  const [newVariable, setNewVariable] = useState<NewVariable>({
    key: '',
    value_string: '',
    value_url: null,
    value_json: null,
    comment: '',
    is_secret: false,
    value_type: 'string'
  });
  const [isCreating, setIsCreating] = useState(false);

  // Effect to handle show all values
  React.useEffect(() => {
    if (showAllValues) {
      const newShowValues = variables.reduce((acc, variable) => ({
        ...acc,
        [variable.key]: !variable.is_secret
      }), {});
      setShowValues(newShowValues);
    } else {
      const newShowValues = variables.reduce((acc, variable) => ({
        ...acc,
        [variable.key]: false
      }), {});
      setShowValues(newShowValues);
    }
  }, [showAllValues, variables]);

  const handleSave = useCallback(async () => {
    if (!editingVariable || !variableToDelete?.id || !agent_id || isSaving || !hasChanges) return;

    // Add key length validation
    if (!isKeyValid(editingVariable.key)) {
      return;
    }

    // Add comment length validation
    if (!isCommentValid(editingVariable.comment)) {
      return;
    }

    // Add value length validation based on type
    if (variableToDelete.value_type === 'json' && !isValueValid(editingVariable.value_json)) {
      return;
    } else if (variableToDelete.value_type === 'url' && !isValueValid(editingVariable.value_url)) {
      return;
    } else if (variableToDelete.value_type === 'string' && !isValueValid(editingVariable.value_string)) {
      return;
    }

    // Keep existing URL validation
    if (variableToDelete.value_type === 'url' && editingVariable.value_url) {
      if (!validateUrl(editingVariable.value_url)) {
        notifier.error({
          title: "Invalid URL format",
          description: "Please enter a valid URL (e.g., https://example.com)"
        });
        return;
      }
    }

    setIsSaving(true);
    try {
      let value: string | object;
      
      if (variableToDelete.value_type === 'json') {
        value = JSON.stringify(editingVariable.value_json || {});
      } else {
        value = editingVariable.value_string ?? editingVariable.value_url ?? '';
      }
      
      const result = await updateVariable({
        agent_id,
        installation_id: agent_installation_id,
        variable_id: variableToDelete.id,
        key: editingVariable.key,
        value,
        comment: editingVariable.comment ?? undefined,
        is_secret: variableToDelete.is_secret
      });

      if (result?.status) {
        notifier.success({
          title: result.message,
        });
        
        setExpandedRow(null);
        setEditingVariable(null);
        setHasChanges(false);
      } else {
        notifier.error({
          title: result?.message ?? "Unknown error occurred",
        });
      }
    } finally {
      setIsSaving(false);
    }
  }, [editingVariable, variableToDelete?.id, agent_id, agent_installation_id, notifier, isSaving, hasChanges]);

  if (isLoading) {
    return <div>Loading variables...</div>;
  }

  if (error) {
    return <div>Error loading variables: {error.message}</div>;
  }

  const getValue = (variable: InstallationVariable): string => {
    switch (variable.value_type) {
      case 'url':
        return variable.value_url || '';
      case 'json':
        return variable.value_json ? JSON.stringify(variable.value_json) : '';
      case 'string':
      default:
        return variable.value_string || '';
    }
  };

  const handleExpandRow = (key: string) => {
    if (expandedRow === key) {
      setExpandedRow(null);
      setEditingVariable(null);
      setVariableToDelete(null);
    } else {
      const variable = variables.find(v => v.key === key);
      if (variable) {
        setExpandedRow(key);
        setVariableToDelete(variable);
        const editingVar: EditingVariable = {
          key: variable.key,
          value_string: variable.value_string ?? null,
          value_url: variable.value_url ?? null,
          value_json: variable.value_json ?? null,
          comment: variable.comment ?? null
        };
        setEditingVariable(editingVar);
      }
    }
  };

  const toggleValueVisibility = (variableKey: string) => {
    const variable = variables.find(v => v.key === variableKey);
    if (variable?.is_secret) return; // Don't toggle if secret

    setShowValues(prev => ({
      ...prev,
      [variableKey]: !prev[variableKey]
    }));
  };

  const handleChange = (field: keyof EditingVariable, value: any) => {
    if (!editingVariable || !variableToDelete) return;
    
    let newValue = value;
    
    // Special handling for JSON values
    if (field === 'value_json' && typeof value === 'object') {
      try {
        // Keep the value as an object for the UI, but stringify it for comparison
        const stringifiedNew = JSON.stringify(value);
        const stringifiedCurrent = variableToDelete.value_json 
          ? JSON.stringify(typeof variableToDelete.value_json === 'string' 
            ? JSON.parse(variableToDelete.value_json) 
            : variableToDelete.value_json)
          : null;
        
        const hasChanged = stringifiedNew !== stringifiedCurrent;
        setEditingVariable({
          ...editingVariable,
          [field]: value
        });
        setHasChanges(hasChanged);
        return;
      } catch (error) {
        console.error('JSON parsing error:', error);
        return;
      }
    }

    // For non-JSON values
    newValue = value || null;
    const currentValue = variableToDelete[field === 'comment' ? 'comment' : 
      field === 'key' ? 'key' : 
      field === 'value_string' ? 'value_string' : 
      field === 'value_url' ? 'value_url' : 
      'value_json'] ?? null;

    const hasChanged = newValue !== currentValue;
    
    setEditingVariable({
      ...editingVariable,
      [field]: newValue
    });
    
    // Check if any field has changed
    const updatedVariable = {
      ...editingVariable,
      [field]: newValue
    };
    
    const hasAnyChange = 
      updatedVariable.key !== variableToDelete.key ||
      updatedVariable.value_string !== variableToDelete.value_string ||
      updatedVariable.value_url !== variableToDelete.value_url ||
      updatedVariable.value_json !== variableToDelete.value_json ||
      updatedVariable.comment !== variableToDelete.comment;
    
    setHasChanges(hasAnyChange);
  };

  const handleCancel = () => {
    setExpandedRow(null);
    setEditingVariable(null);
  };

  const copyVariableKey = async (key: string) => {
    await navigator.clipboard.writeText(key);
    notifier.success({
      title: "Variable key copied!",
    });
  };

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    notifier.success({
      title: "Value copied to clipboard!",
    });
  };

  const formatValue = (value: string, type: string): string => {
    if (type === 'json') {
      try {
        const parsed = JSON.parse(value);
        return JSON.stringify(parsed, null, 2);
      } catch {
        return value;
      }
    }
    return value;
  };

  const renderValue = (variable: InstallationVariable) => {
    if (variable.is_secret) {
      return (
        <div className="flex items-center gap-2 w-full sm:w-1/3 min-w-[300px]">
          <div className="flex items-center gap-2 w-[40px]">
            <button 
              className="p-2 rounded-md flex-shrink-0 cursor-not-allowed opacity-50"
              data-tooltip-id={`secret-${variable.key}`}
            >
              <EyeNoneIcon className="w-4 h-4" />
            </button>
            <Tooltip
              id={`secret-${variable.key}`}
              place="top"
              float={true}
              delayShow={150}
              className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
            >
              <div className="text-sm text-neutral-600">
                Secret value is never revealed after creation
              </div>
            </Tooltip>
          </div>
          <div className="font-mono bg-neutral-100 px-3 py-1.5 rounded-md flex-grow truncate">
            ••••••••••••••
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 w-full sm:w-1/3 min-w-[300px]">
        <div className="flex items-center gap-2 w-[40px]">
          {showValues[variable.key] ? (
            <button 
              onClick={() => copyValue(getValue(variable))}
              className="p-2 hover:bg-neutral-100 rounded-md flex-shrink-0"
              data-tooltip-id={`value-action-${variable.key}`}
            >
              <CopyIcon className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={() => toggleValueVisibility(variable.key)}
              className="p-2 hover:bg-neutral-100 rounded-md flex-shrink-0"
              data-tooltip-id={`value-action-${variable.key}`}
            >
              <EyeClosedIcon className="w-4 h-4" />
            </button>
          )}
          <Tooltip
            id={`value-action-${variable.key}`}
            place="top"
            float={true}
            delayShow={150}
            className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
          >
            <div className="text-sm text-neutral-600">
              {showValues[variable.key] ? "Click to copy value" : "Click to reveal"}
            </div>
          </Tooltip>
        </div>
        
        {variable.value_type === 'json' ? (
          <div className="w-full overflow-x-auto">
            <div className={showValues[variable.key] ? 'block' : 'hidden'}>
              <JsonEditor 
                value={variable.value_json} 
                onChange={(newValue) => handleChange('value_json', newValue)}
                readOnly={true}
                maxLength={MAX_VALUE_LENGTH}
                validate={validateJsonValue}
              />
            </div>
            <div 
              className={`font-mono bg-neutral-100 px-3 py-1.5 rounded-md flex-grow truncate cursor-pointer hover:bg-neutral-200 ${showValues[variable.key] ? 'hidden' : 'block'}`}
              onClick={() => copyValue(getValue(variable))}
              data-tooltip-id={`value-${variable.key}`}
            >
              ••••••••••••••
            </div>
          </div>
        ) : variable.value_type === 'url' ? (
          <a 
            href={showValues[variable.key] && variable.value_url ? variable.value_url : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono bg-neutral-100 px-3 py-1.5 rounded-md flex-grow truncate hover:text-blue-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (showValues[variable.key] && variable.value_url) {
                window.open(variable.value_url, '_blank');
              } else {
                copyValue(getValue(variable));
              }
            }}
            data-tooltip-id={`url-${variable.key}`}
          >
            {showValues[variable.key] ? getValue(variable) : '•••••••••••••••'}
          </a>
        ) : (
          <div 
            className={`font-mono bg-neutral-100 px-3 py-1.5 rounded-md flex-grow ${
              variable.value_type === 'json' ? 'whitespace-pre overflow-x-auto' : 'truncate'
            } cursor-pointer hover:bg-neutral-200`}
            onClick={() => copyValue(getValue(variable))}
            data-tooltip-id={`value-${variable.key}`}
          >
            {showValues[variable.key] 
              ? formatValue(getValue(variable), variable.value_type)
              : '••••••••••••••'
            }
          </div>
        )}
        <Tooltip
          id={`url-${variable.key}`}
          place="top"
          float={true}
          delayShow={150}
          className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
        >
          <div className="text-sm text-neutral-600">
            {showValues[variable.key] ? "Click to open URL" : "Click to copy value"}
          </div>
        </Tooltip>
        <Tooltip
          id={`value-${variable.key}`}
          place="top"
          float={true}
          delayShow={150}
          className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
        >
          <div className="text-sm text-neutral-600">
            Click to copy value
          </div>
        </Tooltip>
      </div>
    );
  };

  const handleDelete = (variable: InstallationVariable) => {
    setVariableToDelete(variable);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!variableToDelete?.id || !agent_id || isDeleting) return;

    setIsDeleting(true);
    try {
      const result = await deleteVariable({
        agent_id,
        installation_id: agent_installation_id,
        variable_id: variableToDelete.id,
      });

      if (result?.status) {
        notifier.success({
          title: result.message,
        });
        setIsDeleteDialogOpen(false);
        setVariableToDelete(null);
        setExpandedRow(null);
      } else {
        notifier.error({
          title: result?.message ?? "Unknown error occurred",
        });
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleNewVariableChange = (field: keyof NewVariable, value: any) => {
    if (field === 'value_type') {
      // Reset all value fields when type changes
      setNewVariable(prev => ({
        ...prev,
        value_string: null,
        value_url: null,
        value_json: null,
        [field]: value
      }));
    } else {
      setNewVariable(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleCreateVariable = async () => {
    if (!agent_id || isCreating) return;

    // Add key length validation
    if (!isKeyValid(newVariable.key)) {
      return;
    }

    // Add comment length validation
    if (!isCommentValid(newVariable.comment)) {
      return;
    }

    // Add value length validation based on type
    if (newVariable.value_type === 'json' && !isValueValid(newVariable.value_json)) {
      return;
    } else if (newVariable.value_type === 'url' && !isValueValid(newVariable.value_url)) {
      return;
    } else if (newVariable.value_type === 'string' && !isValueValid(newVariable.value_string)) {
      return;
    }

    // Keep existing URL validation
    if (newVariable.value_type === 'url' && newVariable.value_url) {
      if (!validateUrl(newVariable.value_url)) {
        notifier.error({
          title: "Invalid URL format",
          description: "Please enter a valid URL (e.g., https://example.com)"
        });
        return;
      }
    }

    setIsCreating(true);
    try {
      let value: string | object;
      switch (newVariable.value_type) {
        case 'json':
          // For JSON type, ensure we're sending a stringified version of the object
          value = JSON.stringify(newVariable.value_json || {});
          break;
        case 'url':
          value = newVariable.value_url || '';
          break;
        default:
          value = newVariable.value_string || '';
      }

      const result = await createVariable({
        agent_id,
        installation_id: agent_installation_id,
        key: newVariable.key,
        value,
        value_type: newVariable.value_type,
        comment: newVariable.comment || undefined,
        is_secret: newVariable.is_secret
      });

      if (result?.status) {
        notifier.success({
          title: result.message,
        });
        setIsNewVariableDialogOpen(false);
        // Reset form
        setNewVariable({
          key: '',
          value_string: '',
          value_url: null,
          value_json: null,
          comment: '',
          is_secret: false,
          value_type: 'string'
        });
      } else {
        notifier.error({
          title: result?.message ?? "Unknown error occurred",
        });
      }
    } catch (error) {
      notifier.error({
        title: error instanceof Error ? error.message : "Unknown error occurred",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const getSortedVariables = (variables: InstallationVariable[]) => {
    const sorted = [...variables];
    switch (selectedSort.key) {
      case 'name':
        return sorted.sort((a, b) => a.key.localeCompare(b.key));
      case 'creation_date':
        return sorted.sort((a, b) => {
          if (!a._cr || !b._cr) return 0;
          return new Date(b._cr).getTime() - new Date(a._cr).getTime();
        });
      case 'last_updated':
        return sorted.sort((a, b) => {
          if (!a._up || !b._up) return 0;
          return new Date(b._up).getTime() - new Date(a._up).getTime();
        });
      case 'editor':
        return sorted.sort((a, b) => {
          const nameA = a.editor?.name?.toLowerCase() || '';
          const nameB = b.editor?.name?.toLowerCase() || '';
          return nameA.localeCompare(nameB);
        });
      default:
        return sorted;
    }
  };

  const filteredVariables = getSortedVariables(
    variables.filter((variable) =>
      variable.key.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const isEditFormValid = () => {
    const variable = editingVariable;
    if (!variable) return false;
    
    return isKeyValid(variable.key) && 
           isCommentValid(variable.comment) && 
           isValueValid(variable[`value_${variableToDelete?.value_type}`]);
  };

  const isCreateFormValid = () => {
    return isKeyValid(newVariable.key) && 
           isCommentValid(newVariable.comment) && 
           isValueValid(newVariable[`value_${newVariable.value_type}`]);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold">Variables</h2>
        <button
          onClick={() => setIsNewVariableDialogOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-neutral-800 whitespace-nowrap"
        >
          <PlusIcon className="h-4 w-4" />
          <span>Add Variable</span>
        </button>
      </div>
      <p className="text-neutral-600 mb-8 text-lg">
        Configure variables for your agent.
      </p>

      <div className="flex flex-col gap-4">
        {/* Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-4 w-4 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search variables..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Sort Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-neutral-50 whitespace-nowrap">
                <CaretSortIcon className="h-4 w-4" />
                <span>Sort by: {selectedSort.label}</span>
                <CaretDownIcon className="h-4 w-4 text-neutral-400" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.key}>
                        {({ active }) => (
                          <button
                            onClick={() => setSelectedSort(option)}
                            className={`${
                              active ? 'bg-neutral-50' : ''
                            } ${
                              selectedSort.key === option.key ? 'text-blue-600' : 'text-neutral-700'
                            } flex w-full items-center px-4 py-2 text-sm`}
                          >
                            {option.label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Spacer */}
            <div className="flex-grow sm:flex-grow-0"></div>

            {/* Show/Hide Values Toggle */}
            <button 
              onClick={() => setShowAllValues(!showAllValues)}
              className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-neutral-50 whitespace-nowrap"
            >
              {showAllValues ? (
                <>
                  <EyeClosedIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Hide all values</span>
                  <span className="sm:hidden">Hide all</span>
                </>
              ) : (
                <>
                  <EyeOpenIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Show all values</span>
                  <span className="sm:hidden">Show all</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Variables Table */}
        <div className="flex flex-col gap-2">
          {filteredVariables.length === 0 ? (
            <div className="text-center py-8 text-neutral-600">
              No variables found matching your search.
            </div>
          ) : (
            filteredVariables.map((variable: InstallationVariable) => (
              <div key={variable.key} className="border rounded-md">
                {/* Main Row Content */}
                <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 gap-4 sm:gap-2 hover:bg-neutral-50 ${
                  expandedRow === variable.key ? 'border-b' : ''
                }`}>
                  <div className="flex items-center gap-3 w-full sm:w-1/3">
                    <RiCodeLine className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <div 
                        className="font-medium truncate cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => copyVariableKey(variable.key)}
                        data-tooltip-id={`key-${variable.key}`}
                      >
                        {variable.key}
                      </div>
                      <Tooltip
                        id={`key-${variable.key}`}
                        place="top"
                        float={true}
                        delayShow={150}
                        className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
                      >
                        <div className="text-sm text-neutral-600">
                          Click to copy
                        </div>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Section 2: Value */}
                  {renderValue(variable)}

                  {/* Section 3: Updated at */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-1/3">
                    <div className="text-sm text-neutral-500 truncate">
                      <DateTooltip date={variable._up} id={`updated-${variable.key}`}>
                        {variable._up ? 
                          `Updated ${formatDistanceToNow(new Date(variable._up))} ago` : 
                          'Never updated'}
                      </DateTooltip>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img 
                        src={variable.editor?.picture || "/images/avatar.svg"} 
                        alt="Editor Avatar" 
                        className="w-6 h-6 rounded-full cursor-help"
                        data-tooltip-id={`editor-${variable.key}`}
                      />
                      <Tooltip
                        id={`editor-${variable.key}`}
                        place="top"
                        float={true}
                        delayShow={150}
                        className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
                      >
                        <div className="flex flex-col gap-1 text-sm">
                          <div className="font-medium text-black">
                            {variable.editor?.name || "Unknown User"}
                          </div>
                          <div className="text-neutral-500">
                            {variable.editor?.email || "No email"}
                          </div>
                        </div>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Add a more prominent caret button */}
                  <button 
                    className={`flex items-center justify-center w-8 h-8 hover:bg-neutral-100 rounded-md transition-transform ${
                      expandedRow === variable.key ? 'rotate-180 bg-neutral-100' : ''
                    }`}
                    onClick={() => handleExpandRow(variable.key)}
                  >
                    <CaretDownIcon className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>

                {/* Expandable Details Panel */}
                {expandedRow === variable.key && (
                  <div className="px-4 py-4 bg-neutral-50">
                    <div className="flex flex-col gap-4">
                      {/* Name Field */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-neutral-700">Name</label>
                        <input
                          type="text"
                          value={editingVariable?.key || ''}
                          onChange={(e) => handleChange('key', e.target.value)}
                          className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${editingVariable?.key && !isKeyValid(editingVariable.key) ? 'border-red-500' : ''}`}
                        />
                        {editingVariable?.key && !isKeyValid(editingVariable.key) && (
                          <p className="text-sm text-red-500 mt-1">
                            Name must not exceed {MAX_KEY_LENGTH} characters ({editingVariable.key.length}/{MAX_KEY_LENGTH})
                          </p>
                        )}
                      </div>

                      {/* Value Field */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-neutral-700">Value</label>
                        {variable.is_secret ? (
                          <div className="text-sm text-neutral-500 italic">
                            Secret value cannot be viewed or edited after creation
                          </div>
                        ) : variable.value_type === 'json' ? (
                          <div className="w-full">
                            <JsonEditor 
                              value={editingVariable?.value_json} 
                              onChange={(newValue) => handleChange('value_json', newValue)}
                              maxLength={MAX_VALUE_LENGTH}
                              validate={validateJsonValue}
                            />
                          </div>
                        ) : variable.value_type === 'url' ? (
                          <div className="flex flex-col gap-1">
                            <input
                              type="url"
                              value={editingVariable?.value_url || ''}
                              onChange={(e) => handleChange('value_url', e.target.value)}
                              className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono
                                ${editingVariable?.value_url && (!validateUrl(editingVariable.value_url) || !isValueValid(editingVariable.value_url)) ? 'border-red-500' : ''}`}
                              placeholder="https://"
                            />
                            {editingVariable?.value_url && !isValueValid(editingVariable.value_url) && (
                              <p className="text-sm text-red-500 mt-1">
                                Value must not exceed {MAX_VALUE_LENGTH} characters ({editingVariable.value_url.length}/{MAX_VALUE_LENGTH})
                              </p>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1">
                            <input
                              type="text"
                              value={editingVariable?.value_string || ''}
                              onChange={(e) => handleChange('value_string', e.target.value)}
                              className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono
                                ${editingVariable?.value_string && !isValueValid(editingVariable.value_string) ? 'border-red-500' : ''}`}
                            />
                            {editingVariable?.value_string && !isValueValid(editingVariable.value_string) && (
                              <p className="text-sm text-red-500 mt-1">
                                Value must not exceed {MAX_VALUE_LENGTH} characters ({editingVariable.value_string.length}/{MAX_VALUE_LENGTH})
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Comment Field */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-neutral-700">Comment</label>
                        <textarea
                          value={editingVariable?.comment || ''}
                          onChange={(e) => handleChange('comment', e.target.value)}
                          placeholder="Add a comment explaining what this environment variable is for"
                          rows={2}
                          className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${editingVariable?.comment && !isCommentValid(editingVariable.comment) ? 'border-red-500' : ''}`}
                        />
                        {editingVariable?.comment && !isCommentValid(editingVariable.comment) && (
                          <p className="text-sm text-red-500 mt-1">
                            Comment must not exceed {MAX_COMMENT_LENGTH} characters ({editingVariable.comment.length}/{MAX_COMMENT_LENGTH})
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between mt-2">
                        <button
                          onClick={() => handleDelete(variable)}
                          className="flex items-center gap-2 px-4 py-2.5 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                          <span className="font-medium">Delete</span>
                        </button>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 border bg-white rounded-md hover:bg-neutral-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSave}
                            disabled={!hasChanges || isSaving || !isEditFormValid()}
                            className={`px-4 py-2 bg-black text-white rounded-md flex items-center gap-2
                              ${(!hasChanges || isSaving || !isEditFormValid()) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800'}`}
                          >
                            {isSaving && <ImSpinner8 className="w-4 h-4 animate-spin" />}
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <Dialog 
          open={isDeleteDialogOpen} 
          onClose={() => setIsDeleteDialogOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl">
              <Dialog.Title className="text-lg font-semibold text-neutral-900">
                Delete Variable
              </Dialog.Title>
              
              <div className="mt-4">
                <p className="text-sm text-neutral-600">
                  Are you sure you want to delete this variable? This action cannot be undone.
                </p>
                
                {variableToDelete && (
                  <div className="mt-4 p-4 bg-neutral-50 rounded-md">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-700">Variable</span>
                        <span className="font-mono text-sm">{variableToDelete.key}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-700">Created</span>
                        <DateTooltip date={variableToDelete._cr} id={`delete-created-${variableToDelete.key}`}>
                          <span className="text-sm text-neutral-600">
                            {variableToDelete._cr && format(new Date(variableToDelete._cr), 'MMM d, yyyy')}
                          </span>
                        </DateTooltip>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-700">Last updated</span>
                        <div className="flex items-center gap-2">
                          <DateTooltip date={variableToDelete._up} id={`delete-updated-${variableToDelete.key}`}>
                            <span className="text-sm text-neutral-600">
                              {variableToDelete._up && format(new Date(variableToDelete._up), 'MMM d, yyyy')}
                            </span>
                          </DateTooltip>
                          {variableToDelete.editor && (
                            <img 
                              src={variableToDelete.editor?.picture || "/images/avatar.svg"} 
                              alt="Editor" 
                              className="w-6 h-6 rounded-full"
                              data-tooltip-id={`delete-editor-${variableToDelete.key}`}
                            />
                          )}
                          <Tooltip
                            id={`delete-editor-${variableToDelete.key}`}
                            place="top"
                            float={true}
                            delayShow={150}
                            className="!bg-white !border !border-neutral-200 !px-4 !py-2 !opacity-100 !shadow-md"
                          >
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="font-medium text-black">
                                {variableToDelete.editor?.name || "Unknown User"}
                              </div>
                              <div className="text-neutral-500">
                                {variableToDelete.editor?.email || "No email"}
                              </div>
                            </div>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsDeleteDialogOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border rounded-md hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className={`px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md flex items-center gap-2
                    ${isDeleting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                >
                  {isDeleting && <ImSpinner8 className="w-4 h-4 animate-spin" />}
                  Delete Variable
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* New Variable Dialog */}
        <Dialog 
          open={isNewVariableDialogOpen} 
          onClose={() => setIsNewVariableDialogOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl">
              <Dialog.Title className="text-lg font-semibold text-neutral-900">
                Add New Variable
              </Dialog.Title>
              
              <div className="mt-4 flex flex-col gap-4">
                {/* Name Field */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-neutral-700">Name</label>
                  <input
                    type="text"
                    value={newVariable.key}
                    onChange={(e) => handleNewVariableChange('key', e.target.value)}
                    className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${newVariable.key && !isKeyValid(newVariable.key) ? 'border-red-500' : ''}`}
                    placeholder="VARIABLE_NAME"
                  />
                  {newVariable.key && !isKeyValid(newVariable.key) && (
                    <p className="text-sm text-red-500 mt-1">
                      Name must not exceed {MAX_KEY_LENGTH} characters ({newVariable.key.length}/{MAX_KEY_LENGTH})
                    </p>
                  )}
                </div>

                {/* Value Type Selection */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-neutral-700">Value Type</label>
                  <select
                    value={newVariable.value_type}
                    onChange={(e) => handleNewVariableChange('value_type', e.target.value)}
                    className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="string">String</option>
                    <option value="url">URL</option>
                    <option value="json">JSON</option>
                  </select>
                </div>

                {/* Value Field */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-neutral-700">Value</label>
                  {newVariable.value_type === 'json' ? (
                    <div className="w-full">
                      <JsonEditor 
                        value={newVariable.value_json} 
                        onChange={(newValue) => handleNewVariableChange('value_json', newValue)}
                        maxLength={MAX_VALUE_LENGTH}
                        validate={validateJsonValue}
                      />
                    </div>
                  ) : newVariable.value_type === 'url' ? (
                    <div className="flex flex-col gap-1">
                      <input
                        type="url"
                        value={newVariable.value_url || ''}
                        onChange={(e) => handleNewVariableChange('value_url', e.target.value)}
                        className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono
                          ${newVariable.value_url && (!validateUrl(newVariable.value_url) || !isValueValid(newVariable.value_url)) ? 'border-red-500' : ''}`}
                        placeholder="https://"
                      />
                      {newVariable.value_url && !isValueValid(newVariable.value_url) && (
                        <p className="text-sm text-red-500 mt-1">
                          Value must not exceed {MAX_VALUE_LENGTH} characters ({newVariable.value_url.length}/{MAX_VALUE_LENGTH})
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        value={newVariable.value_string || ''}
                        onChange={(e) => handleNewVariableChange('value_string', e.target.value)}
                        className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono
                          ${newVariable.value_string && !isValueValid(newVariable.value_string) ? 'border-red-500' : ''}`}
                      />
                      {newVariable.value_string && !isValueValid(newVariable.value_string) && (
                        <p className="text-sm text-red-500 mt-1">
                          Value must not exceed {MAX_VALUE_LENGTH} characters ({newVariable.value_string.length}/{MAX_VALUE_LENGTH})
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Comment Field */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-neutral-700">Comment</label>
                  <textarea
                    value={newVariable.comment || ''}
                    onChange={(e) => handleNewVariableChange('comment', e.target.value)}
                    placeholder="Add a comment explaining what this environment variable is for"
                    rows={2}
                    className={`w-full px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${newVariable.comment && !isCommentValid(newVariable.comment) ? 'border-red-500' : ''}`}
                  />
                  {newVariable.comment && !isCommentValid(newVariable.comment) && (
                    <p className="text-sm text-red-500 mt-1">
                      Comment must not exceed {MAX_COMMENT_LENGTH} characters ({newVariable.comment.length}/{MAX_COMMENT_LENGTH})
                    </p>
                  )}
                </div>

                {/* Secret Toggle */}
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="text-[15px] font-semibold text-neutral-600">
                    Secret Variable
                  </span>
                  <Switch
                    checked={newVariable.is_secret}
                    onChange={(checked) => handleNewVariableChange('is_secret', checked)}
                    className={`${newVariable.is_secret ? "bg-black" : "bg-neutral-200"
                      } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black/20`}
                  >
                    <span
                      className={`${newVariable.is_secret ? "translate-x-5" : "translate-x-1"
                        } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                    />
                  </Switch>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsNewVariableDialogOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border rounded-md hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateVariable}
                  disabled={isCreating || !newVariable.key.trim() || !isCreateFormValid()}
                  className={`px-4 py-2 text-sm font-medium text-white bg-black rounded-md flex items-center gap-2
                    ${(isCreating || !newVariable.key.trim() || !isCreateFormValid()) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800'}`}
                >
                  {isCreating && <ImSpinner8 className="w-4 h-4 animate-spin" />}
                  Add Variable
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default VariablesSection; 