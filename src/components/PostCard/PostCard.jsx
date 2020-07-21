import React from 'react';
import { Link } from 'react-router-dom'
import './PostCard.css'


export default function PostCard({ post }) {
  
  return(
    <>
      <div className="row">
        <div className="col s10 offset-s1">
          <div className="card small blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">
                {post.title}
              </span>
              <p>{post.description}</p>
            </div>
            <div class="card-action">
              <Link className="rounded btn-small orange lighten-3 black-text" to={{pathname: `/post`, state: {post}}}>
                Show Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

