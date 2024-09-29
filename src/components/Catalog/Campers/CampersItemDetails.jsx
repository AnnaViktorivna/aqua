import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCampersItemById } from "../../redux/catalogs/operations";
import css from "./CampersItemDetails.module.css";

import { GrMapLocation } from "react-icons/gr";

import { IoMdStar } from "react-icons/io";
import FormBooking from "./Details/FormBooking";
export const CampersItemDetails = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersItemById(id)).then((response) => {
      setItem(response.payload);
    });
  }, [id, dispatch]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={css.wrap_info_container}>
        <div className={css.wrap_info}>
          <div className={css.w_info_name_price}>
            <h3 className={css.info_text}>{item.name}</h3>
          </div>

          <div className={css.w_info_star_location}>
            <p>
              <IoMdStar className={css.star} />
              {item.rating}({item.reviews.length} Reviews)
            </p>
            <p>
              <GrMapLocation />
              {item.location}
            </p>
          </div>

          <h3 className={css.info_text}>{`\u20AC${item.price}`}</h3>

          <div className={css.wrap_img}>
            {item.gallery.map((img, index) => (
              <img
                key={index}
                className={css.img}
                src={img.thumb}
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>

          <p className={css.description}>{item.description}</p>
        </div>

        <ul>
          <li>
            <NavLink to={"features"}>Features</NavLink>
          </li>
          <li>
            <NavLink to={"reviews"}>Reviews</NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};
