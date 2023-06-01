
import Cell from '../../Bot/Cell';
import { botMoving } from '../../Bot/BotMoving';
import './Arena.scss';
import React, { useEffect, useState } from 'react';
import { botCollising } from '../../Bot/BotCollising';
import { useAppSelector } from '../../../store';
import Leadboard from '../Leadboard/Leadboard';
// import { configActions } from '../../../store';


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

    const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
    const [bots, setBots] = useState<Bot[]>([]);

    const bot1Config = useAppSelector((state) => state.bot1Config);
    const bot2Config = useAppSelector((state) => state.bot2Config);
    const speed = useAppSelector((state) => state.speed) * 500;
    const operation = useAppSelector((state) => state.operation);

    const [result1, setResult1] = useState(0);
    const [result2, setResult2] = useState(0);
    const [output, setOutput] = useState<any>(null);

    // useEffect(() => {
    //     props.setResultBot1(setResult1);
    //     props.setResultBot2(setResult2);
    //     props.setOutput(setNewOutput);
    // }, [setNewOutput])

    useEffect(() => {
        setBots([bot1Config, bot2Config]);
    }, [bot1Config, bot2Config]);

    // botsByPosition allows efficient search of bots based on position
    const botsByPosition: { [key: string]: Bot } = {};
    bots.forEach((bot) => {
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
                    if (result1 === 0) {
                        setResult2(result2 + 1);
                    } else if (result1 > 0) {
                        setResult2(result2 + 1);
                        setResult1(result1 - 1)
                    }
                    collidedBots.push(bots[0])
                    // const bot2Result = bot2Config.result + 1;
                    // dispatch(configActions.setBot2Config({ result: bot2Result }))
                    // if (bot1Config.result > 0) {
                    //     const bot1Result = bot1Config.result - 1;
                    //     dispatch(configActions.setBot1Config({ result: bot1Result }))
                    // }
                } else {
                    bots[1].active = false;
                    if (result2 === 0) {
                        setResult1(result1 + 1);
                    } else if (result2 > 0) {
                        setResult1(result1 + 1);
                        setResult2(result2 - 1)
                    }
                    collidedBots.push(bots[1])
                    // const bot1Result = bot1Config.result + 1;
                    // dispatch(configActions.setBot1Config({ result: bot1Result }))
                    // if (bot2Config.result > 0) {
                    //     const bot2Result = bot2Config.result - 1;
                    //     dispatch(configActions.setBot2Config({ result: bot2Result }))
                    // }
                }
            }
            if (collidedBots.length > 0) {
                setBots((prevBots) => prevBots.filter((bot) => !collidedBots.includes(bot)));
                // if (bots[0].colour === "Red") {
                //     if (result2 === 0) {
                //         setResult1(result1 + 1);
                //     } else if (result2 > 0) {
                //         setResult1(result1 + 1);
                //         setResult2(result2 - 1)
                //     }
                // }
                // if (bots[0].colour === "Blue") {
                //     if (result1 === 0) {
                //         setResult2(result2 + 1);
                //     } else if (result1 > 0) {
                //         setResult2(result2 + 1);
                //         setResult1(result1 - 1)
                //     }
                // }
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
                    const newBotsAfterCollide = handleCollisions(newBots, operation);

                    // if (newBotsAfterCollide.length = 1) {
                    //     if (newBotsAfterCollide[0].colour === 'Red') {
                    // if (bot2Config.result === 0) {
                    //     dispatch(configActions.setBot1Config({ result: bot1Config.result + 1 }))
                    // } else if (bot2Config.result > 0) {
                    //     dispatch(configActions.setBot1Config({ result: bot1Config.result + 1 }))
                    //     dispatch(configActions.setBot2Config({ result: bot2Config.result - 1 }))
                    // }
                    //     }
                    //     if (newBotsAfterCollide[0].colour === 'Blue') {
                    // if (bot1Config.result === 0) {
                    //     dispatch(configActions.setBot2Config({ result: bot2Config.result + 1 }))
                    // } else if (bot1Config.result > 0) {
                    //     dispatch(configActions.setBot2Config({ result: bot2Config.result + 1 }))
                    //     dispatch(configActions.setBot1Config({ result: bot1Config.result - 1 }))
                    // }
                    //     }
                    // }
                    return newBotsAfterCollide;
                }
                return newBots;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [speed, operation]);

    return (
        <>
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
        </>
    )
}

export default Arena;



