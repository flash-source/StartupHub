import React from "react";

const StartupCard = ({ startup }) => (
  <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
    <img
      src={startup.logo}
      alt={startup.name}
      loading="lazy"
      className="w-20 h-20 object-cover rounded-full mb-4 mx-auto hover:scale-105 transition-transform duration-300"
    />
    <h2 className="text-xl font-semibold text-center mb-1">{startup.name}</h2>
    <p className="text-gray-500 text-sm text-center mb-1">{startup.industry}</p>
    <p className="text-gray-500 text-sm text-center mb-1">{startup.location}</p>
    <p className="text-gray-500 text-sm text-center mb-1">Founded: {startup.founded}</p>
    <p className="text-gray-500 text-sm text-center mb-2">Funding: {startup.funding}</p>
    <div className="text-center">
      <a href={startup.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Visit Website
      </a>
    </div>
  </div>
);

export default StartupCard;
