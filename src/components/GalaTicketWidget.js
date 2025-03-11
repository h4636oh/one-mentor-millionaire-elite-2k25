import React from 'react';
import galaTicket from '../assets/gala_ticket.png';
import '../styles/GalaTicketWidget.css';

const GalaTicketWidget = () => {
	return (
		<div className="gala-ticket-section">
			<h2>Get your ticket for Gala Night</h2>
			<img
				src={galaTicket}
				alt="Millionaire Elite 2025 Gala Ticket"
				className="gala-ticket-image"
			/>
		</div>
	);
};

export default GalaTicketWidget;