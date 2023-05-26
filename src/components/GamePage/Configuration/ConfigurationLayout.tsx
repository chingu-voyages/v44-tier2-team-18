import { useState } from "react";
import "./ConfigurationLayout.scss";
import { SetupBotConfig } from "./SetupBotConfig";
import { configActions } from "../../../store/index";
import { useAppDispatch, useAppSelector } from "../../../store";

function ConfigurationLayout() {
  //TO GET STATE FROM REDUX
  const config = useAppSelector((state) => state);
  //TO DISPATCH THE REDUCER IN REDUX
  const dispatch = useAppDispatch();
  const [speed, setSpeed] = useState<number>(1);
  const [operation, setOperation] = useState<string>("");
  const [isEditingConfig, setIsEditingConfig] = useState<boolean>(false);
  const [currentEditingBot, setCurrentEditingBot] = useState<string>("");

  const setEditingBot = (
    event: React.MouseEvent<HTMLElement>,
    botName: string
  ) => {
    setCurrentEditingBot(botName);
    setIsEditingConfig(true);
  };

  const operationArray: string[] = ["and", "or", "nand", "nor"];

  return (
    <>
      console.log(speed);
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
              </div>
              <div className="button-wrapper">
                <button
                  className="globalButton"
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    setEditingBot(e, "Bot2")
                  }>
                  Bot2 Setting
                </button>
              </div>
              <div className="range-wrapper">
                <label htmlFor="speed">Choose the speed</label>
                <input
                  className="range-bar"
                  type="range"
                  id="speed"
                  name="speed"
                  min="1" // need to fix the value to [1000, 2000, 3000, 4000]
                  max="4" // need to fix the value to [1000, 2000, 3000, 4000]
                  value={speed}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setSpeed(Number(e.currentTarget.value))
                    // console.log(speed)
                    dispatch(configActions.setSpeed(speed))
                    // console.log(config)
                  }
                  }
                />
                <div className="range-value">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
              <div className="bot-each-config operation-wrapper">
                <label>
                  <div>Operation:</div>
                  <select
                    name="operation"
                    value={operation}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setOperation(e.currentTarget.value)
                      // console.log(operation)
                      dispatch(configActions.setOperation(operation))
                      // console.log(config)
                    }
                    }>
                    {operationArray.map((op: string) => {
                      return (
                        <option value={op} key={op}>
                          {op.toUpperCase()}
                        </option>
                      );
                    })}
                  </select>
                </label>
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
    </>
  );
}

export default ConfigurationLayout;
