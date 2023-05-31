import { useEffect, useState } from "react";
import "./SetupBotConfig.scss";
import { useAppDispatch, useAppSelector } from "../../../store";
import { configActions } from "../../../store/index";

type Props = {
  currentEditingBot: string;
  setCurrentEditingBot: (bool: string) => void;
};

export const SetupBotConfig = (props: Props) => {
  const dispatch = useAppDispatch();
  const bot1Config = useAppSelector((state) => state.bot1Config);
  const bot2Config = useAppSelector((state) => state.bot2Config);

  const [isBotNameDuplicated, setIsBotNameDuplicated] = useState(false);

  const setSelectValues = () => {
    const booleanValueElem = document.querySelector(
      ".booleanValue"
    ) as HTMLInputElement;
    const startingDirectionElem = document.querySelector(
      ".startingDirection"
    ) as HTMLInputElement;
    if (props.currentEditingBot === "Bot1") {
      booleanValueElem.value = bot1Config.booleanValue;
      startingDirectionElem.value = bot1Config.startingDirection;
    } else if (props.currentEditingBot === "Bot2") {
      booleanValueElem.value = bot2Config.booleanValue;
      startingDirectionElem.value = bot2Config.startingDirection;
    }
  };

  useEffect(() => {
    if (props.currentEditingBot) {
      setSelectValues();
    }
  }, [props.currentEditingBot]);

  const genRandomIndex = () => Math.floor(Math.random() * 8);
  const genRandomPosition = () => [0, 0].map(genRandomIndex);
  let startingPosition1 = genRandomPosition();
  let startingPosition2 = genRandomPosition();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      botName: { value: string };
      booleanValue: { value: number };
      startingDirection: { value: string };
    };

    const theOtherBotName =
      props.currentEditingBot === "Bot1"
        ? bot2Config.botName
        : bot1Config.botName;
    if (theOtherBotName && target.botName.value === theOtherBotName) {
      setIsBotNameDuplicated(true);
      return;
    }

    setIsBotNameDuplicated(false);

    dispatch(
      props.currentEditingBot === "Bot1"
        ? configActions.setBot1Config({
          botName: target.botName.value,
          booleanValue: target.booleanValue.value,
          startingDirection: target.startingDirection.value,
          position: startingPosition1,
          active: true
        })
        : configActions.setBot2Config({
          botName: target.botName.value,
          booleanValue: target.booleanValue.value,
          startingDirection: target.startingDirection.value,
          position: startingPosition2,
          active: true
        })
    );

    props.setCurrentEditingBot("");
  };

  return (
    <div className="editing">
      <div className="bot-setting-title">
        {props.currentEditingBot} Settings
      </div>
      <hr />
      <div className="bot-setting-content">
        <form
          name="botConfig"
          onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
          <div className="bot-each-config">
            <label>
              <div>Bot Name:</div>
              <input
                name="botName"
                id="botName"
                type="text"
                required
                className={`botname ${isBotNameDuplicated ? " alert" : ""}`}
                defaultValue={
                  props.currentEditingBot === "Bot1"
                    ? bot1Config.botName
                    : bot2Config.botName
                }
              />
            </label>
            <div className="alert-text">
              {isBotNameDuplicated &&
                "Bot Name is duplicated. Change the bot name."}
            </div>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Boolean Value:</div>
              <select name="booleanValue" className="booleanValue" required>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </label>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Starting direction:</div>
              <select
                name="startingDirection"
                className="startingDirection"
                required>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="west">West</option>
                <option value="east">East</option>
              </select>
            </label>
          </div>
          <div className="submit">
            <button type="submit" className="confirm-bot-setting">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
