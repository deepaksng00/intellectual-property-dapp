import React, { Component } from 'react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

class Index extends Component {
	state = {
		address: ''
	}

	async componentDidMount() {
		const address = await web3.eth.getAccounts();
		this.setState ({ address });
	}

	render() {
		if (this.state.address == "") {
			return <div>Status: Disconnected <br /> We are unable to connect to your Metamask account, please ensure Metamask is working correctly!</div>;
		} else {
		    return <div>Status: Connected <br /> Your address: { this.state.address[0] }</div>;
		}
	}
}

export default Index;