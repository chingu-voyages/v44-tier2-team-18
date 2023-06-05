
import Cell from '../../Bot/Cell';
import { botMoving } from '../../Bot/BotMoving';
import './Arena.scss';
import React, { useEffect, useState } from 'react';
import { botCollising } from '../../Bot/BotCollising';
import { useAppSelector } from '../../../store';
import Leadboard from '../Leadboard/Leadboard';

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
    const bot1Config = useAppSelector((state) => state.bot1Config);
    const bot2Config = useAppSelector((state) => state.bot2Config);
    const speed = useAppSelector((state) => state.speed) * 500;
    const operation = useAppSelector((state) => state.operation);
    const isBattleStart = useAppSelector((state) => state.isBattleStart);

    const [result1, setResult1] = useState(0);
    const [result2, setResult2] = useState(0);
    const [output, setOutput] = useState<any>(null);

    const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
    const [bots, setBots] = useState<Bot[]>([]);

    useEffect(() => {
        setBots([bot1Config, bot2Config]);
        setOutput(null);
    }, [bot1Config, bot2Config]);

    // botsByPosition allows efficient search of bots based on position
    const botsByPosition: { [key: string]: Bot } = {};
    bots.forEach((bot) => {
        console.log("rendering")
        botsByPosition[bot.position.join(":")] = bot;
    });

    const handleCollisions = (bots: Bot[], currOperation: string) => {
        const collidedBots: Bot[] = [];
        if (JSON.stringify(bots[0].position) === JSON.stringify(bots[1].position)) {
            const collisingResult = botCollising(bots[0].booleanValue, bots[1].booleanValue, currOperation);
            setOutput(collisingResult);

            if (collisingResult === 1) {
                const genRandomIndex = Math.floor(Math.random() * 2);
                if (genRandomIndex === 0) {
                    bots[0].active = false;
                    // if (result1 === 0) {
                    setResult2(prevResult2 => prevResult2 + 1);
                    // } else if (result1 > 0) {
                    //     setResult2(prevResult2 => prevResult2 + 1);
                    //     setResult1(prevResult1 => prevResult1 - 1)
                    // }
                    collidedBots.push(bots[0])
                } else {
                    bots[1].active = false;
                    // if (result2 === 0) {
                    setResult1(prevResult1 => prevResult1 + 1);
                    // } else if (result2 > 0) {
                    //     setResult1(prevResult1 => prevResult1 + 1);
                    //     setResult2(prevResult2 => prevResult2 - 1)
                    // }
                    collidedBots.push(bots[1])
                }
            }
            if (collidedBots.length > 0) {
                setBots((prevBots) => prevBots.filter((bot) => !collidedBots.includes(bot)));
            }
        }
        return bots;
    }

    useEffect(() => {
        if (isBattleStart) {
            const interval = setInterval(() => {
                setBots((prevBots) => {
                    const newBots = prevBots.map((bot) => {
                        let newBot = { ...bot }
                        const returnValue = botMoving(newBot);
                        return bot = returnValue;
                    });
                    if (newBots.length > 1) {
                        const newBotsAfterCollide = handleCollisions(newBots, operation);
                        return newBotsAfterCollide;
                    }
                    return newBots;
                });
            }, speed);

            return () => clearInterval(interval);
        }
    }, [speed, operation, isBattleStart]);

    return (
        <div className='game-container'>
            <Leadboard result1={result1} result2={result2} output={output} />
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
        </div>
    )
}

export default Arena;



