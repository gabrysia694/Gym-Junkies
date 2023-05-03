import React from "react";
import contributors from "./contributors";
import ContributorCard from "./ContributorCard";

const Contributors = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl p-5">
      <h1 className="text-3xl font-bold mb-4">Contributors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.map((contributor, index) => (
          <ContributorCard key={index} {...contributor} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Contributors
