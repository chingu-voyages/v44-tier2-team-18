import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { configActions } from "../store/index";
import "./ButtleButton.scss";

export const ButtleButton = () => {
  const dispatch = useAppDispatch();
  const isBattleStart = useAppSelector((state) => state.isBattleStart);
  const startBattle = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(configActions.toggleBattleStart());
  };
  return (
    <>
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) => startBattle(e)}
        className={`buttle-button ${isBattleStart ? "stop" : "battle"}`}>
        {isBattleStart ? "STOP" : "BATTLE"}
      </button>
    </>
  );
};
