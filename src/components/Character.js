import React from "react";
import { Link } from "react-router-dom";

const Character = ({ id, image, name }) => {
  return (
    <article className="">
      <Link to={`/characters/${id}`} className="character">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <div className="character-footer">
          <h3>{name}</h3>
          <a href="" className="btn-primary">
            Details
          </a>
        </div>
      </Link>
    </article>
  );
};

export default Character;
