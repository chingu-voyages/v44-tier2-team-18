import React, { useState } from "react";
import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import './GamePageLayout.scss'
// import { boardDefault } from "./Constant";

// export const AppContext = createContext<any>({});

function GamePageLayout(): JSX.Element {
    // const [resultBot1, setResultBot1] = useState(0);
    // const [resultBot2, setResultBot2] = useState(0);
    // const [output, setOutput] = useState(null)
    return (
        <div className="layout-container">
            {/* <AppContext.Provider value={{ board, setBoard }}> */}
            <div className="configuraion-section">
                <ConfigurationLayout />
            </div>
            {/* <div className="leadboard-section">
                <Leadboard />
            </div> */}
            <div className="arena-section">
                <Arena />
            </div>
        </div>
    )
}

export default GamePageLayout;