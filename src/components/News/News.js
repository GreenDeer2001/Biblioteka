import {useState,useEffect} from "react";
import { data } from "../../utilities/data/Posts";
import SingleNews from "./SingleNews";

const News = () => {
  const [current, setCurrent] = useState(1);
  const [posts] = useState(data.filter((i) => i.type === "NEWSPOST"));

  useEffect(() => {
      const interval = setInterval(() => {
        let index = current + 1;
        index > posts.length - 1 && (index = 0);
        setCurrent(index);
      }, 6000);
      return () => {
        clearInterval(interval);
      };
  }, [current, posts]);

  return (
    <div className="news-section">
      <div
        className="news-section__center"
      >
        {posts.map((item, index) => {
          return (
            <SingleNews
              key={index}
              {...item}
              index={index}
              length={posts.length}
              curIndex={current}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
