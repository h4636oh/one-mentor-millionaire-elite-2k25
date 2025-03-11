import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
	const calculateTimeLeft = () => {
		const targetDate = new Date('2025-04-01T00:00:00').getTime();
		const now = new Date().getTime();
		const difference = targetDate - now;

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="countdown">
			<div className="time-box-container">
				<div className="time-box">
					<span className="time-box-text">{timeLeft.days}</span>{' '}
					<span>Days</span>
				</div>
			</div>
			<div className="time-box-container">
				<div className="time-box">
					<span className="time-box-text">{timeLeft.hours}</span>{' '}
					<span>Hours</span>
				</div>
			</div>
			<div className="time-box-container">
				<div className="time-box">
					<span className="time-box-text">{timeLeft.minutes}</span>{' '}
					<span>Minutes</span>
				</div>
			</div>
			<div className="time-box-container">
				<div className="time-box">
					<span className="time-box-text">{timeLeft.seconds}</span>{' '}
					<span>Seconds</span>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
