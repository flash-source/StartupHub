import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SubmitForm from "./components/SubmitForm";
import FeaturedMarquee from "./components/FeaturedMarquee";
import StartupList from "./components/StartupList";
import TypingText from "./components/TypingText";
import Footer from "./components/Footer";
import startupData from "./data/startups";

function App() {
  const [query, setQuery] = useState("");
  const [startups, setStartups] = useState(startupData);
  const [visibleCount, setVisibleCount] = useState(9);
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const addStartup = (newStartup) => setStartups([newStartup, ...startups]);

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(query.toLowerCase())
  );

  const featuredStartups = startups.filter((startup) => startup.founded >= 2020);

  const visibleStartups = filteredStartups.slice(0, visibleCount);

  const handleViewMore = () => setVisibleCount(visibleCount + 3);

  const handleAddStartupClick = () => setShowSubmitForm(true);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar id="showcase" onAddStartup={handleAddStartupClick} />

      <main className="pt-20">
        {/* Header Section */}
        <section  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-25 text-center scroll-mt-20">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Startup Buddy</h1>
          <TypingText text="Explore, discover, and connect with innovative startups from every industry." speed={50} />
        </section>

        <div className="container mx-auto px-4">
          {/* Featured Marquee */}
          <FeaturedMarquee startups={featuredStartups} />

          {/* Search Section */}
          <section id="search">
            <SearchBar query={query} setQuery={setQuery} />
          </section>

          {/* Startup List Section */}
          <section id="add">
            <StartupList startups={visibleStartups} />
          </section>

          {/* View More Button */}
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
        </div>
      </main>

      {/* Submit Form Modal */}
      {showSubmitForm && (
        <SubmitForm addStartup={addStartup} onClose={() => setShowSubmitForm(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
