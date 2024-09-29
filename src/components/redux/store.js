import { configureStore } from "@reduxjs/toolkit";
import { catalogsReducer } from "./catalogs/slice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    catalogs: catalogsReducer,
    filters: filterReducer,
  },
});
