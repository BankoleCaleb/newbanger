import React from "react";

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
          <li><a className="flex gap1 items-center" href="#"><MdSpeed />Overview</a></li>
          <li><a className="flex gap1 items-center" href="#"><GiMegaphone />Contents</a></li>
          <li><a className="flex gap1 items-center" href="#"><MdSpeed />Payment</a></li>
          <li><a className="flex gap1 items-center" href="#"><MdSpeed />Support</a></li>
          <li><a className="flex gap1 items-center" href="#"><MdSpeed />Settings</a></li>
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