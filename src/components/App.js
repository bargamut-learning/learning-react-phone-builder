import React from 'react';
import PhoneList from './PhoneList';
import phoneItems from './phones-items';

function App() {
  return (
    <PhoneList phoneItemsList={phoneItems}/>
  );
}

export default App;