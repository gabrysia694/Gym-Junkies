import React from "react";

const ContributorCard = ({ name, github, photo }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <img src={photo} alt={name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-medium">{name}</h2>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {github}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
