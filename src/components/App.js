import React, { Component } from 'react';
import PhoneList from './PhoneList';
import phoneItems from '../data-test/phones-items';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Инициализация состояния
    this.state = {
      reverted : false
    };
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <button className="btn btn-secondary float-right" onClick={this.revertList}>Revert</button>
          <span>{this.state.reverted ? 'reverted' : 'normal'}</span>

          <h1 className="display-3">Номера телефонов</h1>
        </div>

        {/* Don't change anything by link! Only copy of datas! */}
        <PhoneList phoneItemsList = {this.state.reverted ? phoneItems.slice().reverse() : phoneItems}/>
      </div>
    );
  }

  revertList = () => this.setState({ reverted: !this.state.reverted });
}

export default App;