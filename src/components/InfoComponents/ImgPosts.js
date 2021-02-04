import { data } from "../../utilities/data/Posts";
import { Link } from "react-router-dom";

const ImgPosts = () => {
  return data.map((item, index) => {
    if (item.type === "IMGPOST") {
      const { title, url, image } = item;
      return (
        <Link to={url} key={index}>
          {" "}
          <article className="info__post">
            <img src={image} alt={title} />
          </article>
        </Link>
      );
    }
    return null;
  });
};

export default ImgPosts;
