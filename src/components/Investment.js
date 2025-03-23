import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import landPageLogo from '../assets/land_page_logo.png';
import '../styles/Investment.css';

const Investment = () => {
	const steps = [
		{
			number: 1,
			title: 'Submit Your Investment Order',
			description:
				'Place your investment request through our secure online platform',
		},
		{
			number: 2,
			title: 'Approval Process',
			description:
				'Our expert team will review and approve your request within 24 to 48 hours',
		},
		{
			number: 3,
			title: 'Capital Allocation',
			description:
				'Upon approval, your funds will be allocated to the project.',
		},
		{
			number: 4,
			title: 'Event Day Credit',
			description:
				'Receive your returns directly on the day of the event — seamless and efficient',
		},
	];

	const terms = [
		'Minimum investment amount is ₹2,000.',
		'Investment slots are highly limited and subject to approval.',
		'Only the Top 50 highest capital investors stand the best chance of approval.',
		'Approval time ranges between 24 to 48 hours.',
		'Returns will be credited only on the day of the event.',
		'Returns are post-tax and after transaction fees.',
		'Capital allocation is final upon approval — no changes allowed.',
		'Refunds will not be processed after approval.',
		'Millionaire Elite 25 reserves the right to accept or reject any investment request.',
		'Investor details must be accurate and verified.',
	];

	return (
		<div className="investment-container">
			<Navbar />
			<div className="hero-section">
				<img
					src={landPageLogo}
					className="title_logo"
					alt="Millionaire Elite-25 Logo"
					height={194}
					width={500}
				/>
				<h1>The Ultimate Investment Opportunity of 2025</h1>
				<p className="description">
					Be Among the Top 50 Visionary Investors and Secure Your
					Financial Future
				</p>
			</div>
			<div className="brief-section">
				Millionaire Elite 25 offers an exclusive chance to invest in a
				revolutionary project with projected revenue soaring up to ₹40
				crore. This is not just an event — it’s your ticket to massive
				wealth creation, elite networking and unprecedented returns.
				With only a handful of slots available, this opportunity is
				reserved for the boldest and most forward-thinking investors.
			</div>
			<div className="info-section">
				<h1 className="main-heading">
					What makes Millionaire Elite 25 special?
				</h1>
				<div className="benefits-section">
					<div className="benefit-card">
						<h2>Massive Revenue Potential</h2>
						<p>Projected earnings up to ₹40 crore.</p>
					</div>

					<div className="benefit-card">
						<h2>Exclusive Elite Community</h2>
						<p>
							Connect with high-net-worth visionaries and top
							investors.
						</p>
					</div>

					<div className="benefit-card">
						<h2>Exceptional ROI</h2>
						<p>
							Earn between 2% to 5% on your capital after post tax
							and transaction fees.
						</p>
					</div>
				</div>

				<div className="additional-benefits">
					<div className="benefit-card">
						<h2>Low Entry Barrier</h2>
						<p>
							Start investing with just ₹2,000 and unlock the path
							to financial freedom.
						</p>
					</div>

					<div className="benefit-card">
						<h2>Exclusive investor pass</h2>
						<p>
							Get access to the 17MM table, offering premium
							networking and elite opportunities
						</p>
					</div>
				</div>

				<h1 className="section-heading">Return Structure</h1>

				<div className="returns-section">
					<div className="return-card">
						<h2>₹2,000 to ₹10,000 Investment</h2>
						<p>
							Fixed return of 1%. Only 100 slots available — due
							to overwhelming demand, failure to secure a slot
							will result in an automatic refund.
						</p>
					</div>

					<div className="return-card">
						<h2>₹10,001 and Above Investment</h2>
						<p>
							Returns between 2% and 5%, with maximum return
							reserved for higher capital investments.
						</p>
					</div>

					<div className="return-card">
						<h2>Final Return Percentage</h2>
						<p>
							Determined by our expert team based on your capital
							and the performance of the project.
						</p>
					</div>
				</div>
			</div>
			<div className="procedure-section">
				<h1 className="procedure-heading">Procedure</h1>
				<div className="timeline">
					{steps.map((step, index) => (
						<div className="timeline-item" key={index}>
							<div className="timeline-circle">
								<span>{step.number}</span>
							</div>
							<div className="timeline-content">
								<h2>{step.title}</h2>
								<p>{step.description}</p>
							</div>
							{index < steps.length - 1 && (
								<div className="timeline-line"></div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="toc-section">
				<div className="terms-card">
					<h1 className="terms-heading">Terms and Conditions</h1>
					<div className="terms-content">
						<ol className="terms-list">
							{terms.map((term, index) => (
								<li key={index} className="term-item">
									{term}
								</li>
							))}
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Investment;
