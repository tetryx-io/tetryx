"use client"
import AnimatedHeader from "@/components/Common/AnimatedTyping/HeaderText";
import { DefaultLayout } from "@/components/Layouts"
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Link from "next/link"
import { RiHome3Fill } from "react-icons/ri";


const OngoingMaintenance = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-5">
            <div className="lost-404 relative row-span-4">
                <div className="absolute top-6 left-6 md:top-10 md:left-10 transition-all">
                    <Link href={"/"} className="absolute w-full h-full z-10"></Link>
                    <object data="/reframe-full.svg" aria-labelledby="logo" type="image/svg+xml" className="flex justify-start scale-logo dynamic-logo"></object>
                </div>
                <div className="flex flex-col items-center justify-center h-full px-6 md:px-8 lg:px-14 xl:px-28 w-full max-w-[1920px] md:gap-7 xl:gap-10 mx-auto">
                    <div className="flex flex-col gap-3 items-center w-full sm:w-8/12 md:w-6/12 xl:w-4/12 mb-4">
                        <div className="flex text-4xl gap-1 leading-relaxed tracking-tighter font-bold text-center">Under maintenance</div>
                        <div className="text-neutral-600 dark:text-neutral-300 text-center">We are enhancing our platform to provide you with the best experience. Please bear with us as we work to get the systems back up and running smoothly. Thank you for your patience.</div>
                    </div>

                    <Link href="mailto:team@reframe.is?subject=Rye AI Status &body=Notify me when the system is back up.">
                        <DefaultButton 
                            label={"Subscribe for updates"}
                            iconRight={<RiHome3Fill size={20}/>}
                            variant="default"
                            size="medium"
                        />
                    </Link>
                </div>
            </div>
            <div className="relative w-full row-span-1">
                <img src="/images/footer-landscape.png" className="footer-landscape" width={1440} height={180} alt="Chip Silhouette" />
            </div>
        </div>
    )
}

export default OngoingMaintenance;