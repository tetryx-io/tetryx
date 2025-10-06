import DefaultButton from "@/components/Shared/Button/DefaultButton";
import Link from "next/link";
import React from "react";
import {
  RiArrowDownLine,
  RiLinkM,
  RiHashtag,
  RiLinkedinBoxFill,
  RiTwitterXLine,
  RiFacebookBoxFill,
  RiInstagramLine,
  RiGithubFill,
  RiYoutubeFill,
  RiMediumLine,
  RiTiktokFill,
  RiPinterestFill,
  RiRedditFill,
  RiSnapchatFill,
  RiTumblrFill,
  RiWhatsappFill,
  RiTelegramFill,
  RiTwitchFill,
  RiVimeoFill,
  RiFlickrFill,
  RiSoundcloudFill,
  RiSpotifyFill,
  RiSlackFill,
  RiDiscordFill,
  RiProductHuntFill,
  RiBehanceFill,
  RiDribbbleFill,
  RiStackOverflowFill,
} from "react-icons/ri";
import { FaAngellist } from "react-icons/fa6";

const socialLinks = [
  { type: "WEBSITE", icon: <RiLinkM size={18} color="#525252" /> },
  { type: "LINKEDIN", icon: <RiLinkedinBoxFill size={18} color="#525252" /> },
  { type: "TWITTER", icon: <RiTwitterXLine size={15} color="#525252" /> },
  { type: "FACEBOOK", icon: <RiFacebookBoxFill size={18} color="#525252" /> },
  { type: "ANGEL_CO", icon: <FaAngellist size={18} color="#525252" /> },
  { type: "INSTAGRAM", icon: <RiInstagramLine size={18} color="#525252" /> },
  { type: "GITHUB", icon: <RiGithubFill size={18} color="#525252" /> },
  { type: "YOUTUBE", icon: <RiYoutubeFill size={18} color="#525252" /> },
  { type: "MEDIUM", icon: <RiMediumLine size={18} color="#525252" /> },
  { type: "TIKTOK", icon: <RiTiktokFill size={18} color="#525252" /> },
  { type: "PINTEREST", icon: <RiPinterestFill size={18} color="#525252" /> },
  { type: "REDDIT", icon: <RiRedditFill size={18} color="#525252" /> },
  { type: "SNAPCHAT", icon: <RiSnapchatFill size={18} color="#525252" /> },
  { type: "TUMBLR", icon: <RiTumblrFill size={18} color="#525252" /> },
  { type: "WHATSAPP", icon: <RiWhatsappFill size={18} color="#525252" /> },
  { type: "TELEGRAM", icon: <RiTelegramFill size={18} color="#525252" /> },
  { type: "TWITCH", icon: <RiTwitchFill size={18} color="#525252" /> },
  { type: "VIMEO", icon: <RiVimeoFill size={18} color="#525252" /> },
  { type: "FLICKR", icon: <RiFlickrFill size={18} color="#525252" /> },
  { type: "SOUNDCLOUD", icon: <RiSoundcloudFill size={18} color="#525252" /> },
  { type: "SPOTIFY", icon: <RiSpotifyFill size={18} color="#525252" /> },
  { type: "SLACK", icon: <RiSlackFill size={18} color="#525252" /> },
  { type: "DISCORD", icon: <RiDiscordFill size={18} color="#525252" /> },
  {
    type: "PRODUCT_HUNT",
    icon: <RiProductHuntFill size={18} color="#525252" />,
  },
  { type: "BEHANCE", icon: <RiBehanceFill size={18} color="#525252" /> },
  { type: "DRIBBBLE", icon: <RiDribbbleFill size={18} color="#525252" /> },
  {
    type: "STACK_OVERFLOW",
    icon: <RiStackOverflowFill size={18} color="#525252" />,
  },
];

const cleanURL = (url) => {
  if (!url) return "";
  return url.replace(/^(https?:\/\/)?(www\.)?/, "");
};

const SocialLink = ({ url, icon }) => (
  <Link href={url} target="_blank">
    <div className="w-[32px] h-[32px] border border-gray-300 rounded-md flex items-center justify-center">
      {icon}
    </div>
  </Link>
);

