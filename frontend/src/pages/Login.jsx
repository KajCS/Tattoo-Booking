import React, { useState } from "react";
import { useNavigate } from "react-router"; // <-- Imported for routing
import Navbar from "../components/Navbar";
import ArtistSection from "../components/ArtistSection";
import StudioSection from "../components/StudioSection";
import Footer from "../components/Footer";

export default function Login() {
  // --- Form State ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:8000/api/auth/github/redirect";
  };
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/api/auth/google/redirect";
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ login_id: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("auth_token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("Cannot connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 flex items-center justify-center min-h-[80vh]">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-lg bg-linear-to-br from-purple-600/30 to-transparent blur-md pointer-events-none" />
          <div className="w-full max-w-md bg-slate-900 rounded-lg p-8 border border-purple-600/20 relative z-10">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-linear-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
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

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600/60 hover:border-purple-500/40 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-4 transition"
            >
              <img src="/googel.png" alt="Google" className="w-5 h-5" />
              <span className="text-lg font-semibold">
                Continue with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-[#252035]"></div>
              <span className="text-slate-500 text-sm">
                or continue with email
              </span>
              <div className="flex-1 h-px bg-[#252035]"></div>
            </div>

            {/* Form wrapper added here! */}
            <form onSubmit={handleManualLogin}>
              {/* Error Message Display */}
              {error && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">
                  Username or Email
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"} // <-- Toggles visibility
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                  {/* Eye Icon Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-6.25 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {/* Dynamic SVG change based on state */}
                    {showPassword ? (
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
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
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
                    )}
                  </button>
                </div>
              </div>

              {/* Log In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-semibold py-3 rounded-lg mt-6 transition disabled:opacity-70"
              >
                {isLoading ? "Logging In..." : "Log In"}
              </button>
            </form>

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
