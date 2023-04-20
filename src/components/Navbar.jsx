import React from "react";

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

      <ul className="flex items-center gap-2 text-[1.2rem] font-bold  text-black hover:bg-gray-100 rounded-md p-1">
        <li>
          <a
            className="rounded-lg px-3 py-2 "
            href="https://github.com/gabrysia694/Gym-Junkies"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Add your card{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
