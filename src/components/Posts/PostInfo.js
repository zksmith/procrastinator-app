import React from 'react';

const PostInfo = ({ item, index, bookmarks = false }) => {
  if (bookmarks) {
    return (
      <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{item.title}</p>
          <div className='post-info'>
            <span>Reddit</span>
            <span>Bookmarked Jan 1</span>
          </div>
        </li>
      </a>
    );
  } else if (item.source === 'Reddit' || item.source === 'Hacker News') {
    return (
      <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{item.title}</p>
          <div className='post-info'>
            <span>{item.source}</span>
            <span>{item.upvotes} pts</span>
            <span>by {item.author}</span>
            <span>{item.comments} comments</span>
          </div>
        </li>
      </a>
    );
  } else if (item.source === 'Github Trending') {
    return (
      <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{item.title}</p>
          <div className='post-info'>
            <span>{item.source}</span>
            <span>by {item.author}</span>
            <span>{item.stars} stars</span>
            <span>{item.forks} forks</span>
          </div>
        </li>
      </a>
    );
  } else if (item.source === 'New York Times') {
    return (
      <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{item.title}</p>
          <div className='post-info'>
            <span>{item.source}</span>
            <span>{item.author}</span>
            <span>{item.section.toUpperCase()}</span>
          </div>
        </li>
      </a>
    );
  } else {
    return (
      <a href={item.url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{item.title}</p>
          <div className='post-info'>
            <span>Reddit</span>
            <span>Bookmarked Jan 1</span>
          </div>
        </li>
      </a>
    );
  }
};

export default PostInfo;
