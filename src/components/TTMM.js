import React from "react";
import Navbar from "./Navbar";
import TTMMTimeline from "./TTMMTimeline";
import EliteInvestors from "./EliteInvestors";
import TTMMPasses from "./TTMMPasses";
import GalaTicketWidget from "./GalaTicketWidget";
import WantToGetNoticed from "./WantToGetNoticed";
import Footer from "./Footer";
import '../styles/TTMM.css';

const TTMM = () => {
    return (
        <div className="ttmm-container">
            <Navbar />
            <div className="ttmm-content">
                <div className="ttmm-logo">TTMM</div>
                <h1>TTMM — Your Big Break Is Here!</h1>
                <p className="ttmm-main-text">
                    Get funding up to INR 9.5 Cr in just 10 minutes! Passes are out — don't wait, grab yours now! 
                    This is your chance to turn your dream startup into reality with 100% funding guaranteed!
                </p>
                <p className="ttmm-secondary-text">
                    But that's not all — India's elite investors will be there! Get a chance to meet them and pitch 
                    your ideas directly. The Investor Table is the new game-changer — and it could change your life!
                </p>
                <button className="register-button" onClick={() => window.location.href = '/register'}>
                    Register
                </button>
			</div>
			<TTMMTimeline />
			<EliteInvestors />
			<TTMMPasses />
			<GalaTicketWidget />
			<WantToGetNoticed />
			<Footer />
        </div>
    );
};

export default TTMM; 