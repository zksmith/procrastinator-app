import React from 'react';
import StreamCard from '../StreamCard/StreamCard';

import './StreamsContainer.css';

function StreamsContainer({ data }) {
  return (
    <>
      <h1>Twitch Streams</h1>
      <div className='streams-container'>
        {data.map((stream) => {
          console.log(stream);
          const imageUrl = stream.thumbnail
            .replace('{width}', '320')
            .replace('{height}', '180');
          return <StreamCard thumbnail={imageUrl} title={stream.title} />;
        })}
      </div>
    </>
  );
}

export default StreamsContainer;
