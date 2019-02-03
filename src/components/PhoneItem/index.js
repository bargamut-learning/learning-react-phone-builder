import React, { Component } from 'react';
import './style.css';

// If need to watch everything changes, use PureComponent
// import React, { PureComponent } from 'react';
// class PhoneItem extends PureComponent {
class PhoneItem extends Component {
  constructor (props) {
    super(props);

    // Инициализация состояния
    this.state = {
      isOpen: props.defaultOpen,
      count: 0
    };

    this.handleClick = handleClick.bind(this);
    this.incrementCounter = incrementCounter.bind(this);
  }

  // Must be commented if use PureComponent
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.isOpen !== nextState.isOpen ||
      this.state.count !== nextState.count
    );
  }

  componentWillMount() { console.log('---', 'Mounting'); }

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
        <div className="card-header" onClick={this.incrementCounter}>
          <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
            {btnCaption}
          </button>

          <h3>{phoneItem.title}</h3>

          <span>Clicked: {this.state.count}</span>
        </div>

        {body}
      </li>
    );
  }
}

function handleClick() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

function incrementCounter() {
console.log(this.state);

  this.setState({
    count: this.state.count + 1
  });
}

export default PhoneItem;