const OrgDetails = React.memo(({ results }: any) => {
  const renderSocialLinks = () => {
    const renderedLinks = socialLinks.map((linkType) => {
      const result = results?.sites?.find(
        (result) => result.type === linkType.type,
      );
      if (result) {
        return (
          <SocialLink key={result.id} url={result.url} icon={linkType.icon} />
        );
      }
      return null;
    });

    return <div className="flex flex-wrap gap-3 mt-2">{renderedLinks}</div>;
  };
  const websiteObjects = results?.sites.filter(
    (item) => item.type === "WEBSITE",
  );

  return (
    <div className="detail-content relative max-h-[360px] sm:max-h-fit rounded-md overflow-auto no-scrollbar sm:col-span-4 lg:col-span-3">
      <div className="w-full bg-white border border-gray-200 rounded-md p-4">
        <div className="relative h-[200px]">
          <Link href={websiteObjects[0]?.url} target="_blank">
            <div className="group h-full">
              <img
                width="100%"
                className="h-full object-cover object-top rounded-md"
                src={
                  results?.banner_img
                    ? results?.banner_img
                    : "/images/BannerImage.png"
                }
                alt=""
              />
              <div className="absolute bottom-2 left-2 px-1.5 py-0.5 gap-0.5 flex items-center text-sm font-semibold bg-[#484848]/80 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <RiLinkM size={16} />
                <div className="max-w-28 truncate">
                  {websiteObjects[0]?.domain}
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="font-semibold leading-[13.2px] text-[11px] text-[#A3A3A3] mt-3">
          SOCIAL LINKS
        </div>
        {renderSocialLinks()}
        {results?.addresses?.length && (
          <div className="locations mt-5">
            <p className="font-semibold leading-[13.2px] mb-[2px] text-[11px] text-[#A3A3A3]">
              LOCATIONS
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
              {results?.addresses[0]?.text}
            </p>
          </div>
        )}

        {results?.phone && (
          <div className="number mt-5">
            <p className="font-semibold leading-[13.2px] text-[11px] mb-[2px] text-[#A3A3A3]">
              PHONE NUMBER
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#3B82F6]">
              {results?.phone}
            </p>
          </div>
        )}

        <hr className="mt-3" />
        {results?.founded_year && (
          <div className="number mt-5">
            <p className="font-semibold leading-[13.2px] text-[11px] mb-[2px] text-[#A3A3A3]">
              YEAR FOUNDED
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
              {results?.founded_year}
            </p>
          </div>
        )}

        {results?.estimated_num_employees && (
          <div className="number mt-5">
            <p className="font-semibold leading-[13.2px] text-[11px] mb-[2px] text-[#A3A3A3]">
              HEAD COUNT
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
              {results?.estimated_num_employees}
            </p>
          </div>
        )}

        {results?.total_funding_printed && (
          <div className="number mt-5">
            <p className="font-semibold leading-[13.2px] text-[11px] mb-[2px] text-[#A3A3A3]">
              TOTAL FUNDING
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
              {results?.total_funding_printed} {results?.latest_funding_stage}
            </p>
          </div>
        )}

        {results?.annual_revenue_printed && (
          <div className="number mt-5">
            <p className="font-semibold leading-[13.2px] text-[11px] mb-[2px] text-[#A3A3A3]">
              ANNUAL REVENUE
            </p>
            <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
              {results?.annual_revenue_printed}
            </p>
          </div>
        )}

        {/* <div className="number mt-5">
          <p className="font-semibold leading-[13.2px] text-[11px] text-[#A3A3A3]">
            ACQUISITIONS
          </p>
          <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
            Specto
          </p>
        </div>
        <div className="number mt-5">
          <p className="font-semibold leading-[13.2px] text-[11px] text-[#A3A3A3]">
            TYPE
          </p>
          <p className="font-medium leading-[22.4px] text-[14px] text-[#404040]">
            Private
          </p>
        </div> */}
      </div>

      <div className="sm:hidden sticky bottom-0 py-2 w-full">
        {/* Change to 'Expand to view more' */}
        <DefaultButton
          variant="ghost"
          label="Scroll"
          iconRight={<RiArrowDownLine size={16} />}
          styleClass="border text-sm font-medium bg-neutral-100 shadow-lg mx-auto !rounded-full"
        />
      </div>
    </div>
  );
});

export default OrgDetails;
