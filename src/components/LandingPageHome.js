import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer'; // Import CountdownTimer
import landPageLogo from '../assets/land_page_logo.png';
import oneMentorLogo from '../assets/one_mentor_logo.png';
import '../App.css';

const LandingPageHome = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="container">
			<nav className="navbar">
				<div className="nav-left">
					<img
						src={oneMentorLogo}
						className="one_mentor_logo"
						alt="one mentor logo"
						height={40}
						width={40}
					/>
				</div>
				<div className="nav-right">
					<div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
						<a href="/">TTMM</a>
						<a href="/">Gala Night</a>
						<a href="/">IE</a>
						<a href="/">Contact Us</a>
					</div>
					<div className="waitlist_btn_container">
						<button className="waitlist-btn">
							<span className="gradient-text">
								JOIN THE WAITLIST
							</span>
						</button>
					</div>
					<div
						className={`hamburger ${isMenuOpen ? 'active' : ''}`}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</nav>
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
