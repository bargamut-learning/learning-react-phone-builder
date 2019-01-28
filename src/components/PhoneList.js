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
    const phoneElems = phoneItemsList.map((phoneItem) => {
      return <PhoneItem phoneItem={phoneItem} key={phoneItem.id}/>;
    });
    const body = this.state.isOpen
      ? (
        <ul>
          {phoneElems}
        </ul>
      )
      : '';
    let btnCaption = this.state.isOpen ? 'Скрыть' : 'Показать';

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Номера телефонов</h1>
        </div>

        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>
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