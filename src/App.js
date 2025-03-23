import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageHome from './components/LandingPageHome';
import Schedule from './components/Schedule';
import InvestorTrophy from './components/InvestorTrophy';
import EliteGuests from './components/EliteGuests';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';
import sponsors from './assets/sponsors.png';
import TTMMRegistration from './components/TTMMRegistration';
import TTMM from './components/TTMM';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import GalaNight from './components/GalaNight';
import ContactUs from './components/ContactUs';
import Sponsors from './components/Sponsors';
import Influencers from './components/Influencers';
import Investment from './components/Investment';
import './styles/Common.css';

const App = () => {	
	return (
		<Router>
			<Routes>
				<Route path="/register" element={<TTMMRegistration />} />
				<Route path="/ttmm" element={<TTMM />} />
				<Route path="/login" element={<AuthForm />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/galanight" element={<GalaNight />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/sponsors" element={<Sponsors />} />
				<Route path="/influencers" element={<Influencers />} />
				<Route path='/investment' element={<Investment />} />
				<Route path="/" element={
					<div style={{ backgroundColor: '#010624' }}>
						<LandingPageHome />
						<img src={sponsors} alt="Sponsors" className="sponsors-image" />
						<Schedule />
						<InvestorTrophy />
						<EliteGuests />
						<ReachOut />
						<Footer />
					</div>
				} />
			</Routes>
		</Router>
	);
};

export default App;
