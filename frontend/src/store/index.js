import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";


const bazaarStore = configureStore({
    reducer: {
      item:itemSlice.reducer
    },
  });
  
  export default bazaarStore;