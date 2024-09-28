import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCatalogs = createAsyncThunk(
  "catalogs/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// /campers/:id

export const fetchCampersItemById = createAsyncThunk(
  "catalogs/id",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`, id);

      const camper = response.data.items.find((item) => item.id === id);
      console.log(camper);
      return camper;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
