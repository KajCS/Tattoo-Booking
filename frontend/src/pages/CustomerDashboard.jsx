import React from 'react';
import Navbar from '../components/Navbar';
import ArtistSection from '../components/ArtistSection';
import StudioSection from '../components/StudioSection';
import Footer from '../components/Footer';

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-[#0d081b] text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white">
      <Navbar />
      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <ArtistSection />
        <StudioSection />
      </main>
      <Footer />
    </div>
  );
}