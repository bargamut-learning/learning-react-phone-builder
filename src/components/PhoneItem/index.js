import React, { Component } from 'react';
import './style.css';

class PhoneItem extends Component {
  constructor (props) {
    super(props);

    // Инициализация состояния
    this.state = {
      isOpen: props.defaultOpen
    };

    this.handleClick = handleClick.bind(this);
  }

  componentDidMount() { console.log('---', 'Mounting'); }

  // Только если изменяется кто-то из родителей и могли поменяться props
  componentWillReceiveProps(nextProps) {
    console.log('---', 'Will recieve props');
    if (nextProps.defaultOpen !== this.props.defaultOpen)
      this.setState({
        isOpen: nextProps.defaultOpen
      });
  }

  // Изменится вне зависимости от того, внутри компонента изменения или у родителя
  componentWillUpdate() {
    console.log('---', 'Will update');
  }

  render() {
    const {phoneItem} = this.props,
          style = { width: '50%' },
          body = this.state.isOpen
            ? (<div className="card-body">{phoneItem.title}</div>)
            : '';

    let btnCaption = this.state.isOpen ? 'Скрыть' : 'Показать';

    return (
      <li className="phone-list__item card mx-auto" style={style}>
        <div className="card-header">
          <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
            {btnCaption}
          </button>

          <h3>{phoneItem.title}</h3>
        </div>

        {body}
      </li>
    );
  }
}

function handleClick() {
  console.log('Сменить оператора!');

  this.setState({
    isOpen: !this.state.isOpen
  });
}

export default PhoneItem;