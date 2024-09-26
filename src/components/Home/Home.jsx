import React from "react";
// import picture from '../../assets/Picture.png'
import h from "./Home.module.css";

export const Home = () => {
  return (
    <div className={h.container}>
      <div className={h.wrap}>
        <h1 className={h.title}>Campers of your dreams</h1>
        <h2 className={h.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <button
          className={h.button}
          onClick={() => (window.location.href = "/catalog")}
        >
          View Now
        </button>
      </div>
    </div>
  );
};
