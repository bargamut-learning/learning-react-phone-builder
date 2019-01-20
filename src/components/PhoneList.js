import React, {Component} from 'react';
import PhoneItem from './PhoneItem';

/**
 * Component with state
 */
class PhoneList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  // Experimental feature
  // state = {
  //   isOpen: true
  // };

  render() {
    const {phoneItemsList} = this.props;
    const body = this.state.isOpen
      ? (
        <ul>
          <PhoneItem phoneItem={phoneItemsList[0]}/>
        </ul>
      )
      : '';

    return (
      <div>
        <h1>Номера телефонов</h1>

        <button onClick={handleClick}>Скрыть</button>
  
        {body}
      </div>
    );  
  }
}

/**
 * Simple component without state
 * 
 * @param {*} props 
 */
// function PhoneList(props) {
//   const {phoneItemsList} = props;

//   return (
//     <div>
//       <button onClick={switchOperator}>Мегафон</button>

//       <ul>
//         <PhoneItem phoneItem={phoneItemsList[0]}/>
//       </ul>
//     </div>
//   );
// }

function handleClick() {
  console.log('Сменить оператора!');
}

export default PhoneList;