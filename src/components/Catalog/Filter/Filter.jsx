import React, { useId, useState } from "react";
import css from "./Filter.module.css";
import { GrMapLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCamperTypeFilter,
  updateEquipmentFilter,
  updateSearchQuery,
} from "../../redux/filter/filterSlice";

import { FaWind } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { BsDroplet } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { BsGrid3X3Gap } from "react-icons/bs";

export const Filter = () => {
  const id = useId();
  const dispatch = useDispatch();

  const filterSearch = useSelector((state) => state.filters.searchQuery);

  const selectedEquipment = useSelector((state) => state.filters.equipment);
  const equipmentOptions = ["AC", "Kitchen", "Automatic", "TV", "Bathroom"];

  const equipmentIcons = {
    AC: <FaWind />,
    Automatic: <BsDiagram3 />,
    Kitchen: <BsCupHot />,
    TV: <IoMdTv />,
    Bathroom: <BsDroplet />,
  };

  const handleEquipmentChange = (equipment) => {
    dispatch(updateEquipmentFilter(equipment));
  };

  const selectedTypes = useSelector((state) => state.filters.camperType);
  const camperTypeOptions = ["Van", "Fully Integrated", "Alcove"];
  const camperTypeIcons = {
    Van: <BsGrid1X2 />,
    "Fully Integrated": <IoGridOutline />,
    Alcove: <BsGrid3X3Gap />,
  };

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      dispatch(updateCamperTypeFilter(selectedTypes.filter((t) => t !== type)));
    } else {
      dispatch(updateCamperTypeFilter(type));
    }
  };
  return (
    <div className={css.wrap_filter}>
      <div className={css.location}>
        <h2 className={css.title}>Location</h2>
        <div style={{ position: "relative" }}>
          <input
            id={id}
            className={css.input}
            type='text'
            placeholder='Search your location...'
            value={filterSearch}
            onChange={(e) => dispatch(updateSearchQuery(e.target.value))}
          />
          <div className={css.l_icon}>
            <GrMapLocation />
          </div>
        </div>
      </div>

      <div className={css.equipment}>
        <h2 className={css.title}>Vehicle equipment</h2>
        <div className={css.line}></div>
        <div className={css.w_filter}>
          {equipmentOptions.map((equipment) => {
            const Icon = equipmentIcons[equipment];
            return (
              <div key={equipment} className={css.filter}>
                <button
                  className={css.btnFilter}
                  type='button'
                  onClick={() => handleEquipmentChange(equipment)}
                >
                  {Icon && <span className={css.icon}>{Icon}</span>}
                  {equipment}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className={css.title}>Vehicle type</h2>
        <div className={css.line}></div>
        <div className={css.w_filter}>
          {" "}
          {camperTypeOptions.map((type) => {
            const Icon = camperTypeIcons[type];
            return (
              <div key={type} className={css.filter}>
                <button
                  className={css.btnFilter}
                  type='button'
                  onClick={() => handleTypeChange(type)}
                >
                  {Icon && <span className={css.icon}>{Icon}</span>}
                  {type}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <button className={css.button}>Search</button>
    </div>
  );
};
