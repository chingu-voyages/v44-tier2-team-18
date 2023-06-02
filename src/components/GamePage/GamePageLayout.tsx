import React, { useState } from "react";
import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import './GamePageLayout.scss';

function GamePageLayout(): JSX.Element {
    return (
        <div className="layout-container">
            <div className="configuraion-section">
                <ConfigurationLayout />
            </div>
            <div className="arena-section">
                <Arena />
            </div>
        </div>
    )
}

export default GamePageLayout;