const DummyAuthBlockText = ({ setShowEarlyAccess }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute flex flex-col items-center justify-center text-center z-20 w-full mt-[80px] p-4">
          <div className="flex justify-center items-center mb-6">
            <img src="/images/LockIcon.svg" alt="" width={40} />
          </div>
          <p className="text-lg font-semibold">Sign up to view response</p>
          <p className="max-w-[308px] text-sm font-medium my-4 text-neutral-600">
            Prompt results are only visible to registered users. Each new user
            has{" "}
            <span className="text-orange-500 font-bold">10 free prompts</span>
            <br />
            No credit card required.
          </p>
          <div className="flex items-center justify-center text-center mt-4">
            <div
              onClick={() => setShowEarlyAccess(true)}
              className="cursor-pointer px-4 py-2 bg-black text-white rounded-md font-semibold flex items-center"
            >
              <img
                src="/atrium/svg/lightning-icon.svg"
                alt="Atrium Logo"
                className="mr-2"
              />
              Get Access
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit">
        <div
          className="protected-content h-[480px] overflow-hidden"
          style={{ userSelect: "none" }}
        >
          <div className="blur-layer"></div>
          <div className="p-2">
            Here are 20 startups that are optimizing their compute power and
            likely to buy GPUs soon:
            <ul>
              <li>
                Resemble AI - a speech-generating startup that is content with
                taking a tenth of a second longer to process a customer request
                on an older chip if it means spending a tenth of what higher-end
                options would command.
              </li>
              <li>
                Sentry.io - an AI image generation startup that is spending more
                than desired on GPUs during peak times due to supply shortages.
              </li>
              <li>
                Astria - an AI image generation startup that is spending more
                than desired on GPUs during peak times due to supply shortages.
              </li>
              <li>
                Stability AI - the company behind Stable Diffusion, an
                open-source text-to-image AI model.
              </li>
              <li>
                Descript - an AI-powered audio and video editing platform.
              </li>
              <li>
                Runway - a generative AI platform for creating visual content.
              </li>
              <li>
                OpenAI - Midjourney is a popular AI image generation service by
                Open AI (creators of ChatGPT) looking to expand its offerings to
                more markets.
              </li>
              <li>
                OpenAI - Midjourney is a popular AI image generation service by
                Open AI (creators of ChatGPT) looking to expand its offerings to
                more markets.
              </li>
              <li>
                OpenAI - Midjourney is a popular AI image generation service by
                Open AI (creators of ChatGPT) looking to expand
              </li>
              <li>
                OpenAI - Midjourney is a popular AI image generation service by
                Open AI (creators of ChatGPT) looking to expand its offerings to
                more markets.
              </li>
              <li>
                OpenAI - Midjourney is a popular AI image generation service by
                Open AI (creators of ChatGPT)
              </li>
              <li>OpenAI - Midjourney is a popular AI image generation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyAuthBlockText;
