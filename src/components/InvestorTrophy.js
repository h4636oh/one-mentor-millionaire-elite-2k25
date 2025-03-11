import React from 'react';
import trophyImage from '../assets/investor_trophy.png';
import '../styles/InvestorTrophy.css';

const InvestorTrophy = () => {
	return (
		<div className="investor-trophy-page">
			<h1 className="trophy-title">Golden Elite Investor Trophy</h1>
			<div className="trophy-container-border">
				<div className="investor-trophy-container">
					<div className="trophy-content">
						<div className="trophy-image-container">
							<img
								src={trophyImage}
								alt="Golden Elite Investor Trophy"
								className="trophy-image"
								width={369}
								height={369}
							/>
						</div>
						<div className="trophy-description">
							<h2>12 investors, 1 ultimate winner</h2>
							<h3>Who Will Make History?</h3>
							<p>
								The battle for the Golden Elite Investor Trophy
								2025 is at its peak!
							</p>
							<p>
								This is not just a trophy—it's a symbol of
								vision, power, and success. It represents the
								sharpest minds, the boldest risks, and the
								smartest strategies. Winning this trophy isn't
								just about securing a title; it's about proving
								unmatched excellence in the world of investing.
							</p>
							<p>
								The stage is set. The world is watching. Let's
								the battle begin!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestorTrophy;
