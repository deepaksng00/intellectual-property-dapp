import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Router } from '../routes';
import style from '../styles/AboutUs.module.css';

export default class AboutUs extends Component {
	render() {
		return (
			<Layout>
				<div className={style.main_container}>
					<h2>About Us (Dummy Text)</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit odio, efficitur sed pellentesque non, tempus eget erat. Sed libero felis, placerat sit amet consequat id, iaculis at arcu. Aliquam erat volutpat. Phasellus mi justo, tempus dapibus metus id, hendrerit sodales magna. In lobortis, sapien vitae egestas posuere, felis tortor dictum sapien, eu vehicula sem augue nec risus. Integer mollis rhoncus tincidunt. Aenean hendrerit vitae lectus at aliquet. Etiam eleifend fringilla ante eu aliquet. Curabitur laoreet ex congue, pharetra arcu a, tempus lorem. Nam et leo in nunc aliquam lacinia varius nec augue. Duis eu velit eu ex scelerisque sodales. Pellentesque finibus massa at elit volutpat iaculis. Suspendisse fermentum luctus fermentum. Praesent fringilla cursus diam in commodo. Pellentesque convallis viverra metus, eget posuere odio euismod vel. Integer ultricies convallis posuere.</p>
					<p>Donec vehicula faucibus sem ut dignissim. Aenean sit amet diam congue nisi aliquam fermentum. Etiam interdum egestas tellus, in molestie nulla semper nec. Aenean luctus eros enim, et posuere neque dapibus ut. Nulla congue laoreet enim, quis tempor erat feugiat quis. Sed porttitor erat sit amet justo aliquam fringilla. In gravida sollicitudin neque, a suscipit nunc tristique eget. Aliquam enim magna, egestas in ultricies at, dictum ac nibh. Quisque nec justo et sapien elementum egestas. Mauris sed feugiat mi, eu mattis neque.</p>
				</div>
			</Layout>
		)
	}
}