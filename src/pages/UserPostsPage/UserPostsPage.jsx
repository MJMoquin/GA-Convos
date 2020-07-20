import React from 'react';
import PostCard from '../../components/PostCard/PostCard';
import './UserPostsPage.css'

export default function UserPostsPage(props) {
  
  return (
    <> 
      <div className='PostList-grid'>
        {props.posts.filter(post => (props.user._id === post.userId)).map(post => 
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