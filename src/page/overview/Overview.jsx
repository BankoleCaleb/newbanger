import React from "react";


import "./overview.css";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidenav/Sidenav";


function Overview() {
  const [showSideNav, setShowSideNav] = React.useState(true)
  const toggleShowSideNav = () => setShowSideNav(a => !a);

  return (
    <div className="overview">
      <Sidenav showSideNav={showSideNav} />
      <main className="overview-main">
        <Header showSideNav={showSideNav} toggleShowSideNav={toggleShowSideNav} />

        <div className="body">

        </div>
      </main>
    </div>
  )
}

export default Overview;