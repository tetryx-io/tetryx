"use client";
import { useRef, useState } from "react";
import {
  RiRocketFill,
  RiCpuFill,
  RiShieldStarFill,
  RiSettings4Fill,
  RiSpaceShipFill,
  RiDatabase2Fill,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AtriumLinesGlow from "./Shared/AtriumGlow";
import { useTetryxAuth as useSupabaseAuth } from "@/lib/providers/auth";

const Landing = ({ initialAgentData: agent_data }) => {

  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("videoCardOpen");
      return storedValue ? JSON.parse(storedValue) : true;
    }
    return false;
  });

  const cardsRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [mouseOnCard, setMouseOnCard] = useState(false)
  const { session_id } = useSupabaseAuth();

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setCursor({ x: x, y: y })
    }
  }

  const founder_logos: string[] = [
    "/atrium/media/berkeley.png",
    "/atrium/svg/meta_logo.svg",
    "/atrium/svg/intel_logo.svg",
    "/atrium/svg/columbia.png",
    "/atrium/svg/amd_logo.svg",
  ] 

  return (
    <div className="flex flex-col items-center justify-center h-fit __variable_b1c8cd px-5 md:px-10 w-full max-w-[1680px] gap-8 xl:gap-12 mx-auto transition-all">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-10 md:mt-12 xl:mt-16 transition-all">
        <div 
          className="col-span-2 grid grid-cols-12 gap-5"
        >
          <div className="col-span-full sm:col-span-10 lg:col-span-8">
            <div className="hidden">Open modular stack for space, defense, and autonomous vehicle development</div>

            <div className="flex flex-wrap w-full gap-x-2.5 gap-y-5 lg:gap-x-4 lg:gap-y-7 items-center text-[26px] lg:text-[30px] xl:text-4xl 2xl:text-[40px] mb-2 font-epilogue font-semibold transition-all">
              <span>Build</span>
              <span className="text-[22px] lg:text-[27px] xl:text-3xl 2xl:text-[34px] flex items-center w-fit py-1 md:py-1.5 xl:py-2 px-3 gap-1.5 bg-blue-50/50 border border-blue-100 text-blue-700 rounded-lg transition-all hover:bg-blue-50">
                <RiRocketFill className="opacity-80" size={20} />
                space
              </span>
              <span>&</span>
              <span className="text-[22px] lg:text-[27px] xl:text-3xl 2xl:text-[34px] flex items-center w-fit py-1 md:py-1.5 xl:py-2 px-3 gap-1.5 bg-purple-50/50 border border-purple-100 text-purple-700 rounded-lg transition-all hover:bg-purple-50">
                <RiCpuFill className="opacity-80" size={20} />
                autonomous
              </span>
              <span>systems</span>
            </div>

            <p className="text-neutral-600 mt-6 font-normal text-justify leading-relaxed xl:w-5/6">
              Tetryx is the open source modular stack that enables defense, aerospace, and space companies to rapidly build and support hardware components, vehicles, and autonomous systems. Our platform provides the foundational tools for mission-critical operations, from satellite deployment to autonomous vehicle control systems.
            </p>

            <div className="flex mt-8 gap-6">
              {!session_id && (
                <Link
                  href={"/auth/signup"}
                  className="flex h-11 text-lg items-center px-5 flex-none gradient-purple-1 text-white font-semibold rounded-md transition-colors"
                >
                  Access Dashboard
                </Link>
              )}
              <Link
                href={"/developers/"}
                className="hidden sm:flex h-11 text-lg items-center px-5 flex-none border-2 border-violet-600 text-violet-600 hover:bg-violet-50 font-semibold rounded-md transition-colors"
              >
                View Documentation
              </Link>
            </div>
          </div>

          <div 
            ref={cardsRef}
            onMouseEnter={() => setMouseOnCard(true)}
            onMouseLeave={() => setMouseOnCard(false)}
            onMouseMove={(event) => handleMouseMove(event)}
            className="hidden lg:flex flex-col place-items-center lg:col-span-4 h-full overflow-hidden"
          >
            <AtriumLinesGlow cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard}/>
          </div>

        </div>

        <div className="col-span-2 w-full mt-12">
          <div className="text-xl md:text-2xl font-semibold mb-6">
            Core Stack Components
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <RiDatabase2Fill className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-lg">Binary Cache System</h3>
              </div>
              <p className="text-gray-600 text-sm">
                High-performance Nix binary cache infrastructure for efficient artifact distribution and dependency management across mission-critical systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <RiSettings4Fill className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-lg">System Monitoring</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Real-time health monitoring and performance analytics for autonomous systems, providing critical insights for operational reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <RiShieldStarFill className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-lg">Mission Control</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Centralized command and control interface for managing space missions, vehicle deployments, and autonomous system operations.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="col-span-2 w-full mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Administrative Dashboard</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This dashboard serves as the central administration interface for the Tetryx open source stack.
                System administrators and mission operators can monitor cache performance, manage binary distributions,
                oversee hardware component deployments, and maintain system health across distributed autonomous vehicle networks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <RiSpaceShipFill className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Space Operations</h3>
                    <p className="text-sm text-gray-600">Monitor satellite deployments, track mission artifacts, and manage space-grade hardware components.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                    <RiShieldStarFill className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Defense Systems</h3>
                    <p className="text-sm text-gray-600">Secure cache management for defense applications with enterprise-grade monitoring and control.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 w-full mt-12">
          <div className="w-full sm:w-9/12 max-w-[960px]">
            <div className="font-medium text-neutral-500 w-full">Trusted by defense, aerospace, and space organizations</div>

            <div className="flex flex-wrap mt-6 w-full justify-start gap-x-16 gap-y-6 items-center">
              {founder_logos.map((src) => (
                <Image
                  key={src}
                  src={src}
                  width={128}
                  height={52}
                  alt={src.toUpperCase()}
                  style={{ width: 'auto', height: '80%' }}
                  className="w-24 flex flex-none hover:opacity-60 justify-center"
                />
              ))}
            </div>
          </div>
        </div>

      </div>      

      {/* <div className="fixed z-50 right-0 bottom-0 w-fit p-4 sm:p-10 max-w-[480px] min-h-8 flex justify-end items-end">
        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <div className="w-full flex justify-end">
              <Disclosure.Button
                onClick={() => {
                  localStorage.setItem("videoCardOpen", "true");
                }}
                aria-label="htp_panel"
                className={`${
                  open ? "hidden" : ""
                } p-3 gradient-purple-1 rounded-md w-fit flex justify-between shadow-lg transition-all`}
              >
                <div className="flex items-center text-white w-fit">
                  <div className="hidden sm:block font-semibold">
                    See how it works
                  </div>
                  <RiPlayFill size={24} />
                </div>
              </Disclosure.Button>

              <Disclosure.Panel className="bg-white relative border p-4 w-full rounded-md shadow-lg">
                <div className="font-semibold mt-1 mb-0.5">How it works</div>
                <div className="500 mb-3">
                  A short video on how Peter uses Atrium
                </div>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "64.86486486486486%",
                    height: "0",
                  }}
                >
                  <iframe
                    src="https://www.loom.com/embed/3d13b58ecfb547a0bf85bebd09b53e0e?sid=7d2fe3de-f50e-4dee-be95-9dba4dcbf9a0?hideEmbedTopBar=true&hide_share=true&hide_owner=true&autoplay=true"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "6px",
                    }}
                  ></iframe>
                </div>

                <div className="absolute top-3 right-3">
                  <DefaultButton
                    iconLeft={<RiCloseLine size={20} />}
                    variant="secondary"
                    size="custom"
                    styleClass="p-0.5"
                    onClick={() => {
                      const panel = document.querySelector(
                        "[aria-expanded=true][aria-label=htp_panel]"
                      ) as HTMLElement | null;
                      if (panel) {
                        panel.click();
                      }
                      localStorage.setItem("videoCardOpen", "false");
                    }}
                  />
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div> */}
    </div>


  );
};

export default Landing;


