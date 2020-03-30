import React from 'react';

import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
	return (
		<div>
			<Header />
			<h1>Contact Details</h1>
			<p>
				The best way to contact me is via my{' '}
				<a href="https://www.linkedin.com/in/graeme-kelso-brooks/" target="_blank">
					Linkedin
				</a>
			</p>
			<Footer />
		</div>
	);
};

export default ContactPage;
