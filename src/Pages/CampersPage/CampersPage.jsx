import React from "react";
import Campers from "../../components/Catalog/Campers/Campers";
import { Filter } from "../../components/Catalog/Filter/Filter";
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
            <Filter />
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
