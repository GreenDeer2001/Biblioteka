import React from 'react'
import QuickLinks from "../components/InfoComponents/QuickLinks";
import ImgPosts from "../components/InfoComponents/ImgPosts";
import Posts from "../components/InfoComponents/Posts";
import Video from '../components/InfoComponents/Video';

const Info = () => {
    return (
       <section className="info-section">


          <QuickLinks/>
          <ImgPosts/>
          <Posts/>
          <Video/>

       </section>
    )
}

export default Info
