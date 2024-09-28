import React from "react";
import Campers from "../../components/Catalog/Campers/Campers";
import { Location } from "../../components/Catalog/Location/Location";
import { Filters } from "../../components/Catalog/Filters/Filters";
import css from "./CampersPage.module.css";
import { Outlet, useParams } from "react-router-dom";

export const CampersPage = () => {
  const { id } = useParams();
  return (
    <div className={css.campers_page}>
      {id ? (
        <Outlet />
      ) : (
        <>
          {" "}
          <div className={css.wrap_q}>
            <Outlet />
            <Location />
            <Filters />
          </div>
          <div className={css.wrap_c}>
            {" "}
            <Campers />
          </div>
        </>
      )}
    </div>
  );
};
