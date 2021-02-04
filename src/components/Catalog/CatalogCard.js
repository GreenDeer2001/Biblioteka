import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";

const CatalogCard = ({ title, image, id, isBorrowed, author }) => {



  const displayAvaibility = (
    <span>
      {isBorrowed ? <FaTimes className="red " /> : <MdDone className="green" />}
    </span>
  );

  return (
    <article className="catalog__book">
      <div className="catalog__book-imgContainer">
        <img loading="lazy" src={image} alt={title} />
      </div>
      <div className="catalog__book__info">
        <h4>{title}</h4>
        <p>{author}</p>
        <p className="catalog__book__info-rent">Dostępna:
        {displayAvaibility}</p>
      </div>
      <Link className="catalog__btn" to={`/katalog/${id}`}>
        Szczegóły
      </Link>
    </article>
  );
};

export default CatalogCard;
