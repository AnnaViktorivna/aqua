import React from "react";
import Campers from "../../components/Catalog/Campers/Campers";
import { Location } from "../../components/Catalog/Location/Location";
import { Filters } from "../../components/Catalog/Filters/Filters";
import css from "./CampersPage.module.css";

export const CampersPage = () => {
  return (
    <div className={css.campers_page}>
      <div className={css.wrap_q}>
        <Location />
        <Filters />
      </div>
      <div className={css.wrap_c}>
        {" "}
        <Campers />
      </div>
    </div>
  );
};
