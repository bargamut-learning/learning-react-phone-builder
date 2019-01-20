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

    this.handleClick = handleClick.bind(this);
  }

  // Experimental feature
  // state = {
  //   isOpen: true
  // };
  // 
  // handleClick = () => {
  //   console.log('Сменить оператора!');
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
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
    let btnCaption = this.state.isOpen ? 'Скрыть' : 'Показать';

    return (
      <div>
        <h1>Номера телефонов</h1>

        <button onClick={this.handleClick}>
          {btnCaption}
        </button>
  
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

  this.setState({
    isOpen: !this.state.isOpen
  });
}

export default PhoneList;