/** @format */

import React from "react";

import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <ul className='menu'>
        <NavLink className="link" to='/home'>
          A
        </NavLink>
        <NavLink className='link' to='film'>
          FILM
        </NavLink>
        <NavLink className='link' to='interactive'>
          INTERACTIVE
        </NavLink>
        <NavLink className='link' to='theatre'>
          THEATRE
        </NavLink>
        <NavLink className='link' to='about'>
          ABOUT
        </NavLink>
        <NavLink className='link' to='news'>
          NEWS
        </NavLink>
        <NavLink className='link' to='search'>
          SEARCH
        </NavLink>
      </ul>
    </div>
  );
}
