import React, { useState } from "react";
import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import "./GamePageLayout.scss";

function GamePageLayout(): JSX.Element {
  const [isMobilePage, setIsMobilePage] = useState(false);
  return (
    <div className="layout-container">
      <header>
        <div className="hamberger-wrapper">
          <button
            onClick={() => setIsMobilePage(!isMobilePage)}
            className={`hamberger-button ${isMobilePage ? " active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className="content">
        <div className="configuraion-section">
          <div className={`mobile-menu ${isMobilePage ? "active" : ""}`}>
            <ConfigurationLayout />
          </div>
        </div>
        <div className="arena-section">
          <Arena />
        </div>
      </div>
    </div>
  );
}

export default GamePageLayout;
