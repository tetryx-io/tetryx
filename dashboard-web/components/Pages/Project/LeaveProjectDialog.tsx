// @ts-nocheck
import React, { useState } from "react";
import { useRouter } from "next/router";
import { clsx } from "clsx";

const Home = () => {
  const [_projects, setProjects] = useState([]);
  const router = useRouter();

  return (
    <>
      <div className="mt-2">
        <div className="w-full">
          <div className="bg-white px-8 pt-3">
            <h1
              className={clsx(
                "text-2xl font-normal text-gray-900 dark:text-white",
                "py-2"
              )}
            >
              Are you sure you want to leave this project?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
