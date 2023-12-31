import React from "react";
import { Link } from "react-router-dom"

import { MdSpeed } from "react-icons/md"
import { GiMegaphone } from "react-icons/gi"
import { PiSignOutBold } from "react-icons/pi"

import logo from "../../assets/logo.png"

import "./sidenav.css";

function Sidenav({ showSideNav }) {

  return (
    <aside className={`sidenav ${showSideNav ? "show" : "hide"}`}>
      <div className="sidenav-container flex direct-column">
        <img src={logo} alt="logo" />

        <ul className="navlink-container">
          <li><Link className="flex gap1 items-center" to="/overview"><MdSpeed />Overview</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><GiMegaphone />My Campaigns</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><MdSpeed />List</Link></li>
          <li><Link className="flex gap1 items-center" to="#"><MdSpeed />Analytics</Link></li>
          <li><Link className="notification-navlink flex gap1 items-center" to="#"><MdSpeed />Notifications <div className="notification-label">3 new</div></Link></li>
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