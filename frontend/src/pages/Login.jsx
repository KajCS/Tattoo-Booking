import React from "react";
import { useNavigate } from "react-router";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1616879564267-a336232e3a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/api/auth/google/redirect";
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-slate-950">
      {/* ── Left panel (dark background) ── */}
      <div className="w-full lg:w-[30%] bg-slate-950 shrink-0 flex flex-col px-10 py-10">
        {/* Brand */}
        <span className="text-2xl font-bold text-white tracking-wide">
          Yoshi<span className="text-purple-400">Cat</span>
        </span>

        {/* Subtle glow blob */}
        <div className="flex-1 relative pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl" />
        </div>

        {/* Copyright */}
        <p className="text-slate-700 text-xs text-center">
          © 2026 YoshiCat. All rights reserved.
        </p>
      </div>

      {/* ── Right panel (full-bleed image) ── */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <img
          src={BG_IMAGE}
          alt="Tattoo artist at work"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />

        {/* Hero text */}
        <div className="relative flex flex-col justify-end h-full px-24 pb-14">
          <div className="flex items-center gap-8"></div>
        </div>
      </div>

      {/* ── Floating card — centered on the split line ── */}
      <div className="hidden lg:block absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 z-20 w-[28rem]">
        {/* Card — gradient blends from slate-950 (left panel) into the dark photo overlay (right panel) */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800/60 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl shadow-black/70 px-10 py-12">
          {/* Avatar ring */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-900/60 border-2 border-purple-500/40">
              <span className="text-white text-3xl font-bold select-none">
                $
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Welcome</h2>
            <p className="text-slate-400 text-base mt-2 leading-relaxed">
              Sign in to access your tattoo dashboard and manage bookings.
            </p>
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 text-slate-800 rounded-xl py-4 transition-all duration-200 shadow-md shadow-black/40 font-semibold text-base"
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>

          {/* Terms */}
          <p className="text-slate-600 text-sm text-center mt-6 leading-relaxed">
            By signing in you agree to our{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Mobile fallback — centered card (no split screen) */}
      <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center px-6 bg-slate-950">
        <span className="text-2xl font-bold text-white tracking-wide mb-10">
          Yoshi<span className="text-purple-400">Cat</span>
        </span>
        <div className="w-full max-w-sm bg-slate-800 border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/60 px-8 py-10">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center border-2 border-purple-500/40">
              <span className="text-white text-xl font-bold select-none">
                Y
              </span>
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-white font-bold">Welcome back</h2>
            <p className="text-slate-400 text-sm mt-1 leading-relaxed">
              Sign in to access your tattoo dashboard.
            </p>
          </div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-slate-800 rounded-xl py-3 transition-all duration-200 shadow-md font-medium"
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>
          <p className="text-slate-600 text-xs text-center mt-5 leading-relaxed">
            By signing in you agree to our{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
