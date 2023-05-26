
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

    const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
    console.log('rendering', grid)
    const [bots, setBots] = useState<Bot[]>([{ position: [3, 5], direction: "North" }]); //hardcoded for now, will get from context later

    // botsByPosition allows efficient search of bots based on position
    const botsByPosition: { [key: string]: Bot } = {};
    bots.forEach((bot) => {
        botsByPosition[bot.position.join(":")] = bot;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setBots((prevBots) => {
                const newBots = prevBots.map((bot) => {
                    let newPosition = [...bot.position];
                    let newDirection = bot.direction;
                    const returnValue = botMoving(newDirection, newPosition);
                    // console.log(returnValue);
                    return {
                        position: returnValue.position,
                        direction: returnValue.direction,
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
                    <div key={i} className="row">
                        {row.map((col, j) => {
                            const bot = botsByPosition[[j, i].join(":")];
                            return <Cell key={j} bot={bot} />;
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Arena;