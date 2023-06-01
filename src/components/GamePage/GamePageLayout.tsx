import React, { createContext } from "react";
import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import "./GamePageLayout.scss";
import useScreenSize from "../../hooks/useScreenSize";

function GamePageLayout(): JSX.Element {
  const { browserInnerWidthSize } = useScreenSize();
  console.log(browserInnerWidthSize);

  return (
    <>
      <div className="game-page">
        {browserInnerWidthSize <= 820 && (
          <div className="layout-container mobile-size">
            {/* will use it later */}
            {/* <div className="configuraion-section">
            <ConfigurationLayout />
          </div> */}

            <div className="leadboard-section">
              <Leadboard />
            </div>
            <div className="arena-section">
              <Arena />
            </div>
          </div>
        )}
        {browserInnerWidthSize > 820 && (
          <div className="layout-container pc-size">
            <div className="section-left">
              <div className="configuraion-section">
                <ConfigurationLayout />
              </div>
            </div>
            <div className="section-right">
              <div className="leadboard-section">
                <Leadboard />
              </div>
              <div className="arena-section">
                <Arena />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GamePageLayout;
