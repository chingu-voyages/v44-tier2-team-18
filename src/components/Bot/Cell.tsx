import React, { useState, useEffect } from 'react';
import './Cell.scss';

interface CellProps {
  columnPosition: number;
  rowPosition: number;
  currBots: Bot[];
}

interface Bot {
  position: number[];
  direction: "North" | "South" | "East" | "West";
}

function Cell({ columnPosition, rowPosition, currBots }: CellProps) {

  const botsByPosition: { [key: string]: Bot } = {};
  currBots.forEach((bot) => {
    botsByPosition[bot.position.join(":")] = bot;
  });

  const botPosition = botsByPosition[[columnPosition, rowPosition].join(":")];

  if (botPosition) {
    return (
      <div className='bot'>
        <div className='bot-head'>B</div>
      </div>
    );
  }
  return <div className='bot'></div>;
}


export default Cell;
