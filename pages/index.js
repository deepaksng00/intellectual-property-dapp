import React, { Component } from 'react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

/* --- Semantic-UI --- */
import { Header, Input, Button, Select, Icon, Segment, Label } from 'semantic-ui-react';

class Index extends Component {
	state = {
		address: ''
	}

	async componentDidMount() {
		const address = await web3.eth.getAccounts();
		this.setState ({ address });
	}

	render() {
		const options = [
  		    { key: 'Trademark', text: 'Trademark', value: 'trademark' },
  		    { key: 'Patent', text: 'Patent', value: 'patent' },
  		    { key: 'Design', text: 'Design', value: 'design' },
		];

		let segment;
		let top_container;
		let middle_container;

		if (this.state.address == "") {
			segment = <Segment color='red'>Status: Disconnected <br /> We are unable to connect to your MetaMask wallet, please ensure MetaMask is working correctly.</Segment>;
		} else {
			segment = <Segment color='green'>Status: Connected <br /> Your account address: { this.state.address[0] }</Segment>;
		}

		return (
			<section class='index-container'>
				<div class='index-left-container'>
					<Header as='h1'>Intellectual Property</Header>
					<p>Welcome to the intellectual property website.</p>

					<Input iconPosition='left' type='text' placeholder='Search by Address' action>
						<input />
						<Icon name='search' />
						<Select compact options={options} defaultValue='trademark' />
						<Button type='submit'>Search</Button>
					</Input>
					<br />
				</div>

				<div class='index-right-container'>
					{ segment }
				</div>
			</section>
		);
	}
}

export default Index;