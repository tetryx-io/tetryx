"use client";
import { pagesConfig } from "@/config/docs";
import { useEffect, useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { RiCheckFill, RiCheckboxCircleFill, RiFireFill } from "react-icons/ri";
import { variants } from "./EnrichCRM";
import { motion } from "framer-motion";
import BodyText from "../Common/AnimatedTyping/BodyText";
import { TypeAnimation } from "react-type-animation";

export default function EnrichLeadDemo() {
    const [hideLog, setHideLog] = useState(false);
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
    const insights = (pagesConfig.demo_data.find(page => page.title === 'insights'))?.items;
    const crm = (pagesConfig.demo_data.find(page => page.title === 'crm_list'))?.items;
    const dataSources = (pagesConfig.demo_data.find(page => page.title === 'data_sources'))?.prompts;

    useEffect(() => {
        const hidePromptLog = setTimeout(() => {
            setHideLog(true);
        }, 25000);

        return () => clearTimeout(hidePromptLog)
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPromptIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= dataSources.length) {
                    clearInterval(timer);
                }
                return nextIndex;
            });
        }, 10000);

        return () => clearInterval(timer);
    }, [dataSources.length]);

    const currentPrompt = dataSources[0];


    return (
        <>
            <div className="mt-8 relative demo-2 mx-auto xl:max-w-[1280px] font-inter transition-all">

                <div className="left">
                    <div className="bg-neutral-50 dark:bg-neutral-900 border-[1.5px] border-neutral-300 dark:border-neutral-700 rounded-md px-5 pt-5 pb-3 relative flex w-fit gap-8 mb-2 sm:mb-4">
                        {crm.map((item, index) => (
                            <div key={index} className="w-10 h-10 p-1 rounded border border-neutral-200 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-300 transition-all cursor-pointer bg-white dark:bg-black shadow">
                                <img src={item?.website ? `https://logo.clearbit.com/${item.website}` : item.logo} alt={`${item.name} Logo`} className="rounded" />
                            </div>
                        ))}
                        <div className="absolute text-xs font-semibold py-0.5 px-2 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded left-[15px] -top-[12px]">CRMs</div>
                    </div>

                    <div className="bidirectional link-1">
                        <div className="animated-line"></div>
                        <div className="animated-line"></div>
                    </div>

                    <div className="h-[94%]">
                        <div className="img-bottom">
                            <picture>
                                <source srcSet="https://rfm.sh/assets/crm-mini-dark.png" media="(prefers-color-scheme:dark)" />
                                <img src="https://rfm.sh/assets/crm-mini.png" width={650} height={533} alt="Snippet of CRM Table" />
                            </picture>
                        </div>
                        <div className="entity-card">
                            <div className="p-5 sm:px-8 sm:py-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl flex flex-col gap-8 w-full max-w-[400px] sm:max-w-[350px] sm:w-8/12 min-w-[280px] sm:min-w-[360px] rounded-xl transition-all">
                                <div className="lead-heat py-1 px-2.5 rounded border border-atrium-offWhite dark:border-neutral-700 bg-amber-500/10 text-xs flex items-center w-fit gap-1.5">
                                    <RiFireFill size={16} className="text-amber-600" />
                                    <span className="uppercase font-medium text-amber-700 dark:text-amber-400">Hot</span>
                                </div>

                                <div className="lead-info flex gap-4">
                                    <img src="https://xsgames.co/randomusers/assets/avatars/male/49.jpg" width={60} height={60} alt="Lead photo" className="size-12 bg-contain rounded-full" />
                                    <div className="flex flex-col justify-center">
                                        <div className="font-[600] text-lg">Mike Chang</div>
                                        <div className="opacity-50">mchang@hotmail.com</div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="font-medium opacity-80">Financial Analyst at Vert Capital</div>
                                    <div className="text-sm text-neutral-500 dark:text-neutral-400">+3 other positions</div>
                                </div>

                                <div className="flex gap-4 sm:gap-8">
                                    {insights.map((item, index) =>
                                    (
                                        <div className="" key={index}>
                                            <div className="text-xl font-[600]">{item.value}</div>
                                            <div className="mt-1 text-sm text-neutral-400">{item.name}</div>
                                        </div>
                                    )
                                    )}
                                </div>

                                <div className="transition-all">
                                    <div className="px-2.5 py-1.5 bg-blue-500/20 text-blue-600 dark:text-blue-500 flex items-center gap-3 rounded">
                                        <div className="diamond-icon bg-blue-600 dark:bg-blue-500">&nbsp;</div>
                                        <div className="font-medium">Got a new job in Arizona</div>
                                    </div>
                                    <div className="mt-4 px-2.5 py-1.5 bg-neutral-500/20 text-neutral-600 dark:text-neutral-400 flex items-center gap-3 rounded">
                                        <div className="diamond-icon bg-neutral-600 dark:bg-neutral-400">&nbsp;</div>
                                        <div className="font-medium w-full truncate">Moving to Arizona for a new role</div>
                                    </div>
                                </div>

                                <div className="my-2 flex items-center gap-2.5">
                                    <RiCheckboxCircleFill size={18} className="text-green-600" />
                                    <span className="text-sm font-medium">Entity up-to-date</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="connection hidden">
                    <div className="lines">
                        <img src="/images/enrich-link-animated.svg" width={320} height={240} alt="" className="bg-cover" />
                    </div>
                    <div className="false-middle">
                        <div className="pass-through p-3 h-fit mb-[200px]">
                            <img src="reframe.svg" width={40} height={40} alt="reframe" className="logo" />
                        </div>
                    </div>
                </div>

                <div className="right hidden">
                    <div className="responses">
                        {/* {currentPrompt && ( */}
                            <>
                                <div className="mt-2 mb-6 h-20">
                                    <div className="prompt-input text-black dark:text-white border border-black dark:border-white rounded-md shadow-md">
                                        <div className="absolute left-4 top-[9px] h-full"><HiSparkles className="" size={24} /></div>
                                        {/* <input className="pl-[36px] bg-transparent rounded-md focus:outline-none focus:ring-0 leading-tight"
                                            type="text"
                                            name="prompt"
                                            value={currentPrompt?.prompt}
                                            onChange={(e) => { }}
                                        /> */}
                                        <div className="pl-[36px] bg-transparent rounded-md focus:outline-none focus:ring-0 leading-tight h-5">
                                            <BodyText sequence={[dataSources[0]?.prompt, 6000," ", 1000, dataSources[1]?.prompt, 6000," ", 1000, dataSources[0]?.prompt]}/>
                                        </div>
                                    </div>

                                    <div className={`logs ${hideLog ? "!hidden" : ""}`}>
                                        <div className="spin-loader">&nbsp;</div>
                                        Fetching results..
                                    </div>
                                </div>
                                {currentPrompt?.responses.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={variants} // Apply the defined variants
                                        initial="hidden" // Start with the 'hidden' variant
                                        custom={index} // Pass the index to the 'visible' variant for staggered animation
                                        animate="visible" // Animate to the 'visible' variant
                                    >
                                        <DataSourcesDemoCard key={index} {...item} />
                                    </motion.div>
                                ))}
                            </>
                        {/* )} */}
                    </div>
                </div>

            </div>
        </>
    );
}

export const DataSourcesDemoCard = ({ source = "", data = "", source_website_url = "" }) => {
    return (
        <div className="inner">
            <div className="p-4 rounded-md bg-white dark:bg-neutral-900 border border-atrium-offWhite dark:border-neutral-700 shadow-md flex gap-4 font-medium max-w-[380px]">
                <img src={`https://logo.clearbit.com/${source_website_url}`} width={40} height={40} alt="x's Logo" className="w-6 h-6 rounded-[3px]" />
                <div className="">{data}</div>
            </div>
        </div>
    )
};