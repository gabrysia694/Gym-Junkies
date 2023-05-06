import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import clsx from "clsx";

const ContributorCard = ({ login, html_url, avatar_url }) => {
  const { themeName } = useContext(ThemeContext);
  return (
    <div className={clsx(
      " p-4 rounded-lg shadow hover:border-purple-900 border-2",
      themeName !== "light" ? "text-white bg-gray-800" : "text-black bg-white"
    )}
    >
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
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
