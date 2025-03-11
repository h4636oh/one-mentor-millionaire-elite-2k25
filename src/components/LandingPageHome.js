import React from 'react';
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import landPageLogo from '../assets/land_page_logo.png';
import '../styles/LandingPageHome.css';

const LandingPageHome = () => {
	return (
		<div className="container">
			<Navbar	/>
			<div className="hero-section">
				<img
					src={landPageLogo}
					className="title_logo"
					alt="Millionaire Elite-25 Logo"
					height={194}
					width={500}
				/>
				<p className="description">
					Join the Millionaire Elite coming soon this April at DY
					Patil Stadium for TTMM, a night of music, celebration, and
					new beginnings! Get ready for the Gala Night and an
					unforgettable launch.
				</p>
				<h2 className="date-revealing">Date revealing soon...</h2>
				<CountdownTimer />
				<button className="join-now">Join Now</button>
			</div>
		</div>
	);
};

export default LandingPageHome;
