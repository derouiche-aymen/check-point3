import PP from './Component/Profile/ProfilPhoto';
import React from 'react';
import ADR from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import'./Style.css';

function App() {
  return (
    <div className="App">
    <PP />
    <div className='info'>
    <FullName />
    <ADR />
    </div>
    </div>
  );
}

export default App;
