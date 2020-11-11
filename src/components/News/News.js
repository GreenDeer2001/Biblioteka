import React from "react";
import { data } from "../../utilities/data/Posts";
import SingleNews from "./SingleNews";

const News = () => {
  const [current, setCurrent] = React.useState(1);
  const [move , setMove] = React.useState(true);
 const [posts] = React.useState(data.filter(i => i.type === "NEWSPOST"))




  React.useEffect(() => {
    if(move){
      const interval = setInterval(()=>{
       let index = current+1;
       (index > posts.length-1) && (index=0);
       setCurrent(index)
      },6000);
      return () => {
        clearInterval(interval)
      }
    }
  }, [current,move,posts])

  return (
    <div className="news-section" >
      <div className="news-section__center" onMouseOver={()=>setMove(false)} onMouseOut={()=>setMove(true)}>
      {posts.map((item, index) => {   
          return <SingleNews key={index} {...item} index={index} length={posts.length} curIndex={current}/>
      })}
      </div>
    </div>
  );
};

export default News;
