import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

type eachBotConfig = {
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
    botName: "",
    booleanValue: 0,
    startingDirection: "",
  },
  bot2Config: {
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
    },
    setOperation(state, action) {
      state.operation = action.payload;
    },
    setBot1Config(state, action) {
      console.log(action);
      if (action.payload.botName) {
        state.bot1Config.botName = action.payload.botName;
      }
      if (action.payload.booleanValue) {
        state.bot1Config.booleanValue = action.payload.booleanValue;
      }
      if (action.payload.startingDirection) {
        state.bot1Config.startingDirection = action.payload.startingDirection;
      }
    },
    setBot2Config(state, action) {
      if (action.payload.botName) {
        state.bot2Config.botName = action.payload.botName;
      }
      if (action.payload.booleanValue) {
        state.bot2Config.booleanValue = action.payload.booleanValue;
      }
      if (action.payload.startingDirection) {
        state.bot2Config.startingDirection = action.payload.startingDirection;
      }
    },
  },
});

const store = configureStore({
  reducer: botConfigSlice.reducer,
});

export const configActions = botConfigSlice.actions;

export default store;
