import React from "react";
import { Link } from "react-router-dom"

import { MdSpeed } from "react-icons/md"
import { GiMegaphone } from "react-icons/gi"
import { PiSignOutBold } from "react-icons/pi"

import logo from "../../assets/logo.png"

import "./sidenav.css";

function Sidenav({ showSideNav }) {

  return (
    <aside className={`blogger-welcome-sidenav ${showSideNav ? "show" : "hide"}`}>
      <div className="sidenav-container flex direct-column">
        <img src={logo} alt="logo" />

        <ul className="navlink-container">
          <li><Link className="flex gap1 items-center" to="/overview"><MdSpeed />Overview</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><GiMegaphone />Contents</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><MdSpeed />Payment</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><MdSpeed />Support</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><MdSpeed />Settings</Link></li>
        </ul>

        <button className="signout-btn flex gap1">
          Sign Out
          <PiSignOutBold />
        </button>
      </div>
    </aside>
  )
}

export default Sidenav;