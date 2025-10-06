import PromptBox from "./PromptBox";

const WelcomePage = () => {
    return (
        <div className="mt-16 md:mt-20 mx-4 md:mx-10">
            <div className="mx-auto max-w-[640px] w-full sm:w-8/12 xl:w-5/12 text-center">
                <div className="text-4xl lg:text-5xl font-epilogue font-semibold lg:font-medium !leading-[140%]">Introducing the <span className="text-gradient-purple-1">heartbeat</span> of your sales team.</div>
                <div className="mx-auto w-11/12 text-neutral-600 text-sm md:text-base mt-6">Atrium simplifies lead research for your sales team. Simply type a prompt to identify target prospects and access up to 200 data points per lead. Say goodbye to outdated methods and effortlessly uncover valuable insights for smarter sales strategies.</div>
            </div>
            
            <div className="mt-16 mx-auto max-w-[640px]">
                <div className="mx-auto md:w-11/12">
                    <PromptBox/>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;