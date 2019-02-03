import React from 'react';
import PhoneItem from './PhoneItem';

/**
 * Component with state
 */
function PhoneList({phoneItemsList}) {
  const phoneElems = phoneItemsList.map((phoneItem, i) => {
    return <PhoneItem key={phoneItem.id} phoneItem={phoneItem} defaultOpen={ i === 0 }/>;
  });

  return (
    <ul>
      {phoneElems}
    </ul>
  );
}

export default PhoneList;