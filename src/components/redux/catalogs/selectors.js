export const selectItems = (state) => state.catalogs.items;

export const selectCurrentCamper = (state) => state.catalogs.currentCamper;

export const selectIsLoading = (state) => state.catalogs.isLoading;

export const selectError = (state) => state.catalogs.error;
export const selectSearchResults = (state) =>
  state.catalogs?.searchResults || [];

export const selectLocationQuery = (state) => state.catalog.locationQuery;
