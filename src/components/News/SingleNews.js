import React from "react";
import { Link } from "react-router-dom";

const SingleNews = ({
  title,
  image,
  url,
  btnText,
  index,
  curIndex,
  length,
}) => {
  let classes = "next";
  index === curIndex && (classes = "current");
  if (index === curIndex - 1 || (index === length - 1 && curIndex === 0)) {
    classes = "prev";
  }
  return (
    <article className={`news ${classes}`}>
      <img className="news__img" src={image} alt={title} />
      <div className="news__info">
        <h2 className="news__info-title">{title}</h2>
        <Link to={url} className="news__info-btn">
          {btnText}
        </Link>
      </div>
    </article>
  );
};

export default SingleNews;
