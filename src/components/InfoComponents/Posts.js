import { data } from "../../utilities/data/Posts";

function Posts() {
  return data.map((item, index) => {
    if(item.type === "POST"){
      const { title, text } = item;
      return (
        <article key={index} className="info__post">
        <div className="info__post-center">
          <h1 className="info__post-title">{title}</h1>
          <p className="info__post-text">{text}</p>
        </div>
      </article>
    );
  }
  return null
  });
}

export default Posts;
