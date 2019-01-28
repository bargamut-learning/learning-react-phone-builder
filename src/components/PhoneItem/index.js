import React from 'react';
import './style.css';

function PhoneItem(props) {
  const {phoneItem} = props,
        style = { width: '50%' };

  return (
    <li className="phone-list__item card mx-auto" style={style}>
      <div className="card-header">
        <h3>{phoneItem.title}</h3>
      </div>

      <div className="card-body">{phoneItem.title}</div>
    </li>
  );
}

export default PhoneItem;