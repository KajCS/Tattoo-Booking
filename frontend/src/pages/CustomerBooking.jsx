import React from "react";
import Navbar from "../components/Navbar";

export default function CustomerBooking() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />

      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Artist Card */}
          <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            {/* Artist Image */}
            <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <img
                src="/placeholder-artist.jpg"
                alt="Artist"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Artist Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                Marcus Chen
              </h2>
              <p className="text-violet-400 text-sm mb-4">
                Traditional • Japanese • Neo Traditional
              </p>

              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-violet-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                  About
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Marcus has been crafting bold, story-driven tattoos for over
                  15 years. Trained in Tokyo and now based in the AR District,
                  he blends Eastern tradition with modern techniques.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="mb-6">
                <h3 className="text-violet-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                  Operating Hours
                </h3>
                <div className="text-slate-300 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="text-white">10 AM - 7 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">11 AM - 5 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contacts & Socials */}
              <div>
                <h3 className="text-violet-400 font-semibold text-sm mb-3 uppercase tracking-wider">
                  Contacts & Socials
                </h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    @marcuschen.ink
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.88l4.12-5.65h-2.88l-1.37 2.11z" />
                    </svg>
                    MarcusChenTattoo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    marcus@yoshicat.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-300 hover:text-violet-400 text-sm transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    (555) 201-4433
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Schedule */}
        <div className="w-full lg:w-2/3">
          {/* Schedule Component Placeholder */}
          <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-slate-400 text-lg mb-4">
                Schedule Component Placeholder
              </p>
              <p className="text-slate-500 text-sm">
                {/* Schedule component will be rendered here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
