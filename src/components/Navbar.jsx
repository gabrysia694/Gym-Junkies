import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a href="/">
        <img
          src="https://user-images.githubusercontent.com/88102392/233238344-b05e3c5d-178e-4a7b-9757-60063fb0f969.png"
          className="inline-flex h-[1] w-10 items-center justify-center rounded-lg" // don't change logo's height and width here
          alt="Gym Junkies logo"
          loading="lazy"
        ></img>
      </a>

      <ul className="flex flex-wrap items-center gap-2 text-[1rem]">
        <li className="rounded-lg px-2   hover:bg-gray-200  p-1">
          <Link to="/GuidePage">Guide</Link>
        </li>
        <li>
          <Link
            className="rounded-lg px-3 py-2  hover:bg-gray-200  p-1 "
            to="/DocsPage"
          >
            Docs
          </Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="text-2xl">
        {theme.icon}
      </button>
    </nav>
  );
}
