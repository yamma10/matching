import React, { useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./Timeline.css";
import axios from "axios"

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts/timeline/63cb6807a1dccc840600291b");
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />))
        }
      </div>
    </div>
  )
}
