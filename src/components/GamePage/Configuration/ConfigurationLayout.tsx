import "./ConfigurationLayout.scss";
import GlobalButton from "./GlobalButton";

function ConfigurationLayout() {
  // const setTest = (val: string) => {
  //   console.log(val);
  // };
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
        <div className="range-wrapper">
          <label htmlFor="volume">choose the speed</label>
          <input
            className="range-bar"
            type="range"
            id="volume"
            name="volume"
            min="1"
            max="4"
          />
          <div className="range-value">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </div>
      <button className="buttle-button">Battle</button>
    </div>
  );
}

export default ConfigurationLayout;
