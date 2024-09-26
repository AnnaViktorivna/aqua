import React from "react";
import css from "./Location.module.css";

import { GrMapLocation } from "react-icons/gr";

export const Location = () => {
  return (
    <div className={css.location}>
      <h2 className={css.title}>Location</h2>
      <div>
        <GrMapLocation />
        <input
          className={css.input}
          type='text'
          placeholder={`Search your location...`}
        />
      </div>
    </div>
  );
};
