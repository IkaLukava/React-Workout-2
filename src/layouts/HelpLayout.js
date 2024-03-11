import { NavLink, Outlet } from "react-router-dom";
import React from 'react';

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website help</h2>
        <p>Lorem ipsum dolor sit amet consectute buda joka n asete</p>

        <nav>
            <NavLink to='faq'>View the FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>


        <Outlet/>

    </div>
  )
}
