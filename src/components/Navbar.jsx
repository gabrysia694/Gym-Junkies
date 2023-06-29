import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/theme";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

function navLinkClass(isActive, theme) {
  return clsx(
    "block mx-auto w-1/2 sm:w-full rounded-lg p-1 px-3 py-2 hover:bg-slate-400",
    theme.background === "#fff" ? "text-black" : "text-white",
    {
      "bg-slate-400": isActive,
    }
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [navbarShown, setNavbarShown] = useState(false);

  const toggleNavbar = () => {
    setNavbarShown(!navbarShown);
  };

  return (
    <nav
      aria-label='Site Nav'
      className='flex items-center justify-between max-w-3xl p-4 mx-auto'
    >
      <a href='/'>
        <img
          src='https://user-images.githubusercontent.com/88102392/233238344-b05e3c5d-178e-4a7b-9757-60063fb0f969.png'
          className='inline-flex h-[1] w-10 items-center justify-center rounded-lg' // don't change logo's height and width here
          alt='Gym Junkies logo'
          loading='lazy'
        ></img>
      </a>

      <ul
        // className='flex flex-wrap items-center justify-center gap-2 text-[1rem]'
        className={clsx(
          `fixed sm:static top-20 z-10 gap-2 text-md w-full sm:flex flex-wrap items-center justify-center nav-menu`,
          theme.background === "#fff" ? "bg-white" : "bg-black",
          navbarShown ? "navbar-hidden" : "navbar-shown"
        )}
        onClick={toggleNavbar}
      >
        <li className='mb-4 sm:mb-0 sm:ml-8 nav-item text-center'>
          <NavLink
            to='/GuidePage'
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Guide
          </NavLink>
        </li>
        <li className='mb-4 sm:mb-0 sm:ml-8 nav-item text-center'>
          <NavLink
            to='/SchedulePage'
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Schedule
          </NavLink>
        </li>
        <li className='mb-4 sm:mb-0 sm:ml-8 nav-item text-center'>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive, theme)}
            to='/DocsPage'
          >
            Docs
          </NavLink>
        </li>
        <li className='mb-4 sm:mb-0 sm:ml-8 nav-item text-center'>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive, theme)}
            to='/ContributorsPage'
          >
            Contributors
          </NavLink>
        </li>
      </ul>
      <button onClick={toggleTheme} className='text-2xl'>
        {theme.icon}
      </button>

      <div
        className={clsx("hamburger", navbarShown && "active")}
        onClick={toggleNavbar}
      >
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.background === "#fff" ? "bg-black" : "bg-white"
          )}
        ></span>
      </div>
    </nav>
  );
}
