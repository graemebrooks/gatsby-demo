import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
	return (
		<div>
			<Header />
			<h1>Gatsby Bootcamp About</h1>
			<p>This is a demo application for the purpose of learning GatsbyJS</p>
			<p>
				For any questions, feel free to <Link to="/contact">contact me</Link>
			</p>
			<Footer />
		</div>
	);
};

export default AboutPage;
