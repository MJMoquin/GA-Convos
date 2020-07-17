import React from 'react';
import './PostCard.css'

export default function PostCard({ post }) {
  return(
    <>
      <div className="card">
        <div className="card-content">
          <span className="card-title activator">
            {post.title}
          </span>
          <p>{post.description}</p>
        </div>
      </div>
    </>
  ) 
}

