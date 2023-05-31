import React, { createContext } from "react";
import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import './GamePageLayout.scss'
// import { boardDefault } from "./Constant";

// export const AppContext = createContext<any>({});

function GamePageLayout(): JSX.Element {
    // const [board, setBoard] = useState(boardDefault);
    return (
        <div className="layout-container">
            {/* <AppContext.Provider value={{ board, setBoard }}> */}
            <div className="configuraion-section">
                <ConfigurationLayout />
            </div>
            <div className="leadboard-section">
                <Leadboard />
            </div>
            <div className="arena-section">
                <Arena />
            </div>
            {/* </AppContext.Provider> */}
        </div>
    )
}

export default GamePageLayout;