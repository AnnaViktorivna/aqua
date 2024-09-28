import React, { useState } from "react";
import css from "./Location.module.css";
import { GrMapLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  selectSearchResults,
} from "../../redux/catalogs/selectors";
import { setSearchQuery, setSearchResults } from "../../redux/catalogs/slice";

export const Location = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const searchResults = useSelector(selectSearchResults);
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    dispatch(setSearchQuery(e.target.value)); // Оновлює пошуковий запит у Redux
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Фільтрація локацій за введеним текстом
    const results = items.filter((item) =>
      item.location.toLowerCase().includes(location.toLowerCase())
    );
    dispatch(setSearchResults(results)); // Зберігає результати пошуку в Redux
  };

  return (
    <div className={css.location}>
      <h2 className={css.title}>Location</h2>
      <div>
        <GrMapLocation />
        <form onSubmit={handleSearch}>
          <input
            className={css.input}
            type='text'
            placeholder='Search your location...'
            value={location}
            onChange={handleInputChange}
          />
        </form>
        <div>
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}>{item.location}</li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};
