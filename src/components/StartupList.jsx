import React from "react";
import StartupCard from "./StartupCard";

const StartupList = ({ startups }) => (
  <div id="showcase" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 my-6">
    {startups.length > 0 ? (
      startups.map((startup, index) => <StartupCard key={startup.id || index} startup={startup} />)
    ) : (
      <p className="text-center col-span-full text-gray-700">No startups found</p>
    )}
  </div>
);

export default StartupList;
