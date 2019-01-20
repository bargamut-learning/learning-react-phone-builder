import React from 'react';
import PhoneList from './PhoneList';
import phoneItems from './phones-items';

function App() {
  return (
    <div>
      <button onClick={switchOperator}>Мегафон</button>

      <PhoneList phoneItemsList={phoneItems}/>
    </div>
  );
}

function switchOperator() {
  console.log('Сменить оператора!');
}

export default App;