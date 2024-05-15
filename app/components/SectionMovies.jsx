import React from "react";
import cover from "@/public/assets/poster.jpg";
import { FaStar } from "react-icons/fa";

function SectionMovies() {
  return (
    <div className="w-full px-3 py-5 mt-10 sm:px-10">
      <h1 className="text-4xl font-extrabold text-center text-white sm:text-left ">Just Realease</h1>
      <div className="mt-10">
      <div
          style={{
            backgroundImage: `url(${cover.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          className="card sm:m-0 m-auto max-w-[280px] h-[350px] rounded-lg relative cursor-pointer">
          <div className="absolute inset-0 w-full h-full rounded-md card bg-gradient-to-b from-transparent via-transparent/30 to-black"></div>
          <div className="absolute bottom-0 z-10 px-3 py-5 font-semibold text-white">
            <h1 className="text-xl">Enola Holmes</h1>
            <div className="flex items-center gap-2 mt-2">
              <FaStar className="text-sm text-yellow-300 sm:text-xl" />
              <p className="font-light">Action | Romance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionMovies;
