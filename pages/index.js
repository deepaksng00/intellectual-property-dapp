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
						<div class = "nine wide column">
							<Header as = "h3">Registering your intellectual property</Header>
							<p>To register your intellectual property, you must have the MetaMask browser extension install with an Ethereum wallet.</p>
							<Header as = "h3">To register your intellectual property, you will need:</Header>
								<ol class="ui list">
									<li>The type of intellectual property you are registering</li>
									<li>The ethereum address of any co-owners of the intellectual property</li>
									<li>The original file containing the intellectual property</li>
									<li>The publication date for the intellectual property</li>
								</ol>
								<button class="ui button">Start Registering</button>
						</div>
						<div class = "two wide column">

						</div>
						<div class = "five wide column">
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
					</div>
			</Layout>
		);
	}
}

export default Index;
