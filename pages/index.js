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
						   <p>We were unable to connect to your Metamask account. If Metamask seems to be working correctly, please refresh the page.</p>
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
				<nav><a href="#">Home</a></nav>
				<section class="grid-item welcome">
					<h2>What is intellectual property?</h2>
					<p>Intellectual property is something that has been created by the creator's mind, for example: algorithms, stories, paintings or music.</p>
					<p>To ensure that your intellectual property is protected from plagiarism to commercial use by a third-party, you must register this intellectual property.</p>
					<p>This web application allows you to register your intellectual property rights on the Ethereum blockchain, where it will be stored safely. This app also allows you to access, verify and manage your intellectual property using your Ethereum wallet.</p>
				</section>
				<hr class="divider-one" />
				<section class="grid-item search-bar">
					<h2>Search for intellectual property</h2>
					<p>To search for an intellectual property, please enter the ethereum address of the intellectual property contract:</p>
					<form>
						<input class="flex-stretch" type="text" placeholder="Search by ethereum address" name="search" />
						<button class="search-button" type="submit">Search</button>
					</form>
					<a href="#" class="advanced-search">Advanced Search</a>
				</section>
				<hr class="divider-two" />
				<section class="grid-item register">
					<h2>Registering your intellectual property</h2>
					<p>To register your intellectual property, you must have the Metamask browser extension installed with an Ethereum wallet.</p>
					<h2>To register your intellectual property you will need:</h2>
					<ol>
						<li>The type of intellectual property you are registering</li>
						<li>The Ethereum address of any co-owners of the intellectual property</li>
						<li>The original file containing the intellectual property</li>
						<li>The publication date for the intellectual property</li>
					</ol>
					<button class="start-register button">Start registration</button>
				</section>
				<section class="grid-item attention">
					<h3 style={{ color: "red" }}>Attention!</h3>
					<p>Registering your intellectual property will incur fees. You will be prompted by Metamask informing you of the exact value.</p>
				</section>
			</Layout>
		);
	}
}

export default Index;
