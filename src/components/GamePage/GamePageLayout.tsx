import Arena from "./Arena/Arena";
import ConfigurationLayout from "./Configuration/ConfigurationLayout";
import Leadboard from "./Leadboard/Leadboard";
import './GamePageLayout.scss'

function GamePageLayout() {
    return (
        <div className="layout-container">
            <div className="configuraion-section">
                <ConfigurationLayout />
            </div>
            <div className="leadboard-section">
                <Leadboard />
            </div>
            <div className="arena-section">
                <Arena />
            </div>
        </div>
    )
}

export default GamePageLayout;