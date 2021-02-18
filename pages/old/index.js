import React, { Component } from 'react';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
import style from '../styles/Index.module.css';
import { Link } from '../routes';

class Index extends Component {
	state = {
		address: ''
	}

	async componentDidMount() {
		const address = await web3.eth.getAccounts();
    this.setState({ address });
	}

	render() {
		return (
			<Layout>
				<div className={style.main_grid_container}>
					<nav className={style.grid_item}><Link route="/"><a href="#">Home</a></Link></nav>
					<section className={[style.section_welcome, style.grid_item].join(" ")}>
						<h2>What is intellectual property?</h2>
						<p>Intellectual property is something that has been created by the creator's mind, for example: algorithms, stories, paintings or music.</p>
						<p>To ensure that your intellectual property is protected from plagiarism to commercial use by a third-party, you must register this intellectual property.</p>
						<p>This web application allows you to register your intellectual property rights on the Ethereum blockchain, where it will be stored safely. This app also allows you to access, verify and manage your intellectual property using your Ethereum wallet.</p>
					</section>
					<section className={[style.section_search, style.grid_item].join(" ")}>
						<h2>Search for intellectual property</h2>
						<p>To search for an intellectual property, please enter the ethereum address of the intellectual property contract:</p>
						<form>
							<input type="text" placeholder="Search by ethereum address" name="search" />
							<button type="submit">Search</button>
						</form>
						<a className={style.advanced_search} href="#">Advanced Search</a>
					</section>
					<section className={[style.section_register, style.grid_item].join(" ")}>
						<h2>Registering your intellectual property</h2>
						<p>To register your intellectual property, you must have the Metamask browser extension installed with an Ethereum wallet.</p>
						<h2>To register your intellectual property you will need:</h2>
						<ol>
							<li>The type of intellectual property you are registering</li>
							<li>The Ethereum address of any co-owners of the intellectual property</li>
							<li>The original file containing the intellectual property</li>
							<li>The publication date for the intellectual property</li>
						</ol>
					</section>
					<Link route="/intellectualproperty/register1"><button className={[style.button_start_register, style.grid_item].join(" ")}>Start registration</button></Link>
				</div>
			</Layout>
		);
	}
}

export default Index;
