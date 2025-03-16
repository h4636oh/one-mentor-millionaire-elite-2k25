import React, { useState } from 'react';
import '../styles/AuthForm.css';

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		role: 'student', // default role
		// Education fields
		education: {
			degree: '',
			institution: '',
			yearOfGraduation: ''
		},
		// Work Experience fields
		workExperience: {
			company: '',
			jobTitle: '',
			yearsOfExperience: ''
		},
		// Startup Details
		startupDetails: {
			startupName: '',
			industry: '',
			fundingStage: ''
		}
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState({ message: '', type: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.includes('.')) {
			// Handle nested objects (education, workExperience, startupDetails)
			const [parent, child] = name.split('.');
			setFormData((prev) => ({
				...prev,
				[parent]: {
					...prev[parent],
					[child]: value
				}
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value
			}));
		}
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

		// Prepare submission data by nullifying unused fields
		const submissionData = {
			...formData,
			education: formData.role === 'student' ? formData.education : null,
			workExperience: formData.role === 'professional' ? formData.workExperience : null,
			startupDetails: formData.role === 'startup' ? formData.startupDetails : null
		};

		try {
			const response = await fetch(`https://millionaireelite25-backend.vercel.app/auth/${isLogin ? 'login' : 'register'}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(submissionData),
			});

			const data = await response.json();

			if (response.ok) {
				if (isLogin) {
					// Store token in localStorage for future use
					localStorage.setItem('token', data.token);
					// Store user data if needed
					localStorage.setItem('user', JSON.stringify(data.user));
				}
				
				setStatus({ 
					message: isLogin ? 'Login successful!' : 'Registration successful!', 
					type: 'success' 
				});
				
				// Redirect or handle successful auth
				// You might want to use React Router or a callback prop here
				window.location.href = '/'; // Or your desired redirect path
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
						<>
							<div className="form-group">
								<label>First Name</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="Enter your first name"
									required={!isLogin}
								/>
							</div>

							<div className="form-group">
								<label>Last Name</label>
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Enter your last name"
									required={!isLogin}
								/>
							</div>

							<div className="form-group">
								<label>Age</label>
								<input
									type="number"
									name="age"
									value={formData.age}
									onChange={handleChange}
									placeholder="Enter your age"
									required={!isLogin}
								/>
							</div>

							<div className="form-group">
								<label>Phone</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="Enter your phone number"
									required={!isLogin}
								/>
							</div>

							<div className="role-toggle">
								<button
									type="button"
									className={formData.role === 'student' ? 'active' : ''}
									onClick={() => handleChange({ target: { name: 'role', value: 'student' } })}
								>
									Student
								</button>
								<button
									type="button"
									className={formData.role === 'professional' ? 'active' : ''}
									onClick={() => handleChange({ target: { name: 'role', value: 'professional' } })}
								>
									Professional
								</button>
								<button
									type="button"
									className={formData.role === 'startup' ? 'active' : ''}
									onClick={() => handleChange({ target: { name: 'role', value: 'startup' } })}
								>
									Startup
								</button>
							</div>

							{formData.role === 'student' && (
								<div className="education-fields">
									<div className="form-group">
										<label>Degree</label>
										<input
											type="text"
											name="education.degree"
											value={formData.education.degree}
											onChange={handleChange}
											placeholder="Enter your degree"
											required
										/>
									</div>
									<div className="form-group">
										<label>Institution</label>
										<input
											type="text"
											name="education.institution"
											value={formData.education.institution}
											onChange={handleChange}
											placeholder="Enter your institution"
											required
										/>
									</div>
									<div className="form-group">
										<label>Year of Graduation</label>
										<input
											type="number"
											name="education.yearOfGraduation"
											value={formData.education.yearOfGraduation}
											onChange={handleChange}
											placeholder="Enter graduation year"
											required
										/>
									</div>
								</div>
							)}

							{formData.role === 'professional' && (
								<div className="work-experience-fields">
									<div className="form-group">
										<label>Company</label>
										<input
											type="text"
											name="workExperience.company"
											value={formData.workExperience.company}
											onChange={handleChange}
											placeholder="Enter company name"
											required
										/>
									</div>
									<div className="form-group">
										<label>Job Title</label>
										<input
											type="text"
											name="workExperience.jobTitle"
											value={formData.workExperience.jobTitle}
											onChange={handleChange}
											placeholder="Enter job title"
											required
										/>
									</div>
									<div className="form-group">
										<label>Years of Experience</label>
										<input
											type="number"
											name="workExperience.yearsOfExperience"
											value={formData.workExperience.yearsOfExperience}
											onChange={handleChange}
											placeholder="Enter years of experience"
											required
										/>
									</div>
								</div>
							)}

							{formData.role === 'startup' && (
								<div className="startup-fields">
									<div className="form-group">
										<label>Startup Name</label>
										<input
											type="text"
											name="startupDetails.startupName"
											value={formData.startupDetails.startupName}
											onChange={handleChange}
											placeholder="Enter startup name"
											required
										/>
									</div>
									<div className="form-group">
										<label>Industry</label>
										<input
											type="text"
											name="startupDetails.industry"
											value={formData.startupDetails.industry}
											onChange={handleChange}
											placeholder="Enter industry"
											required
										/>
									</div>
									<div className="form-group">
										<label>Funding Stage</label>
										<input
											type="text"
											name="startupDetails.fundingStage"
											value={formData.startupDetails.fundingStage}
											onChange={handleChange}
											placeholder="Enter funding stage"
											required
										/>
									</div>
								</div>
							)}
						</>
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

export const fetchWithAuth = async (url, options = {}) => {
	const token = localStorage.getItem('token');
	
	const headers = {
		'Content-Type': 'application/json',
		...options.headers,
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const response = await fetch(url, {
		...options,
		headers,
	});

	return response;
};
