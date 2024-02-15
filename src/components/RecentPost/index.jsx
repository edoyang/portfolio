import React from 'react';
import { posts } from './index.js';
import './style.scss';
import { Link } from 'react-router-dom';

const RecentPosts = ({ includeDividers = false }) => {
  return (
    <div className="recent-posts">
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <Link to={`/DisplayPost/${post.title}`} className="post">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-details">
              <p className="post-date">{post.date}</p>
              <hr className="vertical-line"/>
              <p className="post-detail">{post.detail}</p>
            </div>
            <p className="post-description">
              {post.description}
            </p>
          </Link>
          {includeDividers && index < posts.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecentPosts;
