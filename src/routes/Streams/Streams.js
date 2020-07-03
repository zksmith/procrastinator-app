import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { StreamCard } from '../../components';

import './Streams.css';

const Streams = () => {
  const { displayedData } = useContext(GlobalContext);

  return (
    <>
      <h1>Twitch Streams</h1>
      <div className='streams-container'>
        {displayedData.map((stream, index) => {
          // If statement to fix bug that caused app to crash if the user changes to "Twitch Streams" while posts are loading
          if (stream.thumbnail) {
            const imageUrl = stream.thumbnail
              .replace('{width}', '320')
              .replace('{height}', '180');

            return (
              <StreamCard
                thumbnail={imageUrl}
                title={stream.title}
                user={stream.user}
                viewers={stream.viewers}
                key={index}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default Streams;
