import React from 'react';
import LandingPageHome from './components/LandingPageHome';
import Schedule from './components/Schedule';
import InvestorTrophy from './components/InvestorTrophy';
import EliteGuests from './components/EliteGuests';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';
import sponsors from './assets/sponsors.png';
import './App.css';

const App = () => {
	return (
		<div style={{ backgroundColor: '#010624' }}>
			<LandingPageHome />
			<img src={sponsors} alt="Sponsors" className="sponsors-image" />
			<Schedule />
			<InvestorTrophy />
			<EliteGuests />
			<ReachOut />
			<Footer />
		</div>
	);
};

export default App;
