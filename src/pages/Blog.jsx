import React from 'react';
import RecentPosts from '../components/RecentPost/index.jsx';
import './Blog.scss';

const Blog = () => {
  return (
    <div className='blog-page sliding-right'>
      <h1>Blog</h1>
      <RecentPosts includeDividers={true} />
    </div>
  );
}

export default Blog;
