import "./ConfigurationLayout.scss";
import GlobalButton from "./GlobalButton";

function ConfigurationLayout() {
  return (
    <div className="configuration-container">
      <div>
        <h2>Finish setting up the configuration</h2>
        <div className="rule-explanation">Learn more about the rules</div>
      </div>
      <div className="configuration-content">
        <div>
          <GlobalButton buttonText="bot 1 setting" />
        </div>
        <div>
          <GlobalButton buttonText="bot 2 setting" />
        </div>
        <div className="speed-slider-title">choose the speed</div>
      </div>
      <button className="buttle-button">Battle</button>
    </div>
  );
}

export default ConfigurationLayout;
