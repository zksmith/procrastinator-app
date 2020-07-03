import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { PostInfo } from '../../components';

const Home = ({ selected }) => {
  const { displayedData } = useContext(GlobalContext);

  return (
    <>
      <h1>{selected}</h1>
      {displayedData.length ? (
        <ul>
          {displayedData.map((item, index) => (
            <PostInfo item={item} key={index} />
          ))}
        </ul>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
};

export default Home;
