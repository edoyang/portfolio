import React from 'react';
import { posts } from './index.js';
import './style.scss';

const RecentPosts = ({ includeDividers = false }) => {
  return (
    <div className="recent-posts">
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-details">
              <p className="post-date">{post.date}</p>
              <hr className="vertical-line"/>
              <p className="post-detail">{post.detail}</p>
            </div>
            <p className="post-description">
              {post.description}
            </p>
          </div>
          {includeDividers && index < posts.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecentPosts;
