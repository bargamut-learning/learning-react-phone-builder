import React from 'react';
import PhoneItem from './PhoneItem';

function PhoneList(props) {
  const {phoneItemsList} = props;

  return (
    <ul>
      <PhoneItem phoneItem={phoneItemsList[0]}/>
    </ul>
  );
}

export default PhoneList;