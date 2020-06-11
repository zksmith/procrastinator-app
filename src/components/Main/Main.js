import React from 'react';
import { Header, Posts } from '../';
import './Main.css';

const Main = ({ selected }) => {
  return (
    <main className='main-section'>
      <Header />
      <Posts selected={selected} />
    </main>
  );
};

export default Main;
