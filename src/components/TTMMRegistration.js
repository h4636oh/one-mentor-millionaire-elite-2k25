import React from 'react';
import Navbar from './Navbar';
import TTMMRegistrationWidget from './TTMMRegistrationWidget';
import GalaTicketWidget from './GalaTicketWidget';
import Footer from './Footer';
import '../styles/TTMMRegistration.css';

const TTMMRegistration = () => {
	return (
		<div className="ttmm-registration-container">
			<Navbar />

			<div className="ttmm-content">
				<div className="ttmm-header">
					<h1>Don't Miss Out!</h1>
					<h2>Secure Your Spot Now!</h2>
					<p>
						Join us for Millionaire Elite and be part of an
						unforgettable experience filled with insights,
						networking, and innovation.
					</p>
				</div>
				<TTMMRegistrationWidget />
			</div>
			<GalaTicketWidget />
			<Footer />
		</div>
	);
};

export default TTMMRegistration;
