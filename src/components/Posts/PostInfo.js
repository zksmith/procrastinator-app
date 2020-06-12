import React from 'react';

const PostInfo = ({ item, index, bookmarks = false, addBookmark }) => {
  const {
    source,
    url,
    author,
    title,
    stars,
    forks,
    section,
    comments,
    upvotes,
    date,
  } = item;

  if (bookmarks) {
    const jsDate = new Date(date);
    return (
      <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
        <li>
          <p className='post-title'>{title}</p>
          <div className='post-info'>
            <span>{source}</span>
            <span>bookmarked on {jsDate.toLocaleDateString()}</span>
          </div>
        </li>
      </a>
    );
  } else if (source === 'Github Trending') {
    return (
      <li>
        <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
          <p className='post-title'>{title}</p>
        </a>
        <div className='post-info'>
          <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
            <span>{source}</span>
            <span>by {author}</span>
            <span>{stars} stars</span>
            <span>{forks} forks</span>
          </a>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark(title, url, source)}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  } else if (source === 'New York Times') {
    return (
      <li>
        <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
          <p className='post-title'>{title}</p>
        </a>
        <div className='post-info'>
          <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
            <span>{source}</span>
            <span>{author}</span>
            <span>{section.toUpperCase()}</span>
          </a>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark(title, url, source)}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
          <p className='post-title'>{title}</p>
        </a>
        <div className='post-info'>
          <a href={url} key={index} target='_blank' rel='noopener noreferrer'>
            <span>{source}</span>
            <span>{upvotes} pts</span>
            <span>by {author}</span>
            <span>{comments} comments</span>
          </a>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark(title, url, source)}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  }
};

export default PostInfo;
