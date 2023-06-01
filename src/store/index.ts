import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export type eachBotConfig = {
  botName: string;
  position: number[];
  active: boolean;
  colour: string;
  booleanValue: string;
  startingDirection: string;
  // result: number;
};
type configContextObj = {
  speed: number;
  operation: string;
  // output: number | null;
  bot1Config: eachBotConfig;
  bot2Config: eachBotConfig;
};

const initialState: configContextObj = {
  speed: 1,
  operation: "",
  // output: null,
  bot1Config: {
    botName: "",
    position: [0, 0],
    active: false,
    colour: "Red",
    booleanValue: "",
    startingDirection: "",
    // result: 0
  },
  bot2Config: {
    botName: "",
    position: [0, 0],
    active: false,
    colour: "Blue",
    booleanValue: "",
    startingDirection: "",
    // result: 0
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
      // console.log("check action", action)
    },
    setOperation(state, action) {
      state.operation = action.payload;
      // console.log('check action', action)
    },
    // setOutput(state, action) {
    //   state.output = action.payload;
    // },
    setBot1Config(state, action) {
      if (action.payload.botName) {
        state.bot1Config.botName = action.payload.botName;
      }
      if (action.payload.booleanValue) {
        state.bot1Config.booleanValue = action.payload.booleanValue;
      }
      if (action.payload.startingDirection) {
        state.bot1Config.startingDirection = action.payload.startingDirection;
      }
      if (action.payload.position) {
        state.bot1Config.position = action.payload.position;
      }
      if (action.payload.active) {
        state.bot1Config.active = action.payload.active;
      }
      // if (action.payload.result) {
      //   state.bot1Config.result = action.payload.result;
      // }
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
      if (action.payload.position) {
        state.bot2Config.position = action.payload.position;
      }
      if (action.payload.active) {
        state.bot2Config.active = action.payload.active;
      }
      // if (action.payload.result) {
      //   state.bot2Config.result = action.payload.result;
      // }
    },
  },
});

const store = configureStore({
  reducer: botConfigSlice.reducer,
});

export const configActions = botConfigSlice.actions;

export default store;