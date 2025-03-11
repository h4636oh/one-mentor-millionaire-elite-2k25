import React, { useState } from 'react';
import '../styles/Navbar.css'
import oneMentorLogo from '../assets/one_mentor_logo.png';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
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
						<span className="gradient-text">JOIN THE WAITLIST</span>
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
	);
};

export default Navbar;
