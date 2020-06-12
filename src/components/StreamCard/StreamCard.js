import React from 'react';

const StreamCard = ({ thumbnail, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

export default StreamCard;
