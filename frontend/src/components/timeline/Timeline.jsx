import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./Timeline.css";
import axios from "axios"
import { AuthContext } from '../../state/AuthContext';
import Pagination from "react-paginate";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  //現在のページ
  const [currentPage, setCurrentPage] = useState(1);
  //1ページあたりに表示される投稿数
  const [postsPerPage] = useState(5);

  const { user } = useContext(AuthContext)
  
  //投稿をとってくる
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
      : await axios.get(`/posts/timeline/${user._id}`);//ホームの場合
      
      setPosts(
        response.data.sort((post1, post2) => {
        return new Date(post2.createdAt) - new Date(post1.createdAt);
      })
      );
      // console.log(posts)
    };
    fetchPosts();
  }, [username]);

  //usernameがあるとき・・・username==user.username
  //ないとき・・・typeがtrue
  const judge = () => {
    if(username){
      if(username==user.username && user.type) {
        return true;
      }else {
        return false;
      }
    } else {
      if(user.type){
        return true;
      } else {
        return false;
      }
    }
  }

  // console.log(posts.length)

  const handlePageChange = (e) => {
    setCurrentPage(e.selected + 1);
  }

  //現在のページに表示する投稿を取得する

  //現在のページの最後の投稿のインデックス
  const indexOfLastPost = currentPage * postsPerPage;
  //現在のページの最初の投稿のインデックス
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //現在のページに表示する投稿の配列
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  return (
    <div className="timeline">
      
      <div className="timelineWrapper">
        { judge()
        ? <Share />
        : ""
        }
        
        {currentPosts.map((post) => (
          <Post post={post} key={post._id} />))
        }
      </div>
      {
        posts.length
        ? (posts 
          ? <Pagination
          previousLabel={"前のページ"}
          nextLabel={"次のページ"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(posts.length/postsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
          : ""
        )
        : <p>まだ投稿がありません</p>
      }
      
    </div>
  )
}
