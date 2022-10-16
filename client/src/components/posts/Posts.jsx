import Post from "../post/Post";
import "./posts.css";
import React, { useEffect, useState } from 'react';  
import ReactDOM from 'react-dom';  
import ReactPaginate from 'react-paginate';  


export default function Posts({ posts }) {
 
  return (
    <>
    
      <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>

    </>   
  );
}
