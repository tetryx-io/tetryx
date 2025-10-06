"use client";
import { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine, RiPlayFill, RiTerminalBoxLine } from "react-icons/ri";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Shared/Logo";


const DeveloperPage = () => {

    const steps = [
        {
            id: "00A1-Create",
            title: "Create an agent",
            copy: "After signing up, set up your developer account. Build an agent by customizing key details like name, image, and description to fit your vision.",
            image: "/atrium/media/create-img.png"
        },
        {
            id: "00A1-Code",
            title: "Code and test your agent",
            copy: "Develop and test your agent directly on our inbuild development environment, ensuring it performs flawlessly and refine its capabilities before deployment.",
            image: "/atrium/media/code-img.png"
        },
        {
            id: "00A1-Price",
            title: "Configure pricing and deploy",
            copy: "Choose between subscription or usage-based pricing. Once ready, deploy your agent to the Atrium marketplace with a single click, and start earning passive income.",
            image: "/atrium/media/price-img.png"
        }
    ];

    const [activeStep, setActiveStep] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % steps.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [steps.length]);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.src = steps[activeStep].image;
        }
    }, [activeStep]);

    

    return (
        <div className="flex flex-col items-center justify-center h-fit px-6 md:px-10 w-full max-w-[1680px] gap-8 xl:gap-12 mx-auto transition-all">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-10 md:mt-12 xl:mt-16 transition-all">
                <div className="w-full sm:w-10/12 lg:w-11/12">
                    <div className="flex w-fit px-2.5 py-1 bg-violet-50 rounded-md gap-2">
                        <RiTerminalBoxLine size={20} className="text-violet-500" />
                        <div className="text-gradient-purple-1 text-sm font-semibold">For Developers</div>
                    </div>
                    <div className="flex flex-wrap w-full mt-3 !leading-relaxed items-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] mb-2 font-sora font-semibold transition-all">
                        Build and deploy custom AI agents that earn for you
                    </div>
                    <p className="text-neutral-600 mt-6 font-normal text-justify leading-relaxed">
                        Create custom AI agents that solve problems for businesses and generate income for you. Use powerful integrated tools to build and deploy easily. Earn in your sleep, turn your expertise into passive income.
                    </p>

                    <div className="flex mt-8 gap-6">
                        <Link href={"/auth/signup"} className="flex gap-1.5 h-11 items-center px-5 flex-none bg-black text-white font-medium hover:opacity-80 rounded-md">Start building <RiArrowRightSLine size={24} /> </Link>
                        <Link href={"/editor/playground"} className="flex gap-1.5 h-11 items-center px-5 flex-none bg-neutral-100 text-black font-medium hover:bg-offWhite rounded-md">Visit playground</Link>
                    </div>

                </div>

                <div className="w-full">
                    <div className="aspect-video lg:min-h-[280px] bg-neutral-100 border border-neutral-300 rounded-xl p-3">
                        <div className="relative hover:cursor-pointer">
                            <img src="/atrium/media/dev-hero-img.png" alt="Step illustration" className="w-full h-full object-cover rounded-lg" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg bg-black/20">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    className="p-4 bg-white/80 text-neutral-700 rounded-full"
                                >
                                    <RiPlayFill size={32}/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 w-full mt-6">
                    <div className="w-full sm:w-10/12 lg:w-7/12 max-w-[960px] mx-auto">
                        <div className="text-2xl md:text-[32px] font-semibold w-full text-center">Let your code work <span className="underline decoration-4 decoration-violet-600">for you</span> </div>

                        <p className="text-neutral-600 mt-3 font-normal text-center">
                            See how it works - A step-by-step guide on how to get started on our robust platform. Everything you need fully integrated, making it easy to build and deploy AI agents seamlessly.
                        </p>
                    </div>

                    {/* How it works step by step */}
                    <div className="how-it-works grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-10">
                        <div>
                            <div className="text-sm font-semibold uppercase text-black/50 mt-1 mb-4 py-1 px-3 bg-neutral-50 border rounded w-fit">Build an agent in 3 easy steps</div>

                            <div className="relative flex flex-col gap-6 lg:border-l-2">
                            {steps.map((step, index) => (
                                <div key={index} className="relative pt-2 lg:-left-[2px] lg:pl-4 lg:pt-0 h-fit">
                                    <div key={index} className={`flex flex-col px-4 py-3 rounded-md ${activeStep === index && 'bg-violet-50'}`}>
                                        <div className="text-lg font-semibold mb-1">{step.title}</div>
                                        <p className="text-neutral-600">{step.copy}</p>
                                    </div>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className={`${steps[activeStep].id === step.id ? 'block' : 'hidden'} lg:hidden w-full mt-4`}
                                    >
                                        <img ref={imageRef} src={step.image} alt="Step illustration" className="w-full h-full object-cover" />
                                    </motion.div>
                                    <div className={`hidden lg:block ${activeStep === index && "ABdaHGik-animate-y"}`}></div>
                                    <div className={`block lg:hidden ${activeStep === index && "ABdaHGik-animate-x"}`}></div>
                                </div>
                            ))}
                            </div>
                        </div>
                        

                        <div className="hidden lg:block p-5">
                            <motion.img 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 1 }}
                                ref={imageRef} 
                                src={steps[activeStep].image} 
                                alt="Step illustration" 
                                className="w-full h-full max-h-[460px] object-cover object-top border border-neutral-200 rounded-xl" 
                            />
                        </div>
                    </div>
                </div>

                <hr className="lg:col-span-2 w-full mx-auto sm:w-8/12" />

                <div className="lg:col-span-2 flex flex-col items-center mt-10 mb-6 w-full sm:w-8/12 mx-auto">
                    <Logo />
                    <div className="text-neutral-600 mt-6 font-normal text-center leading-relaxed">Atrium AI simplifies data research with powerful AI agents helping you save time, money and scale your data research workflows.</div>
                    <Link href={"/auth/signup"} className="flex h-10 items-center px-4 flex-none bg-black text-white font-medium rounded-md mt-8">Start building</Link>
                </div>

            </div>
        </div>


    );
};

export default DeveloperPage;
