import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import './PostList.css';

export default function PostList(props) {
  return (
    <> 
      <div className='PostList-grid'>
        {props.posts.map(post =>
          <PostCard 
            key={post._id}
            post={post}
            user={props.user}
            handleDeletePost={props.handleDeletePost}
          />
        )}
      </div>
    </>
  );
}