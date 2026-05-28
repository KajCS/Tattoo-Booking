import React from "react";

export default function StudioSection() {
  return (
    <section id="about" className="space-y-8">
      {/* Title Group */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
          Our Studio
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          A welcoming, private space designed for your comfort.
        </p>
      </div>

      {/* Two-Column split workspace block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2">
        {/* Left Column Map Frame Container Placeholder */}
        <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl aspect-[16/10] lg:aspect-auto min-h-[300px] shadow-inner flex items-center justify-center text-slate-500 text-sm relative overflow-hidden">
          {/* Subtle matrix-grid overlay design to make empty space premium */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <span className="z-10 tracking-wider uppercase text-xs font-medium text-purple-400/50">
            Google Map Integration Frame
          </span>
        </div>

        {/* Right Column Context Stack */}
        <div className="flex flex-col justify-between gap-4">
          {/* Address Box */}
          <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl p-5 flex items-start space-x-4 shadow-xl">
            <div className="p-3 bg-purple-950/50 rounded-xl text-purple-400 border border-purple-900/30 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold tracking-wide text-slate-300">
                Address
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                347 Papaya St., Sto. Domingo II, Pampanga <br /> Davao City,
                Philippines
              </p>
            </div>
          </div>

          {/* Operational Hours Box */}
          <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl p-5 flex items-start space-x-4 shadow-xl">
            <div className="p-3 bg-purple-950/50 rounded-xl text-purple-400 border border-purple-900/30 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="space-y-1 w-full">
              <h4 className="text-sm font-semibold tracking-wide text-slate-300">
                Hours
              </h4>
              <div className="text-sm text-slate-400 space-y-0.5">
                <div className="flex justify-between max-w-[280px]">
                  <span>Mon – Fri</span>{" "}
                  <span className="text-slate-300">10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[280px]">
                  <span>Saturday</span>{" "}
                  <span className="text-slate-300">11:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[280px]">
                  <span>Sunday</span>{" "}
                  <span className="text-purple-400 font-medium">
                    By appointment only
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call Us & Rating Side-By-Side Row Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl p-5 flex items-center space-x-3 shadow-xl">
              <div className="p-3 bg-purple-950/50 rounded-xl text-purple-400 border border-purple-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-medium text-slate-400">
                  Call Us
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  +63 9383658321
                </span>
              </div>
            </div>

            {/* Rating Box */}
            <div className="bg-[#140e24] border border-purple-950/40 rounded-2xl p-5 flex items-center space-x-3 shadow-xl">
              <div className="p-3 bg-purple-950/50 rounded-xl text-amber-400 border border-purple-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xs font-medium text-slate-400">
                  Rating
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  4.9 / 5{" "}
                  <span className="text-xs font-normal text-slate-500">
                    (300+ reviews)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
