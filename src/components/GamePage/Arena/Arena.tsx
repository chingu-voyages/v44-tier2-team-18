
import Cell from '../../Bot/Cell';
import { botMoving } from '../../Bot/BotMoving';
import './Arena.scss';
import React, { useEffect, useState } from 'react';
import { botCollising } from '../../Bot/BotCollising';
import { useAppDispatch, useAppSelector } from '../../../store';
import { configActions } from '../../../store';


let genNArray = (n: number) => Array.from({ length: n }, () => ({}));

interface Bot {
    botName: string;
    position: number[];
    active: boolean;
    colour: string;
    booleanValue: string;
    startingDirection: string;
}

function Arena(): JSX.Element {

    const dispatch = useAppDispatch();

    const bot1Config = useAppSelector((state) => state.bot1Config);
    const bot2Config = useAppSelector((state) => state.bot2Config);
    const speed = useAppSelector((state) => state.speed) * 500;
    const operation = useAppSelector((state) => state.operation);

    const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
    const [bots, setBots] = useState<Bot[]>([]);

    useEffect(() => {
        setBots([bot1Config, bot2Config]);
    }, [bot1Config, bot2Config]);

    // botsByPosition allows efficient search of bots based on position
    const botsByPosition: { [key: string]: Bot } = {};
    bots.forEach((bot) => {
        botsByPosition[bot.position.join(":")] = bot;
    });

    const handleCollisions = (bots: Bot[]) => {
        const collidedBots: Bot[] = [];
        if (JSON.stringify(bots[0].position) === JSON.stringify(bots[1].position)) {
            const result = botCollising(bots[0].booleanValue, bots[1].booleanValue, operation);
            dispatch(configActions.setOutput(result))

            if (result === 1) {
                const genRandomIndex = Math.floor(Math.random() * 2);
                if (genRandomIndex === 0) {
                    bots[0].active = false;

                    collidedBots.push(bots[0])
                    // const bot2Result = bot2Config.result + 1;
                    // dispatch(configActions.setBot2Config({ result: bot2Result }))
                    // if (bot1Config.result > 0) {
                    //     const bot1Result = bot1Config.result - 1;
                    //     dispatch(configActions.setBot1Config({ result: bot1Result }))
                    // }
                } else {
                    bots[1].active = false;
                    collidedBots.push(bots[1])
                    const bot1Result = bot1Config.result + 1;
                    // dispatch(configActions.setBot1Config({ result: bot1Result }))
                    // if (bot2Config.result > 0) {
                    //     const bot2Result = bot2Config.result - 1;
                    //     dispatch(configActions.setBot2Config({ result: bot2Result }))
                    // }
                }
            }
            if (collidedBots.length > 0) {
                setBots((prevBots) => prevBots.filter((bot) => !collidedBots.includes(bot)));
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
                if (newBots.length > 1) {
                    const newBotsAfterCollide = handleCollisions(newBots);
                    return newBotsAfterCollide;
                }
                return newBots;
            });
        }, speed);

        console.log(speed)

        return () => clearInterval(interval);
    }, [speed]);

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



