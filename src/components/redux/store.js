import { configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogs/slice";


export const store = configureStore({
    reducer: {
      catalogs: catalogsReducer,
    //   filters: filtersReducer,
    }
  });