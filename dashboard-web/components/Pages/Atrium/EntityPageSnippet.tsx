import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { RiAddLine, RiSparkling2Fill } from "react-icons/ri";

const EntityPageSnippet = () => {
    return (
        <div className="flex flex-col gap-4 bg-white border entity-card-shadow w-full max-w-80 rounded-md p-4">
            <div className="flex gap-3">
                <img src="/images/SantryLogo.svg" alt="" className="w-10 h-10 rounded" />

                <div className="flex flex-col truncate">
                    <div className="font-semibold mb-0.5">Sentry.io</div>
                    <div className="text-sm text-neutral-500 truncate">Self-hosted and cloud-based application monitoring</div>
                </div>
            </div>

            <div className="text-sm text-neutral-700">Sentry develops an application monitoring platform that optimizes performance and fixes crashes in real time.</div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 px-2 py-1.5 h-fit text-violet-500 bg-violet-50 text-xs font-medium rounded-md"><RiSparkling2Fill size={12}/>AI generated summary</div>
                <DefaultButton variant="default" size="custom" iconLeft={<RiAddLine size={20}/>} styleClass="bg-neutral-100 p-1.5"/>
            </div>
        </div>
    )
}

export default EntityPageSnippet;