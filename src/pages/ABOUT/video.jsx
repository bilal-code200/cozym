import React from "react";

export default function Video() {
  return (
    <div className="relative pb-8 sm:pb-12 lg:pb-16 -mt-10 px-4 sm:px-8 md:px-16 lg:px-[240px]">
      <div className="relative mx-auto max-w-[1000px]">
        <iframe
          src="https://www.youtube.com/embed/wQM7qP29NSY"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-screen rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
