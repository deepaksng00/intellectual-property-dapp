import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Router } from '../routes';
import style from '../styles/ContactUs.module.css';

export default class ContactUs extends Component {
	render() {
		return (
			<Layout>
				<div className={style.main_container}>
					<h2>Contact Us</h2>
					<p>If you would like to get in contact with me, please press the following link: <a href="mailto:deepak.singh@stu.mmu.ac.uk">Email Me</a></p>
				</div>
			</Layout>
		)
	}
}