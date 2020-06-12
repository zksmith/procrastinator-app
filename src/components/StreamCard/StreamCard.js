import React from 'react';

import './StreamCard.css';

const StreamCard = ({ thumbnail, title, user, viewers }) => {
  return (
    <div className='stream-card'>
      <a
        href={`https://twitch.tv/${user}`}
        target='_blank'
        rel='noopener noreferrer'
        title={title}
      >
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
      </a>
      <div className='under-text'>
        <span>{user}</span>
        <span>{viewers} viewers</span>
      </div>
    </div>
  );
};

export default StreamCard;
