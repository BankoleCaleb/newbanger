import React from "react";

import { RxBell } from "react-icons/rx"
import { PiCaretDownBold } from "react-icons/pi"

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

import wale from "../../assets/walee.png"

import "./header.css";

function Header({ showSideNav, toggleShowSideNav }) {
  return (
    <nav className="blogger-welcome-header">
      <div className="container flex justify-between items-center">
        <h1 className="heading">Overview</h1>

        <span className="mobile-menu">
          <button className={`close ${showSideNav ? "show" : "hide"}`} onClick={toggleShowSideNav}>
            <AiOutlineClose style={{ fontSize: "2em" }} />
          </button>
          <button className={`open ${showSideNav ? "hide" : "show"}`} onClick={toggleShowSideNav}>
            <GiHamburgerMenu style={{ fontSize: "2em" }} />
          </button>
        </span>

        <div className="blogger-profile flex items-center gap">
          <span className="bell">
            <RxBell />
          </span>

          <img src={wale} alt="blogger" className="blogger-avatar" />

          <h4 className="blogger-name">Day Wale</h4>

          <span className="caret-down">
            <PiCaretDownBold />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header;