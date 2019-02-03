import React, { PureComponent } from 'react';
import PhoneItem from '../PhoneItem';
import './style.css';

/**
 * @description Component with state
 * @author Paul "Bargamut" Petrov
 * @date 2019-02-04
 * @class PhoneList
 * @extends {PureComponent}
 */
class PhoneList extends PureComponent {
  state = {
    openItemId : null
  };

  render() {
    const phoneElems = this.props.phoneItemsList.map((phoneItem, i) => {
      return (
        <li
          key={phoneItem.id}
          className="phone-list__item"
        >
          <PhoneItem
            phoneItem={phoneItem}
            isOpen = {this.state.openItemId === phoneItem.id}
            onBtnClick={this.openItem.bind(this, phoneItem.id)}
          />
        </li>
      );
    });

    return (
      <ul>
        {phoneElems}
      </ul>
    );
  }

  openItem = openItemId => this.setState({
    openItemId: this.state.openItemId === openItemId ? null : openItemId
  });
}

export default PhoneList;