import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

function navLinkClass(isActive) {
  return clsx('rounded-lg p-1 px-3 py-2 hover:bg-slate-400', {
    'bg-slate-400': isActive,
  });
}

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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

      <ul className='flex flex-wrap items-center gap-2 text-[1rem]'>
        <li>
          <NavLink
            to='/GuidePage'
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Guide
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/SchedulePage'
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to='/DocsPage'
          >
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => navLinkClass(isActive)}
            to='/ContributorsPage'
          >
            Contributors
          </NavLink>
        </li>
      </ul>
      <button onClick={toggleTheme} className='text-2xl'>
        {theme.icon}
      </button>
    </nav>
  );
}
