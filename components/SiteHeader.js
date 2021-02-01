import React, { Component } from 'react';
import web3 from '../ethereum/web3';

/* --- Semantic-UI --- */
import { Header } from 'semantic-ui-react';

class SiteHeader extends Component {
  state = {
    address: ''
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    this.setState({ address });
  }

  renderStatus() {
    if (this.state.address == "") {
      return <div class="ui icon negative compact message">
                <i class="ban icon"></i>
                <div class="content">
                  <div class="header">
                    Status: Disconnected
                  </div>
                  <p>We are unable to connect to your MetaMask wallet, please ensure MetaMask is working correctly. If MetaMask is working correctly, please refresh the page.</p>
                </div>
              </div>
      } else {
        return <div class="ui icon positive message">
                <i class="signal icon"></i>
                <div class="content">
                  <div class="header">
                    Status: Connected
                  </div>
                  <p>Your ethereum address: { this.state.address[0] }</p>
                </div>
              </div>
    }
  }

  render() {
    return (
      <div class = "two column row">
        <div class = "eleven wide column">
        </div>
        <div class = "five wide column">
          { this.renderStatus() }
        </div>
      </div>
    );
  }
}

export default SiteHeader;
