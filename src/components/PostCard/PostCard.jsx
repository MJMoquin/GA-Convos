import React from 'react';
import { Link } from 'react-router-dom'
import './PostCard.css'


export default function PostCard({ post }) {
  // 
  //   <>
  //     <div className="row">
  //       <div class="col s10 offset-s1">
  //         <div className="card blue-grey darken">

  //           <div className="card-content white-text">
  //             <span className="card-title">
  //               <Link to={{pathname: `/${post._id}`, state: {post}}}>
  //                 {post.title}
  //               </Link>
  //             </span>
  //             <p className="post-text">{post.description}</p>
  //           </div>

  //           <div class="card-action">
  //             <Link className="rounded btn-small orange lighten-3 black-text" to={{pathname: '/edit', state: {post}}}>
  //               Edit
  //             </Link>
  //             <button type="submit" className="rounded right btn-small red darken-4" onClick={() => handleDeletePost(post._id)}>
  //               Delete
  //             </button>
  //           </div>
            
  //         </div>
  //       </div>
  //     </div>      
  //   </>
  //   :
  //   <>
  //     <div className="row">
  //       <div class="col s10 offset-s1">
  //         <div className="card blue-grey darken">
  //           <div className="card-content white-text">
  //             <span className="card-title">
  //               {post.title}
  //             </span>
  //             <p>{post.description}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  return(
    <>
      <div className="row">
        <div className="col s10 offset-s1">
          <div className="card blue-grey darken">
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

