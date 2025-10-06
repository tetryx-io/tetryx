import React from "react";

interface GoogleSlideEmbedProps {
  src: string;
  width: string;
  height: string;
  loop?: boolean; //Loops the slideshow after the presentation is finished
  slideDuration?: number; //The duration for each slide to show on screen
  showControls?: boolean; //Toggles the slideshow controls at the bottom of the screen
  position?: number; //What slide to start the slideshow on
}

const GoogleSlideEmbed: React.FC<GoogleSlideEmbedProps> = ({
  src,
  width,
  height,
  loop = false,
  slideDuration = 1,
  showControls = true,
  position = 0,
}) => {
  return (
    <iframe
      title="Google Slide Embed"
      src={src}
      width={width}
      height={height}
      allow="autoplay"
      allowFullScreen
    ></iframe>
  );
};

export default GoogleSlideEmbed;
