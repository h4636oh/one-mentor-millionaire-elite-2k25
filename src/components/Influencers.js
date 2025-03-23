import React from 'react';
import '../styles/Influencers.css';

// Import all sponsor logos

import EliteInfluencers from './EliteInfluencers';
import Navbar from './Navbar';
import GalaTicketWidget from './GalaTicketWidget';
import Footer from './Footer';

const Influencers = () => {
  return (
    <section className="influencers-section">
        <Navbar />
      <div className="influencers-container">
        <h1 className="influencers-title">Influencers Elite</h1>
        <p className="influencers-message">
            If you thought Coldplay was big, wait till you witness the magic of the Influencer Elite Gala Night! With India’s finest singers, this night is going to be pure fire.
        </p>
        <EliteInfluencers />
      </div>
      <GalaTicketWidget />
      <Footer />
    </section>
  );
};

export default Influencers;
