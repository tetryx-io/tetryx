import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Link from "next/link";
import Image from "next/image";
import Placeholder from '../../../public/images/placeholder.png'
import BgPattern from '../../../public/images/hero-pattern.png'
import AgentDemoImg from '../../../public/images/agents.png'
import { TbCircleCheck } from "react-icons/tb";
import { FaChrome, FaGoogle, FaHubspot, FaLinkedin, FaSalesforce } from "react-icons/fa";

export const partnerLogos: string[] = [
    "/partners/roger.svg",
    "/partners/bloomfilter.svg",
    "/partners/empowerly.svg",
    "/partners/cyder.svg",
    // "/partners/nnext.svg",
];

const Industry = ( { industry }) => {

    return (
        <div className="relative w-full flex flex-col gap-20 mx-auto px-2 sm:px-6 md:px-8 lg:px-14 xl:px-28 dark:text-neutral-200 mb-20">
            <div className="-z-[10] top-[-64px] h-screen flex justify-center absolute opacity-60 inset-0"> {/* Pattern Bg (absolute) */}
                <Image
                    src={BgPattern}
                    alt="background image"
                    className="mx-auto h-fit max-h-[520px] w-10/12 bg-cover"
                />
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="flex flex-col gap-10 w-10/12"> {/* Left Grid */}
                    <div className="flex flex-col gap-5">
                        <div className="heading text-3xl !leading-snug md:text-4xl md:!leading-relaxed font-bold">
                            <span className="text-green-600">{industry?.hero?.heading_styled}</span> {industry?.hero?.heading_unstyled}
                        </div>
                        <p>{industry?.hero?.text}</p>
                    </div>
                    <div className="flex gap-5">
                        <Link
                            href="/auth/signup"
                            className=" flex rounded flex-row  max-w-md bg-opacity-10"
                            rel="noopener noreferrer">

                            <DefaultButton
                            label="Get Early Access"
                            variant="primary"
                            size="medium"
                            styleClass="rounded font-bold"
                            />
                        </Link> {/*Main CTA*/}
                        <Link
                            href="/docs"
                            className=" flex rounded flex-row  max-w-md bg-opacity-10"
                            rel="noopener noreferrer">

                            <DefaultButton
                            label="Read more"
                            variant="default"
                            size="medium"
                            iconRight=""
                            styleClass="rounded border-black font-bold"
                            />
                        </Link> {/*Secondary CTA - Read More*/}
                    </div>
                </div>
                <div> {/* Right Grid */}
                    <Image
                        src={industry?.hero?.image_url || "/images/placeholder.png"}
                        alt="Reframe AI Demo Picture"
                        className="mx-auto w-full md:w-4/5 min-w-[200px] bg-cover"
                        width={499}
                        height={396}
                    />
                </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col gap-10 md:items-center">
                <div className="text-neutral-600 dark:text-neutral-200 text-center w-84">
                    Trusted by innovative B2B companies.
                    <span className="hidden md:block">Powering data workflows with tireless AI agents</span>
                </div>
                <div className="flex flex-row flex-wrap gap-8 items-center justify-evenly w-full md:w-4/5">
                    {partnerLogos.map((src) => (
                        
                        <Image
                            key={src}
                            src={src}
                            alt="Company Logo" // Update to match company name
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: 'auto', height: '80%' }}
                            className="lg:w-40 md:w-[7.75rem] flex flex-none hover:opacity-60 justify-center"
                        />
                    ))}
                </div>
            </div>

            {/* Agents Showcase */}
            <div className="flex flex-col gap-12 p-4 items-center">
                <div className="text-center w-full md:w-10/12 lg:w-7/12 mx-auto">
                    <div className="flex flex-col gap-1">
                        <div className="text-xs font-bold text-green-600 uppercase">{industry?.demo?.kicker}</div>
                        <div className="heading text-2xl md:text-3xl leading-normal font-bold">
                            {industry?.demo?.heading}
                        </div>
                    </div>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-200">{industry?.demo?.text}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="mx-auto w-full md:w-4/5"> {/* Left Grid */}
                        <div className="grid grid-cols-2 items-center h-full gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#16A34A1B] rounded p-2.5 w-fit"><FaLinkedin className="text-xl text-green-600"/></div>
                                <p className="text-neutral-600 dark:text-neutral-200">Fetch rich data on companies and individuals from Linkedin</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#16A34A1B] rounded p-2.5 w-fit"><FaGoogle className="text-xl text-green-600"/></div>
                                <p className="text-neutral-600 dark:text-neutral-200">Extract accurate information on leads from Google directly</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#16A34A1B] rounded p-2.5 w-fit"><FaHubspot className="text-xl text-green-600"/></div>
                                <p className="text-neutral-600 dark:text-neutral-200">Get data for marketing insights on exciting prospects</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-[#16A34A1B] rounded p-2.5 w-fit"><FaSalesforce className="text-xl text-green-600"/></div>
                                <p className="text-neutral-600 dark:text-neutral-200">Effortlessly source information on thousands of companies</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <Image
                            src={AgentDemoImg}
                            alt="Reframe AI Agents Demo Picture"
                            className="mx-auto w-full md:w-4/5 min-w-[200px] bg-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Benefits-1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="mx-auto w-full md:w-4/5"> {/* Left Grid */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <div className="text-xs font-bold text-green-600 uppercase">{industry?.features_1?.kicker}</div>
                            <div className="heading text-2xl md:text-3xl !leading-slug font-bold">
                                {industry?.features_1?.heading}
                            </div>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-200">{industry?.features_1?.text}</p>
                        <ul className="flex flex-col gap-3">
                            {
                                industry?.features_1?.features_list.map((item, index ) => {
                                    return  <li key={index} className="flex gap-5 items-center text-neutral-600 dark:text-neutral-200">
                                    <TbCircleCheck className="w-6 text-green-600"/>
                                    {item}
                                </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="order-first"> {/* Right Grid */}
                    <Image
                        src={Placeholder}
                        alt="Reframe AI Demo Picture"
                        className="mx-auto w-full md:w-4/5 min-w-[200px] bg-cover"
                    />
                </div>
            </div>
            
            {/* Benefits-2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="mx-auto w-full md:w-4/5"> {/* Left Grid */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <div className="text-xs font-bold text-green-600 uppercase">{industry?.features_2?.kicker}</div>
                            <div className="heading text-2xl md:text-3xl !leading-slug font-bold">
                                {industry?.features_2?.heading}
                            </div>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-200">{industry?.features_2?.text}</p>
                    </div>
                </div>
                <div className=""> {/* Right Grid */}
                    <Image
                        src={Placeholder}
                        alt="Reframe AI Demo Picture"
                        className="mx-auto w-full md:w-4/5 min-w-[200px] bg-cover"
                    />
                </div>
            </div>

            <div className="p-4 flex flex-col items-center">
                <div className="flex flex-col items-center gap-8 w-full md:w-4/5">
                    <div>
                        <div className="heading font-bold text-2xl md:text-3xl text-center">Ready to optimize your data workflow?</div>
                        <p className="mt-4 text-center text-neutral-600 dark:text-neutral-200">Discover the modern way of working with data, gain rich insights for enhanced customer value through intelligent agents and automated processes.</p>
                    </div>
                    <Link
                        href="/auth/signup"
                        className=" flex rounded flex-row  max-w-md bg-opacity-10"
                        rel="noopener noreferrer">

                        <DefaultButton
                        label="Get Early Access"
                        variant="primary"
                        size="medium"
                        styleClass="rounded font-bold"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Industry;