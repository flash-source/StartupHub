import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-10">
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold mb-2">Startup Galaxy</h3>
        <p>Connecting innovators and enthusiasts worldwide.</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Quick Links</h3>
        <ul>
          <li><a href="#showcase" className="hover:underline">Showcase</a></li>
          <li><a href="#add" className="hover:underline">Add Startup</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Contact</h3>
        <div className="flex space-x-4 text-2xl">
          <a href="mailto:your.email@gmail.com" className="hover:text-red-400"><FaEnvelope /></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 text-center py-4">© 2025 Startup Galaxy. All rights reserved.</div>
  </footer>
);

export default Footer;
