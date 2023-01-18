import React, { useState } from "react";
import "./PlansScreen.css";

function PlansScreen() {
  const [currentPackage, setCurrentPackage] = useState(null);

  const plansData = [
    {
      id: 1,
      name: "Basic",
      description: "720p",
    },
    {
      id: 2,
      name: "Standard",
      description: "1080p",
    },
    {
      id: 3,
      name: "Premium",
      description: "4k + HDR",
    },
  ];

  return (
    <div className="plansScreen">
      {plansData.map((plan) => {
        const isSelected = currentPackage === plan.id;
        return (
          <div className={`plansScreen__plan ${isSelected ? "selected" : ""}`}>
            <div className="plansScreen__info">
              <h5>{plan.name}</h5>
              <h6>{plan.description}</h6>
            </div>
            <button
              key={plan.id}
              onClick={() => setCurrentPackage(isSelected ? null : plan.id)}
            >
              {isSelected ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
