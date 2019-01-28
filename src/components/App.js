import React from 'react';
import PhoneList from './PhoneList';
import phoneItems from '../data-test/phones-items';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return ( <
    PhoneList phoneItemsList = {
      phoneItems
    }
    />
  );
}

export default App;