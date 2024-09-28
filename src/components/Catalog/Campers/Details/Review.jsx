import React from "react";
import { selectCurrentCamper } from "../../../redux/catalogs/selectors";
import { useSelector } from "react-redux";

import { FaStar } from "react-icons/fa6";
<FaStar />;

const Review = () => {
  const item = useSelector(selectCurrentCamper);

  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div>
        {Array.from({ length: totalStars }, (_, index) => (
          <FaStar
            key={index}
            size={20} // Додайте розмір іконки (якщо потрібно)
            style={{
              color: index < rating ? "gold" : "lightgray", // Перевірка рейтингу для кольору
              marginRight: "5px", // Відступи між зірками
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        {item.reviews.map((reviewer, index) => (
          <li key={index}>
            <div>
              {reviewer.reviewer_name.charAt(0).toUpperCase()}
              <h3>{reviewer.reviewer_name}</h3>
            </div>

            <div>{renderStars(reviewer.reviewer_rating)}</div>
            <p>{reviewer.comment}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Review;
