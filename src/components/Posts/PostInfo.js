import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const PostInfo = ({ item, bookmarks = false }) => {
  const { addBookmark, removeBookmark } = useContext(GlobalContext);
  const {
    source,
    url,
    author,
    title,
    stars,
    forks,
    section,
    comments,
    commentsUrl,
    upvotes,
    date,
  } = item;

  if (bookmarks) {
    const jsDate = new Date(date);
    return (
      <li>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='post-title'
        >
          <p>{title}</p>
        </a>
        <div className='post-info'>
          <span>{source}</span>
          <span>bookmarked on {jsDate.toLocaleDateString()}</span>
          {commentsUrl ? (
            <a href={commentsUrl} target='_blank' rel='noopener noreferrer'>
              <span>comments</span>
            </a>
          ) : null}
          <button
            className='bookmark-btn link'
            onClick={() => removeBookmark(title)}
          >
            Remove
          </button>
        </div>
      </li>
    );
  } else if (source === 'Github Trending') {
    return (
      <li>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='post-title'
        >
          <p>{title}</p>
        </a>
        <div className='post-info'>
          <span>{source}</span>
          <span>by {author}</span>
          <span>{stars} stars</span>
          <span>{forks} forks</span>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark({ title, url, source })}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  } else if (source === 'New York Times') {
    return (
      <li>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='post-title'
        >
          <p>{title}</p>
        </a>
        <div className='post-info'>
          <span>{source}</span>
          <span>{author}</span>
          <span>{section.toUpperCase()}</span>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark({ title, url, source })}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='post-title'
        >
          <p>{title}</p>
        </a>
        <div className='post-info'>
          <span>{source}</span>
          <span>{upvotes} pts</span>
          <span>by {author}</span>
          <a href={commentsUrl} target='_blank' rel='noopener noreferrer'>
            <span>{comments} comments</span>
          </a>
          <button
            className='bookmark-btn link'
            onClick={() => addBookmark({ title, url, source, commentsUrl })}
          >
            Bookmark
          </button>
        </div>
      </li>
    );
  }
};

export default PostInfo;
