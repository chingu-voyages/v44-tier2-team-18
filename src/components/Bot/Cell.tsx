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
  const [direction, setDirection] = useState(bots[0].direction);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random movement: 0 for x-axis, 1 for y-axis
      const randomDirection = Math.floor(Math.random() * 2);
      const step = Math.floor(Math.random() * 2) === 0 ? -1 : 1;

      setBots((prevBots) => {
        const newBots = prevBots.map((bot) => {
          const newPosition = [...bot.position];

          if (bot.direction === 'North') {
            newPosition[1] -= 1;
            // Ensure y position stays within arena bounds
            if (newPosition[1] < 0) {
              if (randomDirection === 0) {
                newPosition[0] += step;
              } else {
                newPosition[1] -= 1;
              }
            }

          } else if (bot.direction === 'South') {
            // Ensure y position stays within arena bounds
            if (newPosition[1] > 7) {
              if (randomDirection === 0) {
                newPosition[0] += step;
              } else {
                newPosition[1] += 1;
              }
            }
            newPosition[1] += 1;
          } else if (bot.direction === 'East') {
            // Ensure x position stays within arena bounds
            if (newPosition[0] > 7) {
              if (randomDirection === 1) {
                newPosition[1] += step;
              } else {
                newPosition[0] += 1;
              }
            }
            newPosition[0] += 1;
          } else if (bot.direction === 'West') {
            // Ensure x position stays within arena bounds
            if (newPosition[0] < 0) {
              if (randomDirection === 1) {
                newPosition[1] += step;
              } else {
                newPosition[0] -= 1;
              }
            }
            newPosition[0] -= 1;
          }

          return {
            ...bot,
            position: newPosition,
          };
        });

        return newBots;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  //     setPosition((prevPosition) => {
  //       const newPosition = { ...prevPosition };

  //       if (direction === 'North') {
  //         // Ensure y position stays within arena bounds
  //         if (newPosition.y < 0) {
  //           if (randomDirection === 0) {
  //             newPosition.x += step;
  //           } else {
  //             newPosition.y -= 1;
  //           }
  //         }
  //         newPosition.y -= 1;
  //       } else if (direction === 'South') {
  //         // Ensure y position stays within arena bounds
  //         if (newPosition.y > 7) {
  //           if (randomDirection === 0) {
  //             newPosition.x += step;
  //           } else {
  //             newPosition.y += 1;
  //           }
  //         }
  //         newPosition.y += 1;
  //       } else if (direction === 'East') {
  //         // Ensure x position stays within arena bounds
  //         if (newPosition.x > 7) {
  //           if (randomDirection === 1) {
  //             newPosition.y += step;
  //           } else {
  //             newPosition.x += 1;
  //           }
  //         }
  //         newPosition.x += 1;
  //       } else if (direction === 'West') {
  //         // Ensure x position stays within arena bounds
  //         if (newPosition.x < 0) {
  //           if (randomDirection === 1) {
  //             newPosition.y += step;
  //           } else {
  //             newPosition.x -= 1;
  //           }
  //         }
  //         newPosition.x -= 1;
  //       }

  //       return newPosition;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

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
