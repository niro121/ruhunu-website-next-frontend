import React from "react";
import YtVideoSection from "../common/yt-video-section";

const YtVideoGallery = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/9otHhnCN3o4?si=6fi5P2x54DKPQyUh",
      title: "Memories of Ruhunu Hospital",
    },
    {
      url: "https://www.youtube.com/embed/PWTjSrsywv4?si=PQYeSPy8qFwi0NSq",
      title: "Suranga Lakamal's Feedback",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center md:justify-between px-6 md:px-20 py-12">
      {videos.map((video, index) => (
        <YtVideoSection key={index} videoUrl={video.url} title={video.title} />
      ))}
    </section>
  );
};

export default YtVideoGallery;
