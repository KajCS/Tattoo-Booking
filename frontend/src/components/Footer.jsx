import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-purple-950/40 bg-[#0a0514] text-slate-400 text-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-2">
        
        {/* Core Link Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1 - Brand Info */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-white tracking-tight">
              Yoshi<span className="text-violet-400">Cat</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Premium tattoo studio connecting you with world-class artists. Your vision, their craft.
            </p>
            {/* Icons row wrapper */}
            <div className="flex space-x-4 pt-2 text-slate-500">
              <a href="#instagram" className="hover:text-violet-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#twitter" className="hover:text-violet-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#email" className="hover:text-violet-400 transition-colors">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Explore Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">Explore</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#artists" className="hover:text-violet-400 transition-colors">Artists</a></li>
              <li><a href="#gallery" className="hover:text-violet-400 transition-colors">Gallery</a></li>
              <li><a href="#styles" className="hover:text-violet-400 transition-colors">Styles</a></li>
              <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">Support</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#book" className="hover:text-violet-400 transition-colors">Book Appointment</a></li>
              <li><a href="#faq" className="hover:text-violet-400 transition-colors">FAQ</a></li>
              <li><a href="#aftercare" className="hover:text-violet-400 transition-colors">Aftercare Guide</a></li>
              <li><a href="#contact" className="hover:text-violet-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200">Visit Us</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start space-x-2.5">
                <span className="text-purple-400 pt-0.5">📍</span>
                <span>123 Ink Ave, Studio City, CA 90210</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-purple-400">📞</span>
                <span>(555) 987-6543</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="text-purple-400">✉️</span>
                <span className="truncate">hello@yoshicat.ink</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}