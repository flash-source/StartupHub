import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Startup Buddy</div>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="#showcase" className="hover:text-blue-600">Showcase</a></li>
        <li><a href="#add" className="hover:text-blue-600">Add Startup</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
