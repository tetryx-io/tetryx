"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiAccountCircleFill, RiArrowDownSFill, RiAtFill, RiAtLine, RiBriefcase3Fill, RiBriefcaseFill, RiFocus3Fill, RiFocus3Line, RiFontFamily, RiGlobalFill, RiPhoneFill, RiTeamFill } from "react-icons/ri";
import { pagesConfig } from "@/config/docs";

export const variants = {
    hidden: { opacity: 0, y: -50 }, // Start position for the animation
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1, // Delay each row based on its index
            duration: 0.5, // Duration of the animation
            type: "spring", // Use a spring type animation for a bounce effect
            stiffness: 60, // Spring stiffness, adjust for more/less bounce
            damping: 10, // Spring damping, adjust to change how the bounce behaves
        },
    }),
};

export default function EnrichCRMDemo() {
    const CRMs = (pagesConfig.demo_data.find(page => page.title === 'crm_list'))?.items;
    const crmData = (pagesConfig.demo_data.find(page => page.title === 'crm_table'))?.items;

    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const allDataIds = new Set<number>(crmData.map((item) => item.id));
            setSelectedItems(allDataIds);
        } else {
            setSelectedItems(new Set<number>());
        }
    };

    const toggleItemSelection = (dataId: number) => {
        const newSelection = new Set(selectedItems);
        if (selectedItems.has(dataId)) {
            newSelection.delete(dataId);
        } else {
            newSelection.add(dataId);
        }
        setSelectedItems(newSelection);
    };

    const checkboxStyles = `w-4 h-4 cursor-pointer accent-neutral-900 dark:accent-neutral-200 bg-neutral-100 border-neutral-200 rounded dark:bg-neutral-700 dark:border-neutral-600 focus:ring-0 focus:ring-white`

    const scoreColor = (score) => ({
        low: 'red',
        average: 'amber',
        good: 'blue',
        'very good': 'green',
        excellent: 'purple'
    }[score] || '');

    return (
        <div className="font-inter text-sm w-full p-5 rounded-md border border-neutral-200 bg-white shadow-lg">

            <div className="flex mb-5 justify-between items-center">
                <div>
                    <div className="px-1.5 py-1 rounded-md border border-neutral-200 grid grid-cols-2 gap-2 items-center bg-neutral-100">
                        <button className="w-full flex px-3 py-1.5 gap-1.5 rounded-md justify-center font-medium bg-white text-neutral-600 shadow-md">
                            <RiTeamFill size={16}/> Inbound Leads
                        </button>
                        <button className="w-full flex px-3 py-1.5 gap-1.5 rounded-md justify-center items-center font-medium text-neutral-500 hover:bg-atrium-offWhite transition-all">
                            <RiAccountCircleFill size={16}/> Prospects
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                    {CRMs.map((item, index) => (
                        <div className="w-10 h-10 p-1 rounded border border-neutral-200 hover:border-neutral-500 transition-all cursor-pointer bg-white shadow" key={index}>
                            <img src={item?.website ? `https://logo.clearbit.com/${item.website}` : item.logo} alt={`${item.name} Logo`} className="rounded" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="demo">
                <table className="text-left">
                    <thead className="font-medium">
                        <tr className="bg-neutral-100">
                            <th className="fit-column table-border">
                                <label className="h-full w-full cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        <input
                                            className={checkboxStyles}
                                            type="checkbox"
                                            checked={selectedItems.size === crmData.length}
                                            onChange={handleSelectAll}
                                        />
                                    </div>
                                </label>
                            </th>
                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiFontFamily size={20}/>Name</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>
                            
                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiAtLine size={20}/>Email</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>

                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiFocus3Line size={20}/>Lead score</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>

                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiBriefcaseFill size={20}/>Company</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>

                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiGlobalFill size={20}/>Website</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>

                            <th className="column-header table-border">
                                <div className="flex text-neutral-500 justify-between">
                                    <div className="flex gap-2.5 w-fit"><RiPhoneFill size={20}/>Phone</div>
                                    <RiArrowDownSFill size={16}/>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {crmData.map((item, index) => {
                            const color = scoreColor(item.score);
                            return (
                                <motion.tr
                                    key={item.id}
                                    variants={variants} // Apply the defined variants
                                    initial="hidden" // Start with the 'hidden' variant
                                    custom={index} // Pass the index to the 'visible' variant for staggered animation
                                    animate="visible" // Animate to the 'visible' variant
                                >
                                    <td className="fit-column border px-4 py-2 text-neutral-600 ">
                                        <label className="h-full flex cursor-pointer">
                                            <input
                                                type="checkbox"
                                                value={item.id}
                                                className={checkboxStyles}
                                                checked={selectedItems.has(item.id)}
                                                onChange={() => toggleItemSelection(item.id)}
                                            />
                                        </label>
                                    </td>
                                    <td className="cell border border-neutral-200">{item.name}</td>
                                    <td className="cell border border-neutral-200">{item.email}</td>
                                    <td className="cell border border-neutral-200">
                                        <div className={`rounded w-fit px-2.5 flex items-center gap-2.5 bg-neutral-100`}>
                                            <div className={`score-dot bg-black`}>&nbsp;</div> 
                                            <div className="capitalize">{item.score}</div>
                                        </div>
                                    </td>
                                    <td className="cell border border-neutral-200">{item.company}</td>
                                    <td className="cell border border-neutral-200">{item.company_website}</td>
                                    <td className="cell border border-neutral-200">{item.phone}</td>
                                </motion.tr>
                            )}
                        )}
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}