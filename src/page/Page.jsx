import React from "react";
import { ImNotification } from "react-icons/im"

import "./page.css";
import Header from "../components/header/Header";
import Sidenav from "../components/sidenav/Sidenav";

function Page() {
  const [showSideNav, setShowSideNav] = React.useState(true)
  const toggleShowSideNav = () => setShowSideNav(a => !a);

  return (
    <div className="blogger-welcome">
      <Sidenav showSideNav={showSideNav} />
      <main className="blogger-welcome-main">
        <Header showSideNav={showSideNav} toggleShowSideNav={toggleShowSideNav} />
      </main>
    </div>
  )
}

export default Page;