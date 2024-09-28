import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      {" "}
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/catalog'>Catalog</NavLink>
      </nav>
    </div>
  );
};
