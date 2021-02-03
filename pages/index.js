import React, { Component } from 'react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';

class Index extends Component {
	state = {
		address: ''
	}

	async componentDidMount() {
		const address = await web3.eth.getAccounts();
    this.setState({ address });
	}

	renderStatus() {
		if (this.state.address == "") {
			return <section class="grid-item ethereum-address">
							 <h3 style={{color: "red"}}>Status: Disconnected</h3>
						   <p>We were unable to connect to your Metamask account.</p>
					   </section>
		} else {
			return <section class="grid-item ethereum-address">
						   <h3 style={{color: "green"}}>Status: Connected</h3>
							 <p>Your address: { this.state.address }</p>
						 </section>
		}
	}

	render() {
		return (
			<Layout>
				<section class="grid-item welcome">
					<h2>What is intellectual property?</h2>
					<p>Intellectual property is etc..</p>
				</section>
				<hr class="divider-one" />
				{ this.renderStatus() }
				<section class="grid-item search-bar">
					<h2>Search for intellectual property</h2>
					<form>
						<input class="flex-stretch" type="text" placeholder="Search by ethereum address" name="search" />
						<button class="search-button" type="submit">Search</button>
					</form>
					<a href="#" class="advanced-search">Advanced Search</a>
				</section>
				<section class="grid-item attention">
					<h3 style={{ color: "red" }}>Attention!</h3>
					<p>Registering your intellectual property will incur fees. <br />You will be prompted by Metamask informing you of the exact value.</p>
				</section>
				<hr class="divider-two" />
			</Layout>
		);
	}
}

export default Index;
