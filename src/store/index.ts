import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export type eachBotConfig = {
  botName: string;
  position: number[] | [];
  active: boolean;
  colour: string;
  booleanValue: string;
  startingDirection: string;
};
type configContextObj = {
  speed: number;
  operation: string;
  isBattleStart: boolean;
  bot1Config: eachBotConfig;
  bot2Config: eachBotConfig;
};

const initialState: configContextObj = {
  speed: 1,
  operation: "and",
  isBattleStart: false,
  bot1Config: {
    botName: "",
    position: [],
    active: false,
    colour: "Red",
    booleanValue: "",
    startingDirection: "",
  },
  bot2Config: {
    botName: "",
    position: [],
    active: false,
    colour: "Blue",
    booleanValue: "",
    startingDirection: "",
  },
};
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const botConfigSlice = createSlice({
  name: "botConfig",
  initialState: initialState,
  reducers: {
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    setBotConfig: (
      state,
      action: PayloadAction<{ num: number; config: Partial<eachBotConfig> }>
    ) => {
      if (action.payload.num === 1) {
        state.bot1Config = { ...state.bot1Config, ...action.payload.config };
      } else if (action.payload.num === 2) {
        state.bot2Config = { ...state.bot2Config, ...action.payload.config };
      }
    },
    toggleBattleStart: (state) => {
      state.isBattleStart = !state.isBattleStart;
    },
  },
});

const store = configureStore({
  reducer: botConfigSlice.reducer,
});

export const configActions = botConfigSlice.actions;

export default store;
