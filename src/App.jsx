import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import StartupCard from "./components/StartupCard";
import SubmitForm from "./components/SubmitForm";
import FeaturedMarquee from "./components/FeaturedMarquee";
import StartupList from "./components/StartupList";
import TypingText from "./components/TypingText";
import Footer from "./components/Footer";
import startupData from "./data/startups";

function App() {
  const [query, setQuery] = useState("");
  const [startups, setStartups] = useState(startupData);
  const [visibleCount, setVisibleCount] = useState(6);

  const addStartup = (newStartup) => setStartups([newStartup, ...startups]);

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(query.toLowerCase())
  );

  const featuredStartups = startups.filter((startup) => startup.founded >= 2020);

  const visibleStartups = filteredStartups.slice(0, visibleCount);

  const handleViewMore = () => setVisibleCount(visibleCount + 3);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Startup Buddy
          </h1>
          <TypingText text="Explore, discover, and connect with innovative startups from every industry." speed={50} />
        </section>

        <div className="container mx-auto px-4">
          {/* Featured Marquee */}
          <FeaturedMarquee startups={featuredStartups} />

          {/* Search */}
          <SearchBar query={query} setQuery={setQuery} />

          {/* Startup Grid */}
          <StartupList startups={visibleStartups} />

          {/* View More */}
          {visibleCount < filteredStartups.length && (
            <div className="flex justify-center my-6">
              <button
                onClick={handleViewMore}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                View More
              </button>
            </div>
          )}

          {/* Submit Form */}
          <SubmitForm addStartup={addStartup} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;