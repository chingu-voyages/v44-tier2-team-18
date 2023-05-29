import { useState } from "react";
import "./ConfigurationLayout.scss";
import { SetupBotConfig } from "./SetupBotConfig";
import { configActions } from "../../../store/index";
import { useAppDispatch, useAppSelector } from "../../../store";
import { AiOutlineCheck } from "react-icons/ai";

function ConfigurationLayout() {
  const dispatch = useAppDispatch();

  const speed = useAppSelector((state) => state.speed);
  const operation = useAppSelector((state) => state.operation);
  const bot1Config = useAppSelector((state) => state.bot1Config);
  const bot2Config = useAppSelector((state) => state.bot2Config);

  const [currentEditingBot, setCurrentEditingBot] = useState<string>("");

  const operationArray: string[] = ["and", "or", "nor", "nand"];

  const setEditingBot = (
    event: React.MouseEvent<HTMLElement>,
    botName: string
  ) => {
    setCurrentEditingBot(botName);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      speed: { value: number };
      operation: { value: string };
    };
    console.log(target.operation.value);
    console.log(target.speed.value);
  };

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
                <div className="button-text">
                  Bot1 Setting
                  {bot1Config.botName &&
                    bot1Config.booleanValue &&
                    bot1Config.startingDirection && (
                      <AiOutlineCheck color="#4CAF50" size={"1.2rem"} />
                    )}
                </div>
              </button>
            </div>
            <div className="button-wrapper">
              <button
                className="globalButton"
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  setEditingBot(e, "Bot2")
                }>
                <div className="button-text">
                  Bot2 Setting
                  {bot2Config.botName &&
                    bot2Config.booleanValue &&
                    bot2Config.startingDirection && (
                      <AiOutlineCheck color="#4CAF50" size={"1.2rem"} />
                    )}
                </div>
              </button>
            </div>
            <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
              <div className="range-wrapper">
                <label htmlFor="speed">Choose the speed</label>
                <input
                  className="range-bar"
                  type="range"
                  id="speed"
                  name="speed"
                  min="1"
                  max="4"
                  required
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
                    required
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      dispatch(
                        configActions.setOperation(e.currentTarget.value)
                      )
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
              <button type="submit" className="buttle-button">
                Battle
              </button>
            </form>
          </div>
        )}
        {currentEditingBot && (
          <>
            <SetupBotConfig
              currentEditingBot={currentEditingBot}
              setCurrentEditingBot={setCurrentEditingBot}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ConfigurationLayout;
