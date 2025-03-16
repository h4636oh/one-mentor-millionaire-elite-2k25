import React, { useState } from 'react';
import '../styles/TTMMRegistrationWidget.css';

const TTMMRegistrationWidget = () => {
	const [formData, setFormData] = useState({
		startupName: '',
		stage: '',
		category: '',
		previousFunding: '',
		valuation: '',
		pitchDeck: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		message: '',
	});

	const handleChange = (e) => {
		const { name, value, type, files } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === 'file' ? files[0] : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ success: false, message: '' });

		// Get token from localStorage
		const token = localStorage.getItem('token');
		if (!token) {
			setSubmitStatus({
				success: false,
				message: 'Please login first to register your startup'
			});
			setIsSubmitting(false);
			return;
		}

		// Validate PDF file type
		if (formData.pitchDeck && formData.pitchDeck.type !== 'application/pdf') {
			setSubmitStatus({
				success: false,
				message: 'Please upload only PDF files for pitch deck'
			});
			setIsSubmitting(false);
			return;
		}

		try {
			const formDataToSend = new FormData();
			formDataToSend.append('userId', token);
			formDataToSend.append('startupName', formData.startupName);
			formDataToSend.append('stage', formData.stage);
			formDataToSend.append('category', formData.category);
			formDataToSend.append('previousFundingRounds', formData.previousFunding);
			formDataToSend.append('valuation', formData.valuation);
			formDataToSend.append('pitchDeck', formData.pitchDeck);

			const response = await fetch('https://millionaireelite25-backend.vercel.app/ttmm/register', {
				method: 'POST',
				body: formDataToSend,
				headers: {
					'Authorization': `Bearer ${token}` // Also adding token in headers if needed
				}
			});

			if (response.status === 201) {
				setSubmitStatus({
					success: true,
					message: 'Successfully joined the waitlist!',
				});
				// Clear form after successful submission
				setFormData({
					startupName: '',
					stage: '',
					category: '',
					previousFunding: '',
					valuation: '',
					pitchDeck: '',
				});
			} else if (response.status === 500) {
				throw new Error('Server error occurred');
			} else {
				const data = await response.json();
				throw new Error(data.message || 'Registration failed');
			}
		} catch (error) {
			setSubmitStatus({
				success: false,
				message: error.message || 'Something went wrong. Please try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="ttmm-registration">
			<h1>TTMM</h1>
			<h2>REGISTER YOUR STARTUP FOR TTMM</h2>

			{submitStatus.message && (
				<div
					className={`status-message ${
						submitStatus.success ? 'success' : 'error'
					}`}
				>
					{submitStatus.message}
				</div>
			)}

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Startup Name</label>
					<input
						type="text"
						name="startupName"
						placeholder="Name"
						value={formData.startupName}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Stage</label>
					<input
						type="text"
						name="stage"
						placeholder="Idea, MVP, Growth, Established"
						value={formData.stage}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Category</label>
					<input
						type="text"
						name="category"
						placeholder="Tech, EdTech, FinTech, Healthcare, etc."
						value={formData.category}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Previous Funding Rounds</label>
					<input
						type="text"
						name="previousFunding"
						placeholder="If any"
						value={formData.previousFunding}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Valuation</label>
					<input
						type="text"
						name="valuation"
						placeholder="If any"
						value={formData.valuation}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Pitch Deck (PDF only)</label>
					<input
						type="file"
						name="pitchDeck"
						accept=".pdf"
						onChange={handleChange}
					/>
				</div>

				<div className="register-btn-container">
					<button
						type="submit"
						className="register-btn"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Registering...' : 'Register'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default TTMMRegistrationWidget;
