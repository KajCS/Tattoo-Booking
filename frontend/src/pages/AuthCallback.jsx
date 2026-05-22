import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AuthCallback() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("auth_token", token);

      navigate("/dashboard");
    } else {
      setError("Authentication failed. No access token provided by server.");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0d081b] text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-sm w-full text-center space-y-6">
        {!error ? (
          <>
            {/* Spinning Neon Loader */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
              <svg
                className="animate-spin h-10 w-10 text-violet-400 z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Securing your connection...
              </h2>
              <p className="text-sm text-slate-400">
                Syncing your profile with YoshiCat
              </p>
            </div>
          </>
        ) : (
          /* Sleek Error Fallback Card if token extraction fails */
          <div className="bg-red-950/20 border border-red-900/40 p-6 rounded-2xl space-y-4">
            <span className="text-3xl">⚠️</span>
            <h2 className="text-lg font-semibold text-red-400">
              Authentication Error
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center px-4 py-2 text-xs font-medium bg-purple-950/60 text-purple-300 border border-purple-900/30 rounded-xl hover:bg-purple-900/50 transition-colors"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
