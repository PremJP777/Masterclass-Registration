import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding / About section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Protrainy</h3>
            <p className="text-gray-400">
              We create digital experiences that empower businesses and delight users. Discover the difference with our innovative solutions.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.37 8.41 8.41 0 01-2.7 1.03 4.22 4.22 0 00-7.23 3.85A12.03 12.03 0 013 4.95a4.22 4.22 0 001.31 5.63 4.2 4.2 0 01-1.91-.53v.06a4.22 4.22 0 003.38 4.14 4.24 4.24 0 01-1.9.07 4.22 4.22 0 003.94 2.94A8.47 8.47 0 012 19.54a11.93 11.93 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0024 5.64a8.4 8.4 0 01-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.44-9.96 9.96 0 4.41 2.87 8.14 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.61-3.37-1.33-3.37-1.33-.46-1.18-1.12-1.5-1.12-1.5-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.84.09-.64.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.83c.85.004 1.71.11 2.51.33 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.69-4.55 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10.02 10.02 0 0022 12c0-5.52-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.633 12.445c-.063-.419-.248-.792-.54-1.095-.29-.302-.696-.53-1.144-.67A4.142 4.142 0 0016.125 10c-1.691 0-3.215.97-3.91 2.374-.07.14-.163.25-.274.33-.111.08-.241.13-.379.15-.138.02-.278.03-.421.03H8.578c-.04 0-.08-.007-.117-.02-.036-.014-.07-.033-.1-.057-.03-.023-.054-.055-.074-.09-.02-.034-.033-.072-.033-.11V8.41c0-.04.007-.08.02-.118.014-.038.033-.07.057-.101.024-.03.056-.054.09-.075.034-.02.072-.033.117-.033h2.03c1.58 0 3.01-.96 3.7-2.374.063-.118.106-.244.106-.38 0-.136-.043-.262-.12-.38-.077-.116-.187-.2-.318-.245-.146-.05-.306-.073-.468-.073H8.904c-1.788 0-3.435 1.088-4.23 2.79C3.64 7.976 3.249 8.976 3.249 10v4c0 1.025.392 2.024 1.625 2.97.795.83 1.88 1.615 3.148 1.615h2.96c.139 0 .278-.007.416-.02a4.802 4.802 0 004.593-2.77c.2-.36.24-.788.12-1.17zM21 6h-2.016a1.02 1.02 0 00-1.02 1.02 1.02 1.02 0 001.02 1.02H21V6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {currentYear} Protrainy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
