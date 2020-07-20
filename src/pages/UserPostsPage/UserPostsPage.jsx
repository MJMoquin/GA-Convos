import React from 'react';
import PostCard from '../../components/PostCard/PostCard';



export default function UserPostsPage(props) {
  // const userPosts = props.posts.filter(post => (props.user._id === post.userId)

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