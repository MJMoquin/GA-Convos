import React from 'react';
import { Link } from 'react-router-dom'

export default function ShowPostPage(props) {
  
  return (
    <> 
      <div className="row">
        <div class="col s8 offset-s2">
          <div className="card blue-grey darken">
            <div className="card-content white-text">
              <span className="card-title">Post Title
                {/* {props.post.title} */}
              </span>Description:
              {/* <p>{this.post.description}</p> */}
              <div>Comments:
                {/* {props.post.comments.map(comment =>
                  comment
                  )} */}
              </div>
            </div>

            <div class="card-action">
              <Link className="rounded btn-small orange lighten-3 black-text" to={{pathname: '/edit', state: {}}}>
                Edit
              </Link>
              <button type="submit" className="rounded right btn-small red darken-4" onClick={() => this.handleDeletePost(this.post._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}