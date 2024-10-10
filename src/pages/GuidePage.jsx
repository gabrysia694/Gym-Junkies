import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function GuidePage() {
  const [searchValue, setSearchValue] = useState("");
  const [showButton, setShowButton] = useState(false);

  // Handle scroll to top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setShowButton(currentPosition >= 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top button component with Tailwind CSS
  const scrollToTopBtn = () => {
    return (
      <div
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 w-[60px] h-[60px] flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-300 ease-in-out ${
          showButton ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
        } bg-black bg-opacity-40 text-white border-2 border-white z-50 hover:scale-110`}
      >
        <p className="text-[40px] leading-none mb-[-10px] flex items-center justify-center">
          ^
        </p>
      </div>
    );
  };

  function search(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <section>
      {scrollToTopBtn()}
      <div className="flex flex-col mx-auto max-w-screen-xl p-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Gym Junkies</h2>
        <p className="mt-4">
          Gym Junkies is an enthusiastic community comprised of individuals who
          have a profound love for physical fitness. We are a collective of
          passionate individuals driven by a desire to share our extensive
          knowledge and expertise with others, fostering a community focused on
          promoting wellness and vitality.
        </p>
        <br />
        <input
          type="text"
          placeholder="Search"
          onChange={search}
          value={searchValue}
          className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <Card searchQuery={searchValue} />
    </section>
  );
}
