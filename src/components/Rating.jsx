import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
  const emptyStar = 5 - rating;

  const fullStars = [];
  const emptyStars = [];

  // Génération des étoiles pleines
  for (let i = 0; i < rating; i++) {
    fullStars.push(<FontAwesomeIcon key={i} icon={faStar} className="star full-star" />);
  }

  // Génération des étoiles vides
  for (let i = 0; i < emptyStar; i++) {
    emptyStars.push(<FontAwesomeIcon key={i} icon={faStar} className="star empty-star" />);
  }

  return (
    <div className="rating">
      {fullStars}
      {emptyStars}
    </div>
  );
}

export default Rating;
