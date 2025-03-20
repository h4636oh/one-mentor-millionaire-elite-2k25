import React from 'react';
import Navbar from './Navbar';
import '../styles/GalaNight.css'; // Import the CSS file
import galanightlogo from '../assets/galanightlogo.png';

const GalaNight = () => {
	return (
		<div className="gala-page">
			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<div className="container">
				{/* Header Section */}
				<div className="hero-section">
					<div className="hero-content">
						<h1 className="gala-heading">Gala Night</h1>
						<p className="hero-description">
							From 9 PM to 12 AM on April 6 at DY Patil Stadium,
							get ready for a night like never before! Coldplay
							was nothing compared to this! India's top elite
							singer band is all set to rock the stage. FOMO pakka
							hai if you miss this, you miss everything.
						</p>
						<button className="book-button">Book Tickets</button>
					</div>
					<div className="logo-section">
							<img
								src={galanightlogo}
								alt="galanightlogo"
								className="galanightlogo-img"
							/>
					</div>
				</div>

				{/* Shraddha Kapoor Section */}
				<div className="shraddha-section">
					<h2 className="section-heading">
						Shraddha Kapoor on Gala Night!
					</h2>
				</div>

				{/* Info Box Section */}
				<div className="info-box">
					<div className="info-content">
						<div className="image-container">
							<img
								src="/images/shraddha-kapoor.jpg"
								alt="Person"
								className="celebrity-image"
							/>
						</div>
						<div className="text-container">
							<h3 className="info-heading">
								THE GALA NIGHT OF YOUR DREAMS — ASLI JANNAT
								YAHAN HAI
							</h3>

							<p className="highlight-text">
								Coldplay? Bas Teaser Hai... Yeh Hai Pura
								Blockbuster.
							</p>
							<p className="highlight-text bottom-space">
								Jo Miss Kiya, FOMO Ka Regret Zindagi Bhar
								Satayega
							</p>

							<p className="normal-text">
								We Know You Love Us — That's why gala night is
								here. Paisa Vasool Toh Guaranteed Hai — Aur Agar
								Dil se nahi enjoy kiya, Toh paisa bhi wapas.
								(Bas Ek Chhota Sa Lie Detector Test Ke Baad)
							</p>

							<p className="normal-text">
								We Know You'll Be So Happy... FOMO Abhi Se Ho
								Raha Hai Na? Toh Bas 25th March Tak Wait Karo —
								Tickets will get from 4:00 PM se 4:15 PM only
								Sir! 15 Minute, Taiyaar Rehna
							</p>

							<p className="quote-text">
								FOMO Mujhe Bhi Ho Raha Hai... Chalo Bye -{' '}
								<span className="bold">Shraddha Kapoor</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GalaNight;
