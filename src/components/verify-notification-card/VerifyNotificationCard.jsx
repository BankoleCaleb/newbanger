import React from "react";
import { ImNotification } from "react-icons/im"

import "./verify-notification-card.css"

function VerifyNotificationCard() {
  return (
    <div className="verify-notification-card">
      <div className="text-container flex gap1">
        <ImNotification style={{ fontSize: "2em" }} />
        <p className="text">Verification Needed - As part of our onboarding process, we aim to ensure the accuracy of the information provided by bloggers. This includes verifying the monthly page views claimed for your website.</p>
      </div>
      <button className="verify-btn">Verify Now</button>
    </div>
  )
}

export default VerifyNotificationCard