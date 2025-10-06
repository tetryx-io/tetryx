// @ts-nocheck
import OmniLink from "@/components/Shared/omnilink";
import WikiCard from "@/components/interfaces/articlesCard";
import { Mixpanel } from "@/lib/mixpanel";
import { clsx } from "clsx";
import _map from "lodash/map";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaExternalLinkAlt, FaPaperPlane } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";

const EarlyAccessButton = ({ className }) => {
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

const GetInTouchButton = ({ className }) => {
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
  const router = useRouter();
  const { block_id } = router.query;
  let new_block_id;
  if (block_id) {
    const blockid_array = block_id.split("-");
    new_block_id = blockid_array.slice(-1).join("");
  }

  function extractTitle(child) {
    for (let i = 0; i < Object.keys(child).length; i++) {
      if (child[i].id == new_block_id) {
        return child[i].name;
      }

      if (Object.keys(child[i].children).length > 0) {
        const temp = extractTitle(child[i].children);
        if (temp) {
          return temp;
        }
      }
    }
  }

  let title;
  if (props.menu) {
    title = extractTitle(props.menu);
  }

  const total_pages = posts.nbPages;
  const page_num = posts.page + 1;
  const has_more_before = page_num > 1;
  const has_more_after = page_num < total_pages;

  return (
    <>
      <Head>
        <title>
          {page_title && `${page_title}${title ? " » " + title : ""}`}
        </title>
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
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 items-start md:-mt-20">
            {_map(posts.hits, (pg, idx) => (
              <WikiCard page={pg} />
            ))}
            <nav className="col-span-full flex justify-center items-center w-full border-t md:border-violet-600 md:border-opacity-10 mt-7 md:mt-20 pt-8 pb-8 mx-auto font-semibold">
              <OmniLink
                disabled={!has_more_before}
                href="/articles/page/1/"
                className={clsx(
                  "p-2 sm:ml-auto mr-auto sm:mr-10 text-violet-400 hover:text-violet-500"
                )}
                aria-hidden="false"
              >
                {" "}
                |←&nbsp;&nbsp;Newest posts
              </OmniLink>
              <OmniLink
                disabled={!has_more_before}
                href={`/articles/page/${page_num - 1}`}
                className={clsx(
                  "p-2 sm:ml-auto mr-auto sm:mr-10 text-violet-400 hover:text-violet-500"
                )}
                aria-hidden="false"
              >
                {" "}
                ←&nbsp;&nbsp;Newer posts{" "}
              </OmniLink>
              <div className="hidden sm:flex text-sm">
                {page_num - 2 > 0 && (
                  <OmniLink
                    href={`/articles/page/${page_num - 2}`}
                    className="flex w-9 h-9 items-center justify-center bg-violet-400 bg-opacity-20 text-violet-600 hover:bg-opacity-40 hover:text-violet-700 text-semibold hover:border-violet-500 transition-colors rounded-lg mx-1"
                  >
                    {page_num - 2}
                  </OmniLink>
                )}
                {page_num - 1 > 0 && (
                  <OmniLink
                    href={`/articles/page/${page_num - 1}`}
                    className="flex w-9 h-9 items-center justify-center bg-violet-400 bg-opacity-20 text-violet-600 hover:bg-opacity-40 hover:text-violet-700 text-semibold hover:border-violet-500 transition-colors rounded-lg mx-1"
                  >
                    {page_num - 1}
                  </OmniLink>
                )}
                <span className="flex w-9 h-9 items-center justify-center bg-violet-500 text-white rounded-lg mx-1">
                  {page_num}
                </span>
                {page_num + 1 <= total_pages && (
                  <OmniLink
                    href={`/articles/page/${page_num + 1}`}
                    className="flex w-9 h-9 items-center justify-center bg-violet-400 bg-opacity-20 text-violet-600 hover:bg-opacity-40 hover:text-violet-700 text-semibold hover:border-violet-500 transition-colors rounded-lg mx-1"
                  >
                    {page_num + 1}
                  </OmniLink>
                )}
                {page_num + 2 <= total_pages && (
                  <OmniLink
                    href={`/articles/page/${page_num + 2}`}
                    className="flex w-9 h-9 items-center justify-center bg-violet-400 bg-opacity-20 text-violet-600 hover:bg-opacity-40 hover:text-violet-700 text-semibold hover:border-violet-500 transition-colors rounded-lg mx-1"
                  >
                    {page_num + 2}
                  </OmniLink>
                )}
              </div>
              <OmniLink
                disabled={!has_more_after}
                href={`/articles/page/${page_num + 1}`}
                className={clsx(
                  "p-2 ml-auto sm:ml-10 sm:mr-auto transition-colors text-violet-400 hover:text-violet-500"
                )}
              >
                Older posts&nbsp;&nbsp;→
              </OmniLink>
              <OmniLink
                disabled={!has_more_after}
                href={`/articles/page/${total_pages}`}
                className={clsx(
                  "p-2 ml-auto sm:ml-10 sm:mr-auto transition-colors text-violet-400 hover:text-violet-500"
                )}
              >
                Oldest posts&nbsp;&nbsp;→|
              </OmniLink>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}

export default Docs;
