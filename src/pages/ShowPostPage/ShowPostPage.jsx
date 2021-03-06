import React from 'react';
import { Link } from 'react-router-dom'

export default function ShowPostPage(props) {

  const post = props.location.state.post

    let card = (props.user && props.user._id === post.userId) ?
    <> 
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">
                {post.title}
              </span><hr></hr>
              <p>{post.description}</p><hr></hr>
              {/* Future comments code
              <Link className="rounded btn-small" to={{pathname: '/comment', state: {post}}}>
                Comment
              </Link>
              <div>
                {post.comments.map(comment =>
                  <div>{comment}</div>
                )}
              </div> */}
            </div>
            <div class="card-action">
              <Link className="rounded btn-small orange lighten-3 black-text" to={{pathname: '/edit', state: {post}}}>
                Edit
              </Link>
              <button type="submit" className="rounded right btn-small red darken-4" onClick={() => props.handleDeletePost(post._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    :
    <> 
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">
                {post.title}
              </span><hr></hr>
              <p>{post.description}</p><hr></hr>
              {/* Future comments code
              <Link className="rounded btn-small" to={{pathname: '/comment', state: {post}}}>
                Comment
              </Link>
              <div>
                <h6>Comments:</h6>
                {post.comments.map(comment =>
                  <div>{comment}</div>
                  )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>

  return (
    <>
    {card}
    </>
  )

}