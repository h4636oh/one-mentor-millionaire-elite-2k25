import React, { useState } from 'react';
import '../styles/AuthForm.css';

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		name: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState({ message: '', type: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setStatus({ message: '', type: '' });

		// Validation
		if (!isLogin && formData.password !== formData.confirmPassword) {
			setStatus({ message: 'Passwords do not match', type: 'error' });
			setIsSubmitting(false);
			return;
		}

		try {
			// Replace with your actual API endpoint
			const response = await fetch(`http://localhost:8000/api/${isLogin ? 'login' : 'signup'}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus({ message: 'Success!', type: 'success' });
				// Handle successful auth (e.g., store token, redirect)
			} else {
				throw new Error(data.message || 'Authentication failed');
			}
		} catch (error) {
			setStatus({ message: error.message, type: 'error' });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="auth-container">
			<div className="auth-box">
				<div className="auth-toggle">
					<button
						className={isLogin ? 'active' : ''}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						className={!isLogin ? 'active' : ''}
						onClick={() => setIsLogin(false)}
					>
						Sign Up
					</button>
				</div>

				{status.message && (
					<div className={`status-message ${status.type}`}>
						{status.message}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					{!isLogin && (
						<div className="form-group">
							<label>Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Enter your name"
								required={!isLogin}
							/>
						</div>
					)}

					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							required
						/>
					</div>

					{!isLogin && (
						<div className="form-group">
							<label>Confirm Password</label>
							<input
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm your password"
								required={!isLogin}
							/>
						</div>
					)}

					<button
						type="submit"
						className="submit-btn"
						disabled={isSubmitting}
					>
						{isSubmitting
							? 'Processing...'
							: isLogin
							? 'Login'
							: 'Sign Up'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
