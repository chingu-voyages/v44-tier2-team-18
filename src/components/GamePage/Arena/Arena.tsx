
import Cell from '../../Bot/Cell';
import { botMoving } from '../../Bot/BotMoving';
import './Arena.scss';
import React, { useEffect, useState } from 'react';
import { botCollising } from '../../Bot/BotCollising';
import { useAppSelector } from '../../../store';


let genNArray = (n: number) => Array.from({ length: n }, () => ({}));

interface Bot {
    position: number[];
    direction: "North" | "South" | "East" | "West";
    colour: "Red" | "Blue";
    booleanValue: number;
    active: boolean
}

function Arena(): JSX.Element {

    const config = useAppSelector((state) => state);
    const currOperation = "and";
    const currSpeed = config.speed;

    const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
    const [bots, setBots] = useState<Bot[]>([
        { position: [3, 5], direction: "North", colour: "Red", booleanValue: 1, active: true },
        { position: [5, 3], direction: "West", colour: "Blue", booleanValue: 0, active: true }
    ]); //hardcoded for now, will get from context later

    // botsByPosition allows efficient search of bots based on position
    const botsByPosition: { [key: string]: Bot } = {};
    bots.forEach((bot) => {
        botsByPosition[bot.position.join(":")] = bot;
    });

    const handleCollisions = (bots: Bot[]) => {
        if (JSON.stringify(bots[0].position) === JSON.stringify(bots[1].position)) {
            const result = botCollising(bots[0].booleanValue, bots[1].booleanValue, currOperation);
            if (result === 1) {
                const genRandomIndex = Math.floor(Math.random() * 2);
                if (genRandomIndex === 0) {
                    bots[0].active = false
                } else { bots[1].active = false }
            }
        }
        return bots;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setBots((prevBots) => {
                const newBots = prevBots.map((bot) => {
                    let newBot = { ...bot }
                    const returnValue = botMoving(newBot);
                    return bot = returnValue;
                });
                return newBots;
            });
            const newBots = bots
            handleCollisions(newBots);
        }, currSpeed);

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



