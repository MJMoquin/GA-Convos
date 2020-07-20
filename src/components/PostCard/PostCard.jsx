import React from 'react';
import { Link } from 'react-router-dom'
import './PostCard.css'


export default function PostCard({ post, user, handleDeletePost }) {
  let card = (user._id === post.userId) ?
    <>
      <div className="row">
        <div class="col s10 offset-s1">
          <div className="card blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">
                {post.title}
              </span>
              <p>{post.description}</p>
            </div>

            <div class="card-action">
              <Link className="btn-small waves-effect waves-light orange lighten-3" to={{pathname: '/edit',state: {post}}}>
                Edit Convo
              </Link>
              <button type="submit" className="btn-small waves-effect waves-light red darken-4" onClick={() => handleDeletePost(post._id)}>
                Delete Convo
              </button>
            </div>
          </div>
        </div>
      </div>      
    </>
    :
    <>
      <div className="row">
        <div class="col s10 offset-s1">
          <div className="card blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">
                {post.title}
              </span>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  return(
    <>
      {card}
    </>
  ) 
}

