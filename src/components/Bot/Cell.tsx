import React, { useState, useEffect } from 'react';
import './Cell.scss';
import botIcon from '../../assets/bot-icon.jpeg'

interface CellProps {
  bot: Bot;
}

interface Bot {
  position: number[];
  direction: "North" | "South" | "East" | "West";
  colour: "Red" | "Blue";
}

function Cell({ bot }: CellProps) {
  if (bot) {
    return (
      <div className='bot'>
        <div className={bot.colour === "Red" ? "red-bot" : "blue-bot"}>
          <img src={botIcon} alt='Bot Icon' />
        </div>
      </div>
    );
  }
  return <div className='bot'></div>;
}

export default Cell;
