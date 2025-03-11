import React from 'react';
import '../styles/EliteInvestors.css';

const guestsData = [
	{
		name: 'Alakh Pandey',
		role: 'Founder, Physics Wallah',
		image: require('../assets/elite_guests/alakh_pandey.png'),
	},
	{
		name: 'Anupam Mittal',
		role: 'Founder, Shaadi.com',
		image: require('../assets/elite_guests/anupam_mittal.png'),
	},
	{
		name: 'Aman Gupta',
		role: 'Co-founder, BoAt',
		image: require('../assets/elite_guests/aman_gupta.png'),
	},
	{
		name: 'Namita Thapar',
		role: 'Executive Director, Emcure',
		image: require('../assets/elite_guests/namita_thapar.png'),
	},
	{
		name: 'Kaivalya Vohra',
		role: 'Co-founder and CTO, Zepto',
		image: require('../assets/elite_guests/kaivalya_vohra.png'),
	},
	{
		name: 'Bhavish Aggarwal',
		role: 'Co-founder, Ola & Koo',
		image: require('../assets/elite_guests/bhavish_aggarwal.png'),
	},
	{
		name: 'Ritesh Agarwal',
		role: 'Founder, OYO',
		image: require('../assets/elite_guests/ritesh_agarwal.png'),
	},
	{
		name: 'Binny Bansal',
		role: 'Co-founder, Flipkart',
		image: require('../assets/elite_guests/binny_bansal.png'),
	},
	{
		name: 'Peyush Bansal',
		role: 'Founder, Lenskart',
		image: require('../assets/elite_guests/peyush_bansal.png'),
	},
];

const EliteInvestors = () => {
	return (
		<div className="elite-guests-container">
			<h1>Elite Investors</h1>
			<p>Only the chosen ones are here</p>
			<p>Welcome to Millionaire Elite 2025</p>
			<div className="guests-grid">
				{guestsData.map((guest, index) => (
					<div className="guest-card" key={index}>
						<img
							src={guest.image}
							alt={guest.name}
							className="guest-image"
						/>
						<h2>{guest.name}</h2>
						<p>{guest.role}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default EliteInvestors;
