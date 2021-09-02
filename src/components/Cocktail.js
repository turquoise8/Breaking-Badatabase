import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name }) => {
  return (
    <article className="">
      <Link to={`/characters/${id}`} className="cocktail">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <a href="" className="btn-primary">
            Details
          </a>
        </div>
      </Link>
    </article>
  );
};

export default Cocktail;
