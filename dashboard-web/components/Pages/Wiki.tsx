"use client"
import React, { useEffect } from "react";
import Head from "next/head";
import _map from "lodash/map";
import { useRouter } from "next/navigation";
import OmniLink from "@/components/Shared/omnilink";
import { clsx } from "clsx";
import { GoTelescope } from "react-icons/go";
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import WikiCard from "@/components/interfaces/WikiCard";
import { Mixpanel } from "@/lib/mixpanel";
import Pagination from "../Shared/Pagination/oldPagination";

const EarlyAccessButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        Mixpanel.track("Button | Early Access | Wiki", {});
        router.push("/auth/signup");
      }}
      className="flex  hover:shadow-xl border-solid border border-black dark:border-white shadow rounded flex-row  max-w-md w-52 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
    >
      <GoTelescope size={25} />{" "}
      <span className="grow text-center">Get Early Access</span>
    </button>
  );
};

const GetInTouchButton = () => {
  return (
    <div className="h-full w-full rounded-md bg-gradient-to-r from-fuchsia-200 via-red-500 to-yellow-500 p-0.5">
      <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
        <OmniLink
          href="mailto:team@reframe.is?subject=Reframe » Hello from Landing Page"
          className="rounded-sm  flex hover:shadow-xl flex-row  max-w-md w-52 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
        >
          <FaPaperPlane size={25} />{" "}
          <span className="grow text-center">Get In Touch</span>
          <FaExternalLinkAlt size={15} />
        </OmniLink>
      </div>
    </div>
  );
};

function Docs(props) {
  const { title: page_title, posts } = props;

  const total_pages = posts?.nbPages || 0;
  const page_num = posts ? posts.page + 1 : 0;
  const has_more_before = page_num > 1;
  const has_more_after = page_num < total_pages;

  return (
    <>
      <Head>
        <title>{page_title}</title>
      </Head>
      <div className={"bg-zinc-100 dark:bg-zinc-900 dark:text-white"}>
        <div className="text-black pt-40 bg-white dark:bg-black dark:text-white relative md:py-48 pb-20 text-center overflow-hidden">
          <h3 className="relative max-w-3xl px-4 mx-auto text-base sm:text-lg text-opacity-70">
            Unleash the power of AI-driven agents in a user-friendly, low-code
            database environment. Leverage AI Agents to automate the workflows
            you once spent countless human hours on. Reframe - where operational
            efficiency meets the future of data management.
          </h3>
          <div className="flex my-12 flex-row items-center justify-center w-full">
            <div className="hidden md:block">
              <EarlyAccessButton />
            </div>
            <div className="md:hidden ">
              <GetInTouchButton />
            </div>
          </div>

          <p className="my-2 relative max-w-xl px-4 mx-auto text-base sm:text-lg pt-3">
            This wiki is home to content for Machine Learning and AI-focused
            material, covering everything from the intricacies of LLMs to the
            process of creating vector embeddings.
          </p>
        </div>
        <section className="container mx-auto pt-10 px-4 sm:px-6 md:px-8 w-full">
          {posts ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start md:-mt-20">
              {_map(posts.hits, (pg, idx) => (
                <div key={idx}>
                  <WikiCard page={pg} />
                </div>
              ))}
              <div className="col-span-full">
                <Pagination
                  pageNum={page_num}
                  totalPages={total_pages}
                  hasMoreBefore={has_more_before}
                  hasMoreAfter={has_more_after}
                  basePath="/articles"
                  onPageChange={()=>{}}
                />
              </div>
            </div>
          ) : (
            <div className="text-center p-4">No Content!</div>
          )}
        </section>
      </div>
    </>
  );
}

export default Docs;
