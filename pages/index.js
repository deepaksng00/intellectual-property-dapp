import React, { Component } from 'react';
import Layout from '../components/Layout';
import style from '../styles/Index.module.css';

class Index extends Component {
	state = {

	}

	componentDidMount() {

	}

	render() {
		return (
			<Layout>
				<div className={style.grid}>
					<div className={style.image}>
						<h4>The future of intellectual property</h4>
						<div className={style.paragraphs}>
							<p className={style.p1}>Register your intellectual property on the Ethereum blockchain, for simple proof of ownership and easy access!</p>
							<br />
							<p className={style.p2}>You only will have access to your intellectual property, using your Ethereum address, you will be able to create and modify your intellectual property, and prove your ownership.</p>
						</div>
					</div>
					<section className={style.section2}>
					</section>
				</div>
			</Layout>
		)
	}
}

export default Index;
