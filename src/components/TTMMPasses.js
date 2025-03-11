import React from 'react';
import '../styles/TTMMPasses.css';

const Card = ({ title, price, features, type }) => {
	const backgroundClass =
		{
			silver: 'silver-card',
			gold: 'gold-card',
			diamond: 'diamond-card',
		}[type.toLowerCase()] || 'silver-card';

	return (
		<div className={`pass-card ${backgroundClass}`}>
			<h3>{title}</h3>
			<p className="price">₹{price}</p>
			<div className="features">
				{features.map((feature, index) => (
					<div key={index} className="feature-item">
						<span className="feature-icon">✓</span>
						<span>{feature}</span>
					</div>
				))}
			</div>
			<button className="get-tickets">Get tickets</button>
		</div>
	);
};

const TTMMPasses = () => {
	const passes = {
		regular: [
			{
				title: 'Silver TTMM Pass',
				price: '199',
				type: 'silver',
				features: [
					'Startup registration only',
					'If selected for finals, entry to the event will be granted',
				],
			},
			{
				title: 'Gold TTMM Pass',
				price: '499',
				type: 'gold',
				features: [
					'Startup registration',
					'Entry to DY Patil event (Back Seats)',
				],
			},
			{
				title: 'Diamond TTMM Pass',
				price: '999',
				type: 'diamond',
				features: [
					'Startup registration',
					'Top-priority',
					'Front Seats at DY Patil event',
				],
			},
		],
		investor: [
			{
				title: 'Seed Stage',
				price: '1999',
				type: 'silver',
				features: [
					'We will fix meet with investor as per your domain of seed stage in the event.',
				],
			},
			{
				title: 'Growth Stage',
				price: '4999',
				type: 'gold',
				features: [
					'We will fix meet with investor as per your domain of growth stage in the event.',
				],
			},
			{
				title: 'VC Stage',
				price: '9999',
				type: 'diamond',
				features: [
					'We will fix meet with investor as per your domain of VC stage in the event.',
				],
			},
		],
	};

	return (
		<div className="ttmm-passes">
			<h1>
				TTMM <span className="highlight">PASSES</span>
			</h1>
			<div className="cards-container">
				{passes.regular.map((pass, index) => (
					<Card key={index} {...pass} />
				))}
			</div>

			<h1>
				TTMM INVESTOR TABLE <span className="highlight">PASSES</span>
			</h1>
			<div className="cards-container">
				{passes.investor.map((pass, index) => (
					<Card key={index} {...pass} />
				))}
			</div>
		</div>
	);
};

export default TTMMPasses;
