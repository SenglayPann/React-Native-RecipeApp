import { configureStore } from "@reduxjs/toolkit";
import homeReducers from "../slices/homeSlice";

export default configureStore({
  reducer:{
    home: homeReducers,
  },
});
