import { useState,useEffect } from "react"
import React from 'react'
import axios from "axios"
const feed = () => {


    useEffect(()=>{
        axios.get("http://localhost:3000/get_posts")
        .then((res)=>{
            setPosts(res.data.posts);
        })
    },[])
  const [posts, setPosts] = useState([

      {
    _id: "64a0e5f1b3c2f1a2b3c4d5e6",
    image: "https://example.com/image.jpg",
    caption: "This is a sample post",

  }
  ])


  return (
    <section className="feedSection">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Feed</h1>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.image} alt="Post" className="postimg " />
          <p>{post.caption}</p>
        </div>
      ))}
    </section>
  )
}

export default feed
