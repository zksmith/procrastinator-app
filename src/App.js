import React from 'react';
import { Sidebar, Main } from './components';

import './App.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
