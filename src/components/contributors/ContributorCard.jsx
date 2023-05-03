import React from "react";

const ContributorCard = ({ login, html_url, avatar_url }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <img src={avatar_url} alt={login} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h2 className="text-lg font-medium">{login}</h2>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {login}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
