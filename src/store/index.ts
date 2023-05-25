import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

type eachBotConfig = {
  id: number,
  startingPosition: number[],
  active: boolean,
  botName: string;
  booleanValue: number;
  startingDirection: string;
};
type configContextObj = {
  speed: number;
  operation: string;
  bot1Config: eachBotConfig;
  bot2Config: eachBotConfig;
};
const initialState: configContextObj = {
  speed: 1,
  operation: "",
  bot1Config: {
    id: 1,
    startingPosition: [],
    active: true,
    botName: "",
    booleanValue: 0,
    startingDirection: "",
  },
  bot2Config: {
    id: 2,
    startingPosition: [],
    active: true,
    botName: "",
    booleanValue: 0,
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
      console.log("check action", action)
    },
    setOperation(state, action) {
      state.operation = action.payload;
      console.log('check action', action)
    },
    setBot1Config(state, action) {
      if (action.payload.bot1Config.botName) {
        state.bot1Config.botName = action.payload.bot1Config.botName;
        console.log(action.payload)
      }
      if (action.payload.bot1Config.booleanValue) {
        state.bot1Config.booleanValue = action.payload.bot1Config.booleanValue;
      }
      if (action.payload.bot1Config.startingDirection) {
        state.bot1Config.startingDirection =
          action.payload.bot1Config.startingDirection;
      }
    },
    setBot2Config(state, action) {
      if (action.payload.bot2Config.botName) {
        state.bot2Config.botName = action.payload.bot2Config.botName;
      }
      if (action.payload.bot2Config.booleanValue) {
        state.bot2Config.booleanValue = action.payload.bot2Config.booleanValue;
      }
      if (action.payload.bot2Config.startingDirection) {
        state.bot2Config.startingDirection =
          action.payload.bot2Config.startingDirection;
      }
    },
  },
});

const store = configureStore({
  reducer: botConfigSlice.reducer,
});

export const configActions = botConfigSlice.actions;

export default store;
