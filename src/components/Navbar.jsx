import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a href="/">
        <img
          src="https://user-images.githubusercontent.com/88102392/233238344-b05e3c5d-178e-4a7b-9757-60063fb0f969.png"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
        ></img>
      </a>

      <ul className="flex flex-wrap items-center gap-2 text-[1rem]   text-black">
        <li className="rounded-lg px-2   hover:bg-gray-100  p-1">
          <Link to="/GuidePage">Guide</Link>
        </li>
        <li>
          <Link
            className="rounded-lg px-3 py-2  hover:bg-gray-100  p-1 "
            to="/DocsPage"
          >
            Docs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
