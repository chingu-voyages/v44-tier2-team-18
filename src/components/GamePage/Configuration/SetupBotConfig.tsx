import { useState } from "react";
import "./SetupBotConfig.scss";

type BotConfigType = {
  botName: string;
  booleanValue: number;
  startingDirection: string;
};
type Props = {
  currentEditingBot: string;
  setIsEditingConfig: (bool: boolean) => void;
};

export const SetupBotConfig = (props: Props) => {
  const [botInfo, setBotInfo] = useState<BotConfigType>({
    botName: "",
    booleanValue: 0,
    startingDirection: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      botName: { value: string };
      booleanValue: { value: number };
      startingDirection: { value: string };
    };
    //set in useContext
    setBotInfo({
      botName: target.botName.value,
      booleanValue: target.booleanValue.value,
      startingDirection: target.startingDirection.value,
    });
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
                defaultValue={botInfo.botName}
              />
            </label>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Boolean Value:</div>
              <select name="booleanValue">
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </label>
          </div>
          <div className="bot-each-config">
            <label>
              <div>Starting direction:</div>
              <select name="startingDirection">
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
              </select>
            </label>
          </div>
          <div className="submit">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};