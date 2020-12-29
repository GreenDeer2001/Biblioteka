import React from 'react'
import QuickLinks from "../components/InfoComponents/QuickLinks";
import ImgPosts from "../components/InfoComponents/ImgPosts";
import Posts from "../components/InfoComponents/Posts";

const Info = () => {
    return (
       <section className="info-section">
          <QuickLinks/>
          <ImgPosts/>
          <Posts/>
       </section>
    )
}

export default Info
