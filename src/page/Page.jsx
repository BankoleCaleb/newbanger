import React from "react";


import "./page.css";
import Header from "../components/header/Header";
import Sidenav from "../components/sidenav/Sidenav";

import laptop from "../assets/laptop.png"
import VerifyNotificationCard from "../components/verify-notification-card/VerifyNotificationCard";

function Page() {
  const [showSideNav, setShowSideNav] = React.useState(true)
  const toggleShowSideNav = () => setShowSideNav(a => !a);

  return (
    <div className="blogger-welcome">
      <Sidenav showSideNav={showSideNav} />
      <main className="blogger-welcome-main">
        <Header showSideNav={showSideNav} toggleShowSideNav={toggleShowSideNav} />

        <div className="body">
          <VerifyNotificationCard />
          <div className="welcome-card">
            <div className="laptop-container">
              <img src={laptop} alt="laptop" />
              <p className="greeting">Hello Current User</p>
              <p className="text">We understand here look  dry at the moment,
                we will get you contents to monetize soon</p>
            </div>

            <button className="add-payout-account-btn">Add Payout Account</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page;