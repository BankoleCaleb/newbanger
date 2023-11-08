import React from "react";

import { GoPeople } from "react-icons/go"
import { BiDollarCircle } from "react-icons/bi"
import { GiMegaphone } from "react-icons/gi"

import "./overview.css";
import Header from "../../components/header/Header";
import Sidenav from "../../components/sidenav/Sidenav";
import OverviewCard from "../../components/overview-card/OverviewCard";


function Overview() {
  const [showSideNav, setShowSideNav] = React.useState(true)
  const toggleShowSideNav = () => setShowSideNav(a => !a);

  return (
    <div className="overview">
      <Sidenav showSideNav={showSideNav} />
      <main className="overview-main">
        <Header showSideNav={showSideNav} toggleShowSideNav={toggleShowSideNav} />

        <div className="body">
          <div className="overview-cards-container">
            <OverviewCard
              icon={<GoPeople />}
              heading={"ALL CAMPAIGNS"}
              figure={"0"}
            />
            <OverviewCard
              icon={<GiMegaphone />}
              heading={"TOTAL SPENT"}
            />
            <OverviewCard
              icon={<BiDollarCircle />}
              heading={"IMPRESSIONS"}
            />
          </div>

          <div className="campaign-activity-card-container">
            <div className="campaign-card"></div>

            <div className="activity-card">
              <h1 className="heading">Activities</h1>
              <div className="activity-body">
                <div>
                  <p className="bigger-text">No Activities Yet</p>
                  <p>Your Activities will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Overview;