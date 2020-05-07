import React, { Component } from 'react';
import * as ContactsAPI from './utils/ContactsAPI';
// 原来还可以把所有的 function 这样包装一下变成 API，赞

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: ''
    };
  }

  componentDidMount() {
    ContactsAPI.getAll().then((user) => this.setState({
      name: user.name,
      age: user.age
    }));
  }

  render() {
    return (
        <div>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
        </div>
    );
  }
}

export default App;

