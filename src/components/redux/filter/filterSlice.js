import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    searchQuery: "",
    equipment: [],
    camperType: [],
  },
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    updateEquipmentFilter: (state, action) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    updateCamperTypeFilter: (state, action) => {
      const camperType = action.payload;
      if (state.camperType.includes(camperType)) {
        state.camperType = state.camperType.filter(
          (type) => type !== camperType
        );
      } else {
        state.camperType.push(camperType);
      }
    },
  },
});

export const selectVisibleCampers = (state) => {
  const campers = state.catalogs.items;
  const { searchQuery, equipment, camperType } = state.filters;

  let visibleCampers = campers.filter((camper) =>
    camper.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (equipment.length > 0) {
    visibleCampers = visibleCampers.filter((camper) =>
      equipment.every((equip) => {
        if (equip === "AC") return camper.AC;
        if (equip === "Wi-Fi") return camper.WiFi;
        if (equip === "Kitchen") return camper.kitchen;
        if (equip === "Automatic") return camper.transmission === "automatic";
        if (equip === "TV") return camper.TV;
        if (equip === "Bathroom") return camper.bathroom;
        return false;
      })
    );
  }

  if (camperType.length > 0) {
    visibleCampers = visibleCampers.filter((camper) =>
      camperType.every((type) => {
        if (type === "Van") return camper.form === "van";
        if (type === "Fully Integrated")
          return camper.form === "fullyIntegrated";
        if (type === "Alcove") return camper.form === "alcove";
        return false;
      })
    );
  }
  return visibleCampers;
};
export const {
  updateSearchQuery,
  updateEquipmentFilter,
  updateCamperTypeFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
