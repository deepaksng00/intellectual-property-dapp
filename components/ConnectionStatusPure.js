import React, { Component } from 'react';
import web3 from '../ethereum/web3';

class ConnectionStatusPure extends Component {
  state = {
    address: ''
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    this.setState({ address });
  }

  renderStatus() {
    if (this.state.address == "") {
      return
    } else {
      return
    }
  }

  render() {
    return (
      <div class="connection-status">
        <h1>Status: Connected</h1>
        <p>This is your address: </p>
      </div>
    );
  }
}

export default ConnectionStatusPure;
