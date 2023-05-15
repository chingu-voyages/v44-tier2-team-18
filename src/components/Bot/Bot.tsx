import React, { useContext } from 'react';
import { AppContext } from '../GamePage/GamePageLayout';
import './Bot.scss'

interface BotProps {
  columnPosition: number;
  rowPosition: number;
}

function Bot({ columnPosition, rowPosition }: BotProps) {
  const { board } = useContext(AppContext)
  const bot = board[columnPosition][rowPosition]
  return (
    <div className='bot'>{bot}</div>
  )
}

export default Bot