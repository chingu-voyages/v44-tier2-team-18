
import Cell from '../../Bot/Cell';
import { botMoving } from '../../Bot/BotMoving';
import './Arena.scss';
import React, { useEffect, useState } from 'react';


let genNArray = (n: number) => Array.from({ length: n }, () => ({}));

interface Bot {
    position: number[];
    direction: "North" | "South" | "East" | "West";
}

function Arena(): JSX.Element {
    const [grid, setGrid] = useState(genNArray(8).map(() => genNArray(8)));
    const [bots, setBots] = useState<Bot[]>([{ position: [3, 5], direction: "North" }]); //hardcoded for now, will get from context later

    useEffect(() => {
        const interval = setInterval(() => {
            setBots((prevBots) => {
                const newBots = prevBots.map((bot) => {
                    let newPosition = [...bot.position];
                    let newDirection = bot.direction;
                    botMoving(newDirection, newPosition);
                    return {
                        position: newPosition,
                        direction: newDirection,
                    };
                });

                return newBots;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="board">
            {grid.map((row, i) => {
                return (
                    <div className="row">
                        {row.map((col, j) => {
                            return <Cell columnPosition={j} rowPosition={i} currBots={bots} />;
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Arena;