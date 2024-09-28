export const selectItems = (state) => state.catalogs.items;

export const selectCamperById = (state, camperId) =>
  state.catalogs.items.find((item) => item.id === camperId);

export const selectIsLoading = (state) => state.catalogs.isLoading;

export const selectError = (state) => state.catalogs.error;
