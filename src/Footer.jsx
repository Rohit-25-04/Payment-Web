import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">MyWebsite</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>

        {/* Social Icons (example with SVG icons) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.9 1.1A4.52 4.52 0 0016.48 0c-2.63 0-4.76 2.21-4.76 4.94 0 .39.04.77.12 1.13A13 13 0 013 1.67a4.85 4.85 0 00-.64 2.48 4.91 4.91 0 002.15 4.11 4.48 4.48 0 01-2.16-.61v.06c0 2.39 1.7 4.38 3.95 4.83a4.7 4.7 0 01-2.14.08 4.87 4.87 0 004.44 3.4A9 9 0 011 19.54 12.77 12.77 0 007.13 21c8.5 0 13.15-7.14 13.15-13.34 0-.2 0-.42-.02-.63A9.37 9.37 0 0023 3z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.7 0H1.3A1.3 1.3 0 000 1.3v21.4A1.3 1.3 0 001.3 24h11.5v-9.3h-3.1v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1v3.3h-2c-1.6 0-1.9.8-1.9 1.8v2.4h3.8l-.5 3.6h-3.3V24h6.4a1.3 1.3 0 001.3-1.3V1.3A1.3 1.3 0 0022.7 0z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM2 8.25h6v13.5H2v-13.5zm9 0h5.25v1.82h.08c.73-1.39 2.51-2.86 5.18-2.86 5.54 0 6.57 3.66 6.57 8.42v9.12h-6v-8.08c0-1.93-.03-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.26v8.24h-6v-13.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
