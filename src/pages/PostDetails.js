import {useState} from "react";
import { useLocation } from "react-router";
import { data } from "../utilities/data/Posts";

const mapText = (text) => {
  let mapedText = text.split("\n").map((str, index) => {
    return (
      <p className="post__info-text" key={index}>
        {str}
      </p>
    );
  });

  return mapedText;
};

const PostDetails = () => {
  const { pathname } = useLocation();
  const [post] = useState(data.find((item) => item.url === pathname));

  let image;
  if (post.image) {
    image = (
      <div className="post__img-container">
        <img src={post.image} alt={post.title} className="post__img" />
      </div>
    );
  }
  return (
    <section className="section post">
      <div className="post__center">
        {image}
        <div className="post__info">
          <h1 className="post__info-title">{post.title}</h1>
          <div className="post__info-text-container">{mapText(post.text)}</div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
