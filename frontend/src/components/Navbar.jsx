import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-purple-900/20 bg-gradient-to-r from-[#0d081b] to-purple-950">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          Yoshi<span className="text-violet-400">Cat</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a
            href="#artists"
            className="hover:text-violet-400 transition-colors"
          >
            Artists
          </a>
          <a
            href="#gallery"
            className="hover:text-violet-400 transition-colors"
          >
            Gallery
          </a>
          <a href="#about" className="hover:text-violet-400 transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="hover:text-violet-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* User Action Profile Button */}
        <div className="flex items-center">
          <button className="p-2 rounded-full text-slate-300 hover:text-violet-400 hover:bg-purple-950/30 transition-all border border-transparent hover:border-purple-900/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
