import React from 'react';

function PhoneItem(props) {
  const {phoneItem} = props;

  return (
    <li className="phone-list__item">{phoneItem.title}</li>
  );
}

export default PhoneItem;