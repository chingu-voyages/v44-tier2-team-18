import { useEffect, useState } from "react";
import "./SetupBotConfig.scss";
import { useAppDispatch, useAppSelector } from "../../../store";
import { configActions } from "../../../store/index";

type Props = {
  currentEditingBot: string;
  setIsEditingConfig: (bool: boolean) => void;
  isEditingConfig: boolean;
};

export const SetupBotConfig = (props: Props) => {
  const dispatch = useAppDispatch();
  const bot1Config = useAppSelector((state) => state.bot1Config);

  const setSelectValues = () => {
    const booleanValueElem = document.querySelector(
      ".booleanValue"
    ) as HTMLInputElement;
    const startingDirectionElem = document.querySelector(
      ".startingDirection"
    ) as HTMLInputElement;

    if (booleanValueElem && bot1Config.booleanValue) {
      booleanValueElem.value = bot1Config.booleanValue.toString();
    }
    if (startingDirectionElem) {
      startingDirectionElem.value = bot1Config.startingDirection;
    }
  };

  useEffect(() => {
    if (props.isEditingConfig) {
      setSelectValues();
    }
  }, [props.isEditingConfig]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      botName: { value: string };
      booleanValue: { value: number };
      startingDirection: { value: string };
    };
    dispatch(
      configActions.setBot1Config({
        botName: target.botName.value,
        booleanValue: target.booleanValue.value,
        startingDirection: target.startingDirection.value,
      })
    );
    props.setIsEditingConfig(false);
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
                defaultValue={bot1Config.botName}
              />
            </label>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Boolean Value:</div>
              <select name="booleanValue" className="booleanValue">
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </label>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Starting direction:</div>
              <select name="startingDirection" className="startingDirection">
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
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
