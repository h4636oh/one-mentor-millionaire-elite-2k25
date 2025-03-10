import React from 'react';
import '../App.css'; // Import the CSS file for styling
import logo from '../assets/one_mentor_logo.png'; // Update with the correct path to your logo

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-logo">
				<img
					src={logo}
					alt="One Mentor Logo"
					className="footer-logo-image"
				/>
				<span className="footer-logo-text">ONE MENTOR</span>
			</div>
			<div className="footer-links">
				<div className="footer-column">
					<h3>Home</h3>
					<ul>
						<li>Home</li>
						<li>Gala Night</li>
						<li>TTMM</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Gala Night</h3>
					<ul>
						<li>Guests</li>
						<li>Event Schedule</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>TTMM</h3>
					<ul>
						<li>Guests</li>
						<li>Event Schedule</li>
					</ul>
				</div>
				<div className="footer-column">
					<h3>Contact Us</h3>
					<ul>
						<li>Reach out to us</li>
						<li>FAQs</li>
					</ul>
				</div>
			</div>
			<div className="footer-rights">
				<p>All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
