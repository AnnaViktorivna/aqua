import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersItemById, fetchCatalogs } from "./operations";

// {
//     "id": "1",
//     "name": "Road Bear C 23-25",
//     "price": 10000,
//     "rating": 4.5,
//     "location": "Ukraine, Kyiv",
//     "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//     "form": "alcove",
//     "length": "7.3m",
//     "width": "2.65m",
//     "height": "3.65m",
//     "tank": "208l",
//     "consumption": "30l/100km",
//     "transmission": "automatic",
//     "engine": "diesel",
//     "AC": true,
//     "bathroom": true,
//     "kitchen": false,
//     "TV": true,
//     "radio": true,
//     "refrigerator": false,
//     "microwave": true,
//     "gas": false,
//     "water": true,
//     "gallery": [
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//       },
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//       },
//       {
//         "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//         "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//       }
//     ],
//     "reviews": [
//       {
//         "reviewer_name": "Alice",
//         "reviewer_rating": 5,
//         "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//       },
//       {
//         "reviewer_name": "Bob",
//         "reviewer_rating": 4,
//         "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//       }
//     ]
//   },

const catalogs = createSlice({
  name: "catalogs",
  initialState: {
    items: [],
    currentCamper: null,
    searchResults: [],
    locationQuery: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.locationQuery = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        console.log(action);
      })
      .addCase(fetchCatalogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action);
      })
      .addCase(fetchCatalogs.pending, (state, action) => {
        state.isLoading = true;
        console.log(action);
      })
      .addCase(fetchCampersItemById.fulfilled, (state, action) => {
        state.currentCamper = action.payload;
      });
  },
});

export const { setSearchQuery, setSearchResults } = catalogs.actions;
export const catalogsReducer = catalogs.reducer;
