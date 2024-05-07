import userData from "./userData";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: userData,
  },
});

export default store;
