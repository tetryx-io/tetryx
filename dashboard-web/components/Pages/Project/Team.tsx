// @ts-nocheck

import React, { useState } from "react";
import {
  PencilIcon,
  CheckCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/20/solid";
import { useNamespaceContext } from "@/components/Pages/context/workspace";
import _get from "lodash/get";
import _find from "lodash/find";
import _filter from "lodash/filter";
import _map from "lodash/map";
import Link from "next/link";
import { addProjectMembers } from "@/lib/services";
import { clsx } from "clsx";

const Home = () => {
  const ctx = useNamespaceContext();

  const project_id_key = _get(ctx?.state, "data.app_state[0].meta.project_id");

  const memberships_for_project = _get(
    ctx?.project_members,
    "data.project_membership"
  );
  const current_project = _find(ctx?.projects, { id: project_id_key });

  const TR = ({ member }) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <span className={"block h-6"}>{_get(member, "user.name", "-")}</span>
          <span className={"block"}>{_get(member, "user.email", "-")}</span>
        </td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.role}
        </td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {member.created_at}
        </td>
      </tr>
    );
  };

  const ProjectDetails = ({ memberships }) => {
    return (
      <div
        className={
          "flex flex-row px-6 py-3 justify-center bg-white dark:bg-zinc-900 relative overflow-x-auto shadow-md sm:rounded"
        }
      >
        <table className="table-auto w-full text-sm border-none text-left text-gray-500 dark:text-gray-400">
          <tbody className="rounded w-full">
            {_map(memberships, (m) => (
              <TR name={"Role"} member={m} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (!current_project) return <div>loading</div>;

  return (
    <div className="mt-4">
      <div>
        <nav className={"py-4 px-8"}>
          <div className="flex flex-row justify-between">
            <Link
              href={`/data/frame/${ctx?.state?.id}`}
              className={clsx(
                "inline-block px-8 py-2 mb font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro",
                "ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75",
                "flex flex-row items-center justify-center space-x-2"
              )}
            >
              <ArrowLeftCircleIcon className={clsx("h-5 w-5")} />
              <span>Back to Project</span>
            </Link>
            {/*<button*/}
            {/*  onClick={handleAddProjectMember}*/}
            {/*  className="inline-block px-8 py-2 mb font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"*/}
            {/*>*/}
            {/*  Invite Team Member*/}
            {/*</button>*/}
          </div>
        </nav>
      </div>
      <div key={current_project.id} className="w-full p-4 mb-6 md:flex-none">
        <ProjectDetails memberships={memberships_for_project} />
      </div>
    </div>
  );
};

export default Home;
