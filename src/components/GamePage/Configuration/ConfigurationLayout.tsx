import { useState } from "react";
import "./ConfigurationLayout.scss";
import { SetupBotConfig } from "./SetupBotConfig";
import { configActions } from "../../../store/index";
import { useAppDispatch, useAppSelector } from "../../../store";

function ConfigurationLayout() {
  const dispatch = useAppDispatch();

  const speed = useAppSelector((state) => state.speed);
  const operation = useAppSelector((state) => state.operation);

  const [currentEditingBot, setCurrentEditingBot] = useState<string>("");
  let [battle, setBattle] = useState<boolean>(false);

  const setEditingBot = (
    event: React.MouseEvent<HTMLElement>,
    botName: string
  ) => {
    setCurrentEditingBot(botName);
  };

  const operationArray: string[] = ["and", "or", "nor", "nand"];

  const handleBattleButton = () => {
    setBattle((prevBattle) => !prevBattle)
  }

  return (
    <div className="configuration-container">
      <div>
        <h2>Finish setting up the configuration</h2>
        <div className="rule-explanation">Learn more about the rules</div>
      </div>
      <div className="configuration-content">
        {!currentEditingBot && (
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
                min="1"
                max="4"
                value={speed?.toString()}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  dispatch(
                    configActions.setSpeed(Number(e.currentTarget.value))
                  )
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
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    dispatch(configActions.setOperation(e.currentTarget.value))
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
        {currentEditingBot && (
          <>
            <SetupBotConfig
              battle={battle}
              currentEditingBot={currentEditingBot}
              setCurrentEditingBot={setCurrentEditingBot}
            />
          </>
        )}
      </div>
      {!currentEditingBot &&
        <button className="buttle-button"
          onClick={handleBattleButton}>
          Battle
        </button>}
    </div>
  );
}

export default ConfigurationLayout;