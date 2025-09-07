import React from "react";
import "./FeaturedMarquee.css";
import StartupCard from "./StartupCard";

const FeaturedMarquee = ({ startups }) => (
  <section className="my-10 bg-white shadow-md rounded-xl p-4">
    <h2 className="text-3xl font-bold text-center mb-6">New & Trending Startups</h2>
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll space-x-6 hover:pause">
        {startups.map((startup) => (
          <div key={startup.id} className="flex-none w-64">
            <StartupCard startup={startup} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedMarquee;
