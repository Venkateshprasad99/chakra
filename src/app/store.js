import {configureStore} from "@reduxjs/toolkit";
import StateReducer from  "../Feature/Slice"
export const store = configureStore({

  reducer: {
    State:StateReducer,
  },
});