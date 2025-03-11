import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import galaTicket from '../assets/gala_ticket.png'; // Make sure to add your ticket image
import TTMMRegistrationWidget from './TTMMRegistrationWidget';
import '../styles/TTMMRegistration.css';

const TTMMRegistration = () => {
    return (
        <div className="ttmm-registration-container">
            <Navbar />
            
            <div className="ttmm-content">
                <div className="ttmm-header">
                    <h1>Don't Miss Out!</h1>
                    <h2>Secure Your Spot Now!</h2>
                    <p>Join us for Millionaire Elite and be part of an unforgettable experience filled with insights, networking, and innovation.</p>
                </div>

                <div className="registration-form-container">
                    <TTMMRegistrationWidget />
                </div>

                <div className="gala-ticket-section">
                    <h2>Get your ticket for Gala Night</h2>
                    <img 
                        src={galaTicket} 
                        alt="Millionaire Elite 2025 Gala Ticket" 
                        className="gala-ticket-image"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TTMMRegistration;