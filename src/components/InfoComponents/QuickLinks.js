import React from "react";
import { Links } from "../../utilities/data/links";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quickLinks">
      {Links.map((item) => {
        const { id, title, description, url, icon, bgColor } = item;
        if (item.type === "DOWLOAD") {
          return (
            <a key={id} className="quickLink-link" href={url} download="regulamin">
              <article className="quickLink" style={{ backgroundColor: bgColor }}>
                <h4 className="quickLink__title">{title}</h4>
                <span className="quickLink__icon">{icon}</span>
                <p className="quickLink__description">{description}</p>
              </article>
            </a>
          );
        }
        return (
          <Link key={id} className="quickLink-link" to={url}>
            <article className="quickLink" style={{ backgroundColor: bgColor }}>
              <h4 className="quickLink__title">{title}</h4>
              <span className="quickLink__icon">{icon}</span>
              <p className="quickLink__description">{description}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
