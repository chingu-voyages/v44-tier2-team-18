import React, { useState, useEffect } from "react";
import "./Cell.scss";
import botIcon from "../../assets/bot-icon.jpeg";

interface CellProps {
  bot: Bot;
}

interface Bot {
  colour: string;
  active: boolean;
}

function Cell({ bot }: CellProps) {
  if (bot) {
    console.log(bot);
    return (
      <div className="bot">
        <div
          className={`each-bot ${
            bot.colour === "Red" ? "red-bot" : "blue-bot"
          }`}>
          {bot.active === true ? <img src={botIcon} alt="Bot Icon" /> : ""}
        </div>
      </div>
    );
  }
  return <div className="bot"></div>;
}

export default Cell;
