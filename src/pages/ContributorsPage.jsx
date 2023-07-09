import React, { useState } from "react";
import Contributors from "../components/contributors/Contributors";

const ContributorsPage = () => {
  const [searchValue, setSearchValue] = useState("");

  function search(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <section className="min-h-screen">
      <div className="flex flex-col mx-auto max-w-screen-xl p-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Contributors</h2>
        <input
          placeholder="Search"
          className="border-4 rounded-full text-lg"
          onChange={search}
          value={searchValue}
        />
      </div>
      <Contributors searchQuery={searchValue} />
    </section>
  );
};

export default ContributorsPage;
