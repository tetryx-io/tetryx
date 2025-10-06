"use client"
import GoogleSlideEmbed from "@/components/Shared/GoogleSlideEmbed";
import React, { useEffect, useState } from "react";

const Skydeck = () => {
  const [slideUrl, setSlideUrl] = useState('');

  useEffect(() => {
    const onMobile = window && window.matchMedia("(max-width: 480px)").matches;
    const mobileUrl = "https://docs.google.com/document/d/1fAE48GNyFlaPWnGyHqAHxgHwDjPHzQn0HWhPUCtaCLg/" // Mobile
    const defaultUrl = "https://docs.google.com/presentation/d/1LnaXTl7qdfac44DBqe1i9G3k0Dp6-JW9rLfpM9ch7d4/edit#slide=id.p"

    setSlideUrl(onMobile ? mobileUrl : defaultUrl)
  })
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div style={{ width: '100%', height: '100vh' }}>
        <GoogleSlideEmbed
          src={slideUrl}
          width="100%"
          height="100%"
          loop={false}
          slideDuration={7}
          showControls={true}
          position={0}
        />
      </div>
    </div>
  );
};

export default Skydeck;
