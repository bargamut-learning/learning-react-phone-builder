import React, { PureComponent } from 'react';
import PhoneItem from '../PhoneItem';
import './style.css';

/**
 * Component with state
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