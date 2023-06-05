import Cell from "../../Bot/Cell";
import { botMoving } from "../../Bot/BotMoving";
import "./Arena.scss";
import React, { useEffect, useState } from "react";
import { botCollising } from "../../Bot/BotCollising";
import { useAppSelector } from "../../../store";

let genNArray = (n: number) => Array.from({ length: n }, () => ({}));

interface Bot {
  botName: string;
  position: number[] | [];
  active: boolean;
  colour: string;
  booleanValue: string;
  startingDirection: string;
}

function Arena(): JSX.Element {
  const bot1Config = useAppSelector((state) => state.bot1Config);
  const bot2Config = useAppSelector((state) => state.bot2Config);
  const speed = useAppSelector((state) => state.speed);
  const operation = useAppSelector((state) => state.operation);
  const isBattleStart = useAppSelector((state) => state.isBattleStart);

  const [grid, setGrid] = useState(() => genNArray(8).map(() => genNArray(8)));
  const [bots, setBots] = useState<Bot[]>([]);

  const [botsByPosition, setBotsByPosition] = useState<{ [key: string]: Bot }>(
    {}
  );

  useEffect(() => {
    setBotsByPosition({});
    bots.forEach((bot) => {
      if (bot.position.length) {
        setBotsByPosition((prevValue) => ({
          ...prevValue,
          [bot.position.join(":")]: bot,
        }));
      }
    });
  }, [JSON.stringify(bots)]);

  useEffect(() => {
    setBots([bot1Config, bot2Config]);
  }, [bot1Config, bot2Config]);

  useEffect(() => {
    if (isBattleStart) {
      const interval = setInterval(() => {
        setBots((prevBots) => {
          const newBots = prevBots.map((bot) => {
            let newBot = { ...bot };
            const returnValue = botMoving(newBot);
            return (bot = returnValue);
          });
          if (newBots.length > 1) {
            const newBotsAfterCollide = handleCollisions(newBots);
            return newBotsAfterCollide;
          }
          return newBots;
        });
      }, 1000 / speed); //will change to speed later

      return () => clearInterval(interval);
    }
  }, [isBattleStart]);

  const handleCollisions = (bots: Bot[]) => {
    const collidedBots: Bot[] = [];
    if (JSON.stringify(bots[0].position) === JSON.stringify(bots[1].position)) {
      const result = botCollising(
        bots[0].booleanValue,
        bots[1].booleanValue,
        operation
      );
      if (result === 1) {
        const genRandomIndex = Math.floor(Math.random() * 2);
        if (genRandomIndex === 0) {
          bots[0].active = false;
          collidedBots.push(bots[0]);
        } else {
          bots[1].active = false;
          collidedBots.push(bots[1]);
        }
      }
      if (collidedBots.length > 0) {
        setBots((prevBots) =>
          prevBots.filter((bot) => !collidedBots.includes(bot))
        );
      }
    }
    return bots;
  };

  return (
    <div className="board">
      {grid.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((col, j) => {
              return <Cell key={j} bot={botsByPosition[[j, i].join(":")]} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Arena;
