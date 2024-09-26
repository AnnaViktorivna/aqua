import React from "react";
import css from "./Filters.module.css";

export const Filters = () => {
  return (
    <div>
      <p className={css.title}>Filters</p>
      <div>
        <h2 className={css.title}>Vehicle equipment </h2>
        <ul>
          <li>Automatic</li>
        </ul>
      </div>
      <div>
        <h2 className={css.title}>Vehicle type </h2>
        <ul>
          <li>Automatic</li>
        </ul>
      </div>
      <button className={css.button}>Search</button>
    </div>
  );
};
