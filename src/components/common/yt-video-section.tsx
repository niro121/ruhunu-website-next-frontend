import React from "react";

interface YtVideoSectionProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

const YtVideoSection: React.FC<YtVideoSectionProps> = ({
  videoUrl,
  title = "YouTube Video Section",
  className = "",
}) => {
  return (
    <div
      className={`w-full sm:max-w-[590px] aspect-video mx-auto px-2 sm:px-0 ${className}`}
    >
      <div className="relative w-full h-0 pb-[56%] overflow-hidden ">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default YtVideoSection;
