import React, { useState, useEffect } from 'react';
import './Cell.scss';

interface CellProps {
  bot: Bot;
}

interface Bot {
  position: number[];
  direction: "North" | "South" | "East" | "West";
}

function Cell({ bot }: CellProps) {
  if (bot) {
    return (
      <div className='bot'>
        <div className='bot-head'>B</div>
      </div>
    );
  }
  return <div className='bot'></div>;
}

export default Cell;