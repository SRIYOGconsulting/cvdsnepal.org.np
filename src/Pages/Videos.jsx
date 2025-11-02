import React from "react";

const videos = [
  {
    title: "Nepal Startup Meet",
    embedUrl: "https://www.youtube.com/embed/5dKqpqdZuCs",
  },
  {
    title: "Nepal Startup Meet 2019: Sriyog.com",
    embedUrl: "https://www.youtube.com/embed/AezAW5Q-mC4",
  },
  {
    title: "SRIYOG Nepal Startup Meet",
    embedUrl: "https://www.youtube.com/embed/OTUzeBR1Ka4",
  },
];

function VideoPage() {
  const featuredVideo = "https://www.youtube.com/embed/N071A7j5TVI";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Featured Video Section */}
      <section className="max-w-6xl mx-auto bg-[#1F2B6C] rounded-md mt-16 md:mt-20 shadow-lg px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
            Featured CVDS Nepal Video
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={featuredVideo}
                title="Featured CVDS Nepal Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 md:px-8">
        <h2 className="text-[#1F2B6C] text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10">
          CVDS Nepal Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-t-md"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-700 text-sm sm:text-base mt-3 px-2 pb-4 font-medium">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideoPage;
