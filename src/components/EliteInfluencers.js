import React from 'react';
import '../styles/EliteInfluencers.css';

const influencersData = [
	{
		name: 'Bhuvan Bam',
		image: require('../assets/elite_influencers/bhuvan_bam.png'),
	},
	{
		name: 'Ashish Chanchlani',
		image: require('../assets/elite_influencers/ashish_chanchlani.png'),
	},
	{
		name: 'CarryMinati',
		image: require('../assets/elite_influencers/carryminati.png'),
	},
	{
		name: 'Harsh Beniwal',
		image: require('../assets/elite_influencers/harsh_beniwal.png'),
	},
	{
		name: 'Nischay Malhan',
		image: require('../assets/elite_influencers/nischay_malhan.png'),
	},
	{
		name: 'Sourav Joshi',
		image: require('../assets/elite_influencers/sourav_joshi.png'),
	},
	{
		name: 'Gaurav Taneja',
		image: require('../assets/elite_influencers/gaurav_taneja.png'),
	},
	{
		name: 'Awez Darbar',
		image: require('../assets/elite_influencers/awez_darbar.png'),
	},
	{
		name: 'Jannat Zubair',
		image: require('../assets/elite_influencers/jannat_zubair.png'),
	},
	{
		name: 'Ayan Zubair',
		image: require('../assets/elite_influencers/ayan_zubair.png'),
	},
	{
		name: 'Arista Mehta',
		image: require('../assets/elite_influencers/arista_mehta.png'),
	},
    {
        name: 'Dev Joshi',
        image: require('../assets/elite_influencers/dev_joshi.png'),
    },
    {
        name: 'Siddharth Nigam',
        image: require('../assets/elite_influencers/siddharth_nigam.png'),
    },
    {
        name: 'Roshni Walia',
        image: require('../assets/elite_influencers/roshni_walia.png'),
    },
    {
        name: 'Ashnoor Kaur',
        image: require('../assets/elite_influencers/ashnoor_kaur.png'),
    },
    {
        name: 'Zakir Khan',
        image: require('../assets/elite_influencers/zakir_khan.png'),
    },
    {
        name: 'Avneet Kaur',
        image: require('../assets/elite_influencers/avneet_kaur.png'),
    },
    {
        name: 'Elvish Yadav',
        image: require('../assets/elite_influencers/elvish_yadav.png'),
    },
    {
        name: 'Apoorva',
        image: require('../assets/elite_influencers/apoorva.png'),
    },
    {
        name: 'Technical Guruji',
        image: require('../assets/elite_influencers/technical_guruji.png'),
    },
    {
        name: 'Ujjwal',
        image: require('../assets/elite_influencers/ujjwal.png'),
    },
    {
        name: 'Ajjubhai',
        image: require('../assets/elite_influencers/ajjubhai.png'),
    },
    {
        name: 'Dolly Singh',
        image: require('../assets/elite_influencers/dolly_singh.png'),
    },
    {
        name: 'Ruchika Rathore',
        image: require('../assets/elite_influencers/ruchika_rathore.png'),
    },
    {
        name: 'Vinay Malhan',
        image: require('../assets/elite_influencers/vinay_malhan.png'),
    },
    {
        name: 'Dimple Malhan',
        image: require('../assets/elite_influencers/dimple_malhan.png'),
    },
    {
        name: 'Abhishek Malhan',
        image: require('../assets/elite_influencers/abhishek_malhan.png'),
    },
    {
        name: 'Akash Dodeja',
        image: require('../assets/elite_influencers/askash_dodeja.png'),
    },
    {
        name: 'Simran Dodeja',
        image: require('../assets/elite_influencers/simran_dodege.png'),
    },
    {
        name: 'Jiya Shankar',
        image: require('../assets/elite_influencers/jiya_shankar.png'),
    },
];
const EliteInfluencers = () => {
	return (
		<div className="elite-influencers-container">
			<h1>Elite Influencers</h1>
			<p>Only the chosen ones are here</p>
			<p>Welcome to the Influencer Elite Gala Night</p>
			<div className="influencers-grid">
				{influencersData.map((influencer, index) => (
					<div className="influencer-card" key={index}>
						<img
							src={influencer.image}
							alt={influencer.name}
							className="influencer-image"
						/>
						<h2>{influencer.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default EliteInfluencers;
