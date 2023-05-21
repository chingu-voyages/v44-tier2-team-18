import React, { useState, useEffect } from 'react';
import './Cell.scss';

interface CellProps {
  columnPosition: number;
  rowPosition: number;
}

interface Position {
  x: number;
  y: number;
}

interface Bot {
  position: number[];
  direction: "North" | "South" | "East" | "West";
}

function Cell({ columnPosition, rowPosition }: CellProps) {
  const [position, setPosition] = useState<Position>({ x: 3, y: 5 });
  const [bots, setBots] = useState<Bot[]>([{ position: [position.x, position.y], direction: "North" }]);
  // const [direction, setDirection] = useState(bots[0].direction);

  // const randomDirectionRef = useRef<number>(Math.floor(Math.random() * 2));
  // const stepRef = useRef<number>(Math.floor(Math.random() * 2) === 0 ? -1 : 1);


  useEffect(() => {
    const interval = setInterval(() => {
      setBots((prevBots) => {
        const newBots = prevBots.map((bot) => {
          let newPosition = [...bot.position];

          if (bot.direction === 'North') {
            newPosition[1] -= 1;

            // Ensure y position stays within arena bounds
            if (newPosition[1] < 0) {
              const randomDirection = Math.floor(Math.random() * 3);
              if (randomDirection === 0) {
                newPosition[1] = 0; // Move bot to East
                bot.direction = 'East';
              } else if (randomDirection === 1) {
                newPosition[1] = 0; // Move bot to West
                bot.direction = 'West';
              } else {
                newPosition[1] = 0 // Move bot to South
                bot.direction = 'South';
              }
            }
          } else if (bot.direction === 'South') {
            newPosition[1] += 1;

            // Ensure y position stays within arena bounds
            if (newPosition[1] > 7) {
              const randomDirection = Math.floor(Math.random() * 3);
              if (randomDirection === 0) {
                newPosition[1] = 7; // Move bot to East
                bot.direction = 'East';
              } else if (randomDirection === 1) {
                newPosition[1] = 7; // Move bot to West
                bot.direction = 'West';
              } else {
                // Move bot to North
                bot.direction = 'North';
              }
            }
          } else if (bot.direction === 'East') {
            newPosition[0] += 1;

            // Ensure y position stays within arena bounds
            if (newPosition[0] > 7) {
              const randomDirection = Math.floor(Math.random() * 3);
              if (randomDirection === 0) {
                newPosition[0] = 7; // Move bot to South
                bot.direction = 'South';
              } else if (randomDirection === 1) {
                newPosition[0] = 7; // Move bot to North
                bot.direction = 'North';
              } else {
                // Move bot to West
                bot.direction = 'West';
              }
            }
          } else if (bot.direction === 'West') {
            newPosition[0] -= 1;

            // Ensure y position stays within arena bounds
            if (newPosition[0] < 0) {
              const randomDirection = Math.floor(Math.random() * 3);
              if (randomDirection === 0) {
                newPosition[0] = 0; // Move bot to South
                bot.direction = 'South';
              } else if (randomDirection === 1) {
                newPosition[0] = 0; // Move bot to North
                bot.direction = 'North';
              } else {
                // Move bot to East
                bot.direction = 'East';
              }
            }
          }
          return {
            ...bot,
            position: newPosition,
            direction: bot.direction,
          };
        });

        return newBots;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [position]);

  const botsByPosition: { [key: string]: Bot } = {};
  bots.forEach((bot) => {
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
