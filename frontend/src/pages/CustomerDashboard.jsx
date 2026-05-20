import React from "react";
import Navbar from "../components/Navbar";
import ArtistSection from "../components/ArtistSection";
import StudioSection from "../components/StudioSection";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-[#0d081b] text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Link
          to="/pages"
          className="inline-flex items-center gap-2 bg-violet-900/30 border border-violet-700/40 text-violet-300 px-5 py-2.5 rounded-xl text-sm hover:bg-violet-800/40 transition-all"
        >
          Artist Dashboard →
        </Link>
        <ArtistSection />
        <StudioSection />
      </main>
      <Footer />
    </div>
  );
}
