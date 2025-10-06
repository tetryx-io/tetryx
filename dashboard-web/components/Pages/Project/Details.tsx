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
import Link from "next/link";
import { clsx } from "clsx";

const Home = () => {
  const ctx = useNamespaceContext();
  const project_id_key = _get(ctx?.state, "data.app_state[0].meta.project_id");
  const current_project = _find(ctx?.projects, { id: project_id_key });

  const TR = ({ name, value, editable }) => {
    const [_value, setValue] = useState(value);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </td>
        <td className={"px-6 py-4"}>
          {editable ? (
            <input
              value={_value as string}
              minLength={3}
              onChange={onChange}
              // onBlur={onBlur}
            />
          ) : (
            value
          )}
        </td>
        <td>{editable && <CheckCircleIcon className={"h-8 w-8"} />}</td>
        <td>{editable && <PencilIcon className={"h-8 w-8"} />}</td>
      </tr>
    );
  };

  const ProjectDetails = ({ project }) => {
    return (
      <div
        className={
          "flex flex-row px-6 py-3 justify-center bg-white relative overflow-x-auto shadow-md sm:rounded-lg"
        }
      >
        <table className="table-auto w-full text-sm border-none text-left text-gray-500 dark:text-gray-400">
          <tbody className="rounded ">
            <TR name={"Name"} value={project.name} />
            <TR name={"Handle"} value={project.slug} />
            <TR name={"ID"} value={project.id} />
            <TR name={"Created"} value={project.created_at} />
            <TR name={"Last Updated"} value={project.updated_at} />
          </tbody>
        </table>
      </div>
    );
  };

  if (!current_project) return <div>loading</div>;

  return (
    <div className={"bg-zinc-50 dark:bg-zinc-900 h-full"}>
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
        </div>
      </nav>
      <div className={"py-4 px-8"}>
        <div
          key={current_project.id}
          className="w-full p-4 w-full mb-6 flex flex-row justify-center"
        >
          <ProjectDetails project={current_project} />
        </div>
      </div>
    </div>
  );
};

export default Home;
