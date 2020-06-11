import React, { useEffect, useState } from 'react';
import { Header, Posts } from '../';
import './Main.css';

const Main = ({ bookmarks, globalSelected }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);

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
      });
  }, [globalSelected]);

  return (
    <main className='main-section'>
      <Header />
      <Posts selected={globalSelected} bookmarks={bookmarks} data={data} />
    </main>
  );
};

export default Main;
