import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectItems } from "../../redux/catalogs/selectors";

export const CampersItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectItems.find((item) => item.id === id));

  useEffect(() => {
    dispatch(fetchCampersItemById(id));
  }, [dispatch, id]);

  console.log(id);

  return (
    <div>
      <h2>{camper.name}</h2>
      <h2>Price</h2>
      <h2>Rating</h2>
      <h2>Location</h2>
      <img></img>
      <h2>Description</h2>
      {/* // Features
          //reviews */}
    </div>
  );
};
