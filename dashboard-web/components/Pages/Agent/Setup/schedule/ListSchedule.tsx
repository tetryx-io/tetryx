"use client";
import React, { useEffect, useState } from "react";
import {
  CaretDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import AddSchedule from "./AddSchedule";
import { DateTooltip } from "@/components/Shared/DateTooltip";
import { useAgentInstallationCronJobsSubscription } from "@/generated/graphql";
import { formatDistanceToNow } from "date-fns";
import EditSchedule from "./EditSchedule";
import { deleteSchedule } from "@/lib/services/schedule";
import { toast } from "react-hot-toast";
import { RiCalendarLine } from "react-icons/ri";
import ConformationModel from "@/components/Modals/ConformationModel";
interface ListScheduleProps {
  agent_id: string;
  installation_id: string;
}

export interface Schedule {
  id: string;
  name: string;
  description?: string | null;
  frequency?: string | null;
  body?: any;
  _cr: any;
  _up: any;
}

const ListSchedule: React.FC<ListScheduleProps> = ({
  agent_id,
  installation_id,
}) => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isAddScheduleDialogOpen, setIsAddScheduleDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: cronJobs,
    loading: cronJobsLoading,
    error: cronJobsError,
  } = useAgentInstallationCronJobsSubscription({
    variables: { agent_installation_id: installation_id },
    skip: !installation_id,
  });

  useEffect(() => {
    if (searchQuery) {
      const jobs = cronJobs?.agent_installation[0]?.cron_jobs || [];
      setSchedules(
        jobs.filter(
          (schedule) =>
            schedule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            schedule.description
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            schedule.frequency
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setSchedules(cronJobs?.agent_installation[0]?.cron_jobs || []);
    }
  }, [cronJobs, searchQuery]);

  const handleDelete = async () => {
    const res = await deleteSchedule({
      agent_id: agent_id,
      installation_id: installation_id,
      schedule_id: expandedRow,
    });
    if (res.status) {
      setIsDeleteDialogOpen(false);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-2xl font-bold">Schedules</h2>
        <button
          className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md hover:bg-neutral-800 whitespace-nowrap"
          onClick={() => setIsAddScheduleDialogOpen(true)}
        >
          <PlusIcon className="h-4 w-4" />
          <span>Add Schedule</span>
        </button>
      </div>
      <p className="text-neutral-600 mb-8 text-lg">
        Manage schedules for your agent.
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
              placeholder="Search schedules..."
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Variables Table */}
        <div className="flex flex-col gap-2">
          {schedules.length === 0 ? (
            <div className="text-center py-8 text-neutral-600">
              No schedules found.
            </div>
          ) : (
            schedules.map((schedule: Schedule) => (
              <div key={schedule.id} className="border rounded-md">
                {/* Main Row Content */}
                <div
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 gap-4 sm:gap-2 hover:bg-neutral-50 ${
                    expandedRow === schedule.id ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 w-full sm:w-1/3">
                    <RiCalendarLine className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <div
                        className="font-medium truncate cursor-pointer hover:text-blue-600 transition-colors"
                        data-tooltip-id={`key-${schedule.id}`}
                      >
                        {schedule.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-1/3">
                    <div className="flex flex-col min-w-0">
                      <div
                        className="font-medium truncate cursor-pointer hover:text-blue-600 transition-colors"
                        data-tooltip-id={`key-${schedule.id}`}
                      >
                        {schedule.frequency}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-1/3">
                    <div className="text-sm text-neutral-500 truncate">
                      <DateTooltip
                        date={schedule._up}
                        id={`updated-${schedule.id}`}
                      >
                        {schedule._up
                          ? `Updated ${formatDistanceToNow(new Date(schedule._up))} ago`
                          : "Never updated"}
                      </DateTooltip>
                    </div>
                  </div>
                  {/* Add a more prominent caret button */}
                  <button
                    onClick={() =>
                      setExpandedRow(
                        expandedRow === schedule.id ? null : schedule.id,
                      )
                    }
                    className={`flex items-center justify-center w-8 h-8 hover:bg-neutral-100 rounded-md transition-transform ${
                      expandedRow === schedule.id
                        ? "rotate-180 bg-neutral-100"
                        : ""
                    }`}
                  >
                    <CaretDownIcon className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>
                {expandedRow === schedule.id && (
                  <div className="px-4 py-4 bg-neutral-50">
                    <EditSchedule
                      schedule={schedule}
                      agent_id={agent_id}
                      installation_id={installation_id}
                      handleDelete={() => setIsDeleteDialogOpen(true)}
                      handleClose={() => setExpandedRow(null)}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <AddSchedule
        show={isAddScheduleDialogOpen}
        handleClose={() => setIsAddScheduleDialogOpen(false)}
        agent_id={agent_id}
        installation_id={installation_id}
      />
      <ConformationModel
        isOpen={isDeleteDialogOpen}
        title="Delete Schedule"
        closeModel={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ListSchedule;
