import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com" className="hover:text-primary transition-colors duration-300">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com" className="hover:text-primary transition-colors duration-300">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com" className="hover:text-primary transition-colors duration-300">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://open.spotify.com" className="hover:text-primary transition-colors duration-300">
            <FaSpotify className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" className="hover:text-primary transition-colors duration-300">
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
        
        {/* Footer Text */}
        <div className="text-sm">
          © 2024 0x3EF8. <a href="#" className="text-primary hover:underline">Terms</a> | <a href="#" className="text-primary hover:underline">Privacy</a> | <a href="#" className="text-primary hover:underline">Manage Cookies</a> | <a href="#" className="text-primary hover:underline">Do not sell my personal information</a>
        </div>
      </div>
    </footer>
  );
}