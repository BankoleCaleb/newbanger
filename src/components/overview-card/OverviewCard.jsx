import React from 'react';

import "./overview-card.css"

export default function OverviewCard({ icon, heading, figure }) {
  return (
    <div className="overview-card">
      <div className="card-container flex gap1 items-center">
        <div className="icon-container"><div style={{ fontSize: "25px" }}>{icon}</div></div>

        <div className="card-body">
          <h3 className="heading">{heading}</h3>
          <p className="figure">{figure || "-"}</p>
        </div>
      </div>
      <button className="view-all-btn">View All</button>
    </div>
  )
}