import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "../features/plants/plantSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    plants: plantsReducer,
  },
});
