import React, { useEffect, useState } from 'react';
import { Header, Posts, StreamsContainer } from '../';
import './Main.css';

const Main = ({ globalSelected }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setData([]);
    setError(false);
    if (!globalSelected !== 'Bookmarks') {
      // ".replace(/\s/g, '')" is used to remove spaces
      fetch(
        `https://noworkdone-api.herokuapp.com/${globalSelected.replace(
          /\s/g,
          ''
        )}`
      )
        .then((response) => response.json())
        .then((redditData) => {
          setData(redditData);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    } else {
      setData([{ title: 'OIOI' }]);
    }
  }, [globalSelected]);

  if (globalSelected !== 'Twitch Streams') {
    return (
      <main className='main-section'>
        <Header />
        {!error ? (
          <Posts selected={globalSelected} data={data} />
        ) : (
          <h2 className='error'>Error loading data</h2>
        )}
      </main>
    );
  } else {
    return (
      <main className='main-section'>
        <Header />
        <StreamsContainer />
      </main>
    );
  }
};

export default Main;
