import React from 'react';
import '../styles/WantToGetNoticed.css';

const WantToGetNoticed = () => {
	return (
		<div className="want-to-get-noticed">
			<div className="want-to-get-noticed-container">
				<h1>Want To Get Noticed?</h1>

				<p className="subtitle">
					Starting at just ₹2,000, you can put your brand in the
					spotlight!
				</p>

				<ul className="features-list">
					<li>
						<span role="img" aria-label="eyes">
							👀
						</span>{' '}
						More eyeballs on your brand
					</li>
					<li>
						<span role="img" aria-label="microphone">
							🎤
						</span>{' '}
						Shoutouts that actually get heard
					</li>
					<li>
						<span role="img" aria-label="megaphone">
							📢
						</span>{' '}
						Custom promos that don't feel spammy
					</li>
				</ul>

				<p className="cta-text">
					Skip the boring ads—let's make some noise together!
					<span role="img" aria-label="fire">
						🔥
					</span>
				</p>

				<button className="cta-button">Let's Talk Sponsorships!</button>
			</div>
		</div>
	);
};

export default WantToGetNoticed;
