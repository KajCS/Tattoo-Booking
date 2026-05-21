import React from "react";
import Navbar from "../components/Navbar";
import ArtistSection from "../components/ArtistSection";
import StudioSection from "../components/StudioSection";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 flex items-center justify-center min-h-[80vh]">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600/30 to-transparent blur-md pointer-events-none" />
          <div className="w-full max-w-md bg-slate-900 rounded-lg p-8 border border-purple-600/20 relative z-10">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V7a3 3 0 00-3-3H9a3 3 0 00-3 3v2h6z"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold text-center text-white mb-2">
              Sign in to YoshiCat
            </h1>
            <p className="text-center text-slate-400 text-sm mb-6">
              Your Vision, Our Craft
            </p>

            {/* Google Sign In */}
            <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600/60 hover:border-purple-500/40 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-4 transition">
              <img src="/googel.png" alt="Google" className="w-5 h-5" />
              <span className="text-lg font-semibold">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-[#252035]"></div>
              <span className="text-slate-500 text-sm">
                or continue with email
              </span>
              <div className="flex-1 h-px bg-[#252035]"></div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                Username or Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-white text-sm">Password</label>
                
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                />

                <div className="pt-3 pl-1">
                    <a
                  href="#"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  Forgot password?
                </a>
                </div>
                
                <button className="absolute right-3 top-1/3 transform -translate-y-1/2 text-slate-400 hover:text-slate-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  
                </button>
                
              </div>
              
            </div>

            {/* Log In Button */}
            <button className="w-full bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-semibold py-3 rounded-lg mt-6 transition">
              Log In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-slate-400 text-sm mt-4">
              Don't have an account?{" "}
              <a href="#" className="text-violet-400 hover:text-violet-300">
                Create account
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
