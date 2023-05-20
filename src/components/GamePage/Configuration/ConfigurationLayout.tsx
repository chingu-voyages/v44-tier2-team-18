import { useState } from "react";
import "./ConfigurationLayout.scss";
import { SetupBotConfig } from "./SetupBotConfig";

function ConfigurationLayout() {
  const [speed, setSpeed] = useState<string>("1");
  const [isEditingConfig, setIsEditingConfig] = useState<boolean>(false);
  const [currentEditingBot, setCurrentEditingBot] = useState<string>("");

  const setEditingBot = (
    event: React.MouseEvent<HTMLElement>,
    botName: string
  ) => {
    setCurrentEditingBot(botName);
    setIsEditingConfig(true);
  };

  return (
    <div className="configuration-container">
      <div>
        <h2>Finish setting up the configuration</h2>
        <div className="rule-explanation">Learn more about the rules</div>
      </div>
      <div className="configuration-content">
        {!isEditingConfig && (
          <div className="not-editing">
            <div className="button-wrapper">
              <button
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  setEditingBot(e, "Bot1")
                }
                className="globalButton">
                Bot1 Setting
              </button>
              {/* <GlobalButton buttonText="bot 1 setting" /> */}
            </div>
            <div className="button-wrapper">
              <button className="globalButton">Bot2 Setting</button>
              {/* <GlobalButton buttonText="bot 2 setting" /> */}
            </div>
            <div className="range-wrapper">
              <label htmlFor="speed">choose the speed</label>
              <input
                className="range-bar"
                type="range"
                id="speed"
                name="speed"
                min="1"
                max="4"
                value={speed}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setSpeed(e.currentTarget.value)
                }
              />
              <div className="range-value">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
              <div className="bot-each-config">Operation:</div>
            </div>
          </div>
        )}
        {isEditingConfig && (
          <>
            <SetupBotConfig
              currentEditingBot={currentEditingBot}
              setIsEditingConfig={setIsEditingConfig}
            />
          </>
        )}
      </div>
      {!isEditingConfig && <button className="buttle-button">Battle</button>}
    </div>
  );
}

export default ConfigurationLayout;
