"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function UnderConstructionPage() {
  return (
    <div className="h-screen w-fit overflow-x-hidden overflow-y-hidden  from-sky-100 to-slate-50 flex items-center justify-center px-32 ">

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full min-w-0 overflow-x-hidden ">

        {/* Animation */}
        <div className="w-full md:w-1/2 flex justify-center min-w-0">
          <div className="w-[240px] sm:w-[280px] md:w-[400px] max-w-full">
            <Player
              src="https://assets1.lottiefiles.com/packages/lf20_qcrbuch7.json"
              background="transparent"
              speed={1}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left min-w-0">

          <h1 className="text-3xl md:text-4xl font-bold text-teal-700 break-words">
            Medinexus Healthcare
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed break-words">
            A secure healthcare platform is being built to improve patient care,
            digital records, and clinical workflows.
          </p>

          {/* Card */}
          <div className="mt-6 border-l-4 border-sky-500 bg-white shadow-lg rounded-xl p-5 max-w-full">
            <p className="font-semibold text-gray-900">
              🚧 System Under Construction
            </p>
            <p className="mt-2 text-gray-600 text-sm md:text-base break-words">
              Core healthcare modules are currently under development. We are
              working on delivering a safe, fast, and reliable medical experience.
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500 break-words">
            Thank you for your patience. We’ll be live soon.
          </p>
        </div>

      </div>
    </div>
  );
}