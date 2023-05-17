import React, { useState } from 'react';
import './Bot.scss'

interface BotProps {
  columnPosition: number;
  rowPosition: number;
}

interface Bot {
  position: number[];
}

function Bot({ columnPosition, rowPosition }: BotProps) {

  const [bots, setBots] = useState<Bot[]>([{ position: [3, 5] }]);
  const botsByPosition: { [key: string]: Bot } = {};
  bots.forEach((bot) => {
    botsByPosition[bot.position.join(":")] = bot;
  });

  const botPosition = botsByPosition[[columnPosition, rowPosition].join(":")];

  if (botPosition) {
    return (
      <div className='bot'>
        <div className='bot-head'>A</div>
      </div>
    )
  }
  return (
    <div className='bot'></div>
  )
}

export default Bot