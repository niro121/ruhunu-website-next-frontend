export default function MediaSection() {
    return (
      <section id="MediaSection" className="flex justify-center md:justify-start items-center px-8 md:px-34 mt-18 mb-25">
        <div className="w-full max-w-[530px] aspect-video">
          <iframe
            src="https://www.youtube.com/embed/caDWEkOiPnw?si=3LyczSoVJmy-S1zf"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full shadow-lg"
          ></iframe>
        </div>
      </section>
    );
  }
  