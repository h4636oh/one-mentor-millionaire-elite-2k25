import React from 'react';
import '../styles/Footer.css';
import '../App.css'; // Import the CSS file for styling
import logo from '../assets/one_mentor_logo.png'; // Update path as needed

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="footer-logo">
					<img
						src={logo}
						alt="One Mentor Logo"
						className="footer-logo-image"
					/>
					<span>ONE MENTOR</span>
				</div>
				<div className="footer-links">
					<div className="footer-column">
						<h3>Home</h3>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/guests">Guests</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Gala Night</h3>
						<ul>
							<li><a href="/gala-night">Guests</a></li>
							<li><a href="/event-schedule">Event Schedule</a></li>
							<li><a href="/event-schedule">Event Schedule</a></li>
							<li><a href="/faqs">FAQs</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>TTMM</h3>
						<ul>
							<li><a href="/ttmm">TTMM</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h3>Contact Us</h3>
						<ul>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className="footer-rights">
					<p>All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
