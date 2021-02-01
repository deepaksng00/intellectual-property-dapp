import React, { Component } from 'react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';

/* --- Semantic-UI --- */
import { Header, Input, Button, Select, Icon, Segment, Label } from 'semantic-ui-react';

class Index extends Component {
	state = {
		address: ''
	}

	async componentDidMount() {

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

		return (
			<Layout>

					<div class = "one column row">
						<div class = "column">
							<p>Welcome to the intellectual property website.</p>
						</div>
					</div>

					<div class = "one column row">
						<div class = "column">
							<Input iconPosition='left' type='text' placeholder='Search by Address' action>
								<input />
								<Icon name='search' />
								<Select compact options={options} defaultValue='trademark' />
								<Button type='submit'>Search</Button>
							</Input>
						</div>

						<div class = "one column row">
							<button class="ui left floated button">Advanced Search</button>
						</div>
					</div>

					<div class = "two column row">
						<div class = "column">
							<div class = "ui segment">
								<Header as = "h2">Registering your intellectual property</Header>
								<p>To register your intellectual property, you must have the MetaMask browser extension install with an Ethereum wallet.</p>
							</div>
							<div class = "ui segment">
								<Header as = "h2">To register your intellectual property, you will need:</Header>
							</div>
						</div>
						<div class = "column">
							<div class="ui icon message">
							  <i class="exclamation triangle icon"></i>
							  <div class="content">
							    <div class="header">
							      Attention!
							    </div>
							    <p>Registering your intellectual property will incur fees. You will be prompted by Metamask informing you of the exact value.</p>
							  </div>
							</div>
						</div>
						<div class = "column">

						</div>
					</div>
			</Layout>
		);
	}
}

export default Index;
