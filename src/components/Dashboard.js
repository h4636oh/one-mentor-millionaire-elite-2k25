import React, { useState, useEffect, useRef } from 'react';
import { getItemWithExpiry, setItemWithExpiry } from '../utils/localStorage';
import '../styles/Dashboard.css';

const Dashboard = () => {
	const profilePhotoInput = useRef(null);
	const [user, setUser] = useState(null);
	const [status, setStatus] = useState({ message: '', type: '' });
	const [showPasswordFields, setShowPasswordFields] = useState(false);

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		age: '',
		email: '',
		phone: '',
		role: 'student',
		profilePhoto: null,
		currentPassword: '',
		newPassword: '',
		confirmNewPassword: '',
		education: {
			degree: '',
			institution: '',
			yearOfGraduation: '',
		},
		workExperience: {
			company: '',
			jobTitle: '',
			yearsOfExperience: '',
		},
		startupDetails: {
			startupName: '',
			industry: '',
			fundingStage: '',
		},
	});

	useEffect(() => {
		const userData = getItemWithExpiry('user');
		if (userData) {
			setUser(userData);
			setFormData({
				firstName: userData.firstName || '',
				lastName: userData.lastName || '',
				age: userData.age || '',
				email: userData.email || '',
				phone: userData.phone || '',
				role: userData.role || 'student',
				profilePhoto: null,
				currentPassword: '',
				newPassword: '',
				confirmNewPassword: '',
				education: {
					degree: userData.education?.degree || '',
					institution: userData.education?.institution || '',
					yearOfGraduation:
						userData.education?.yearOfGraduation || '',
				},
				workExperience: {
					company: userData.workExperience?.company || '',
					jobTitle: userData.workExperience?.jobTitle || '',
					yearsOfExperience:
						userData.workExperience?.yearsOfExperience || '',
				},
				startupDetails: {
					startupName: userData.startupDetails?.startupName || '',
					industry: userData.startupDetails?.industry || '',
					fundingStage: userData.startupDetails?.fundingStage || '',
				},
			});
		} else {
			window.location.href = '/login';
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.includes('.')) {
			const [parent, child] = name.split('.');
			setFormData((prev) => ({
				...prev,
				[parent]: {
					...prev[parent],
					[child]: value,
				},
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleRoleChange = (e) => {
		const newRole = e.target.value;
		setFormData((prev) => ({
			...prev,
			role: newRole,
			education:
				newRole === 'student'
					? prev.education
					: { degree: '', institution: '', yearOfGraduation: '' },
			workExperience:
				newRole === 'professional'
					? prev.workExperience
					: { company: '', jobTitle: '', yearsOfExperience: '' },
			startupDetails:
				newRole === 'startup'
					? prev.startupDetails
					: { startupName: '', industry: '', fundingStage: '' },
		}));
	};

	const validateForm = () => {
		if (showPasswordFields) {
			if (!formData.currentPassword) {
				setStatus({
					message: 'Current password is required',
					type: 'error',
				});
				return false;
			}
			if (formData.newPassword !== formData.confirmNewPassword) {
				setStatus({
					message: 'New passwords do not match',
					type: 'error',
				});
				return false;
			}
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		const token = getItemWithExpiry('token');
		const userId = getItemWithExpiry('userId');

		if (!token || !userId) {
			setStatus({
				message: 'Session expired. Please login again.',
				type: 'error',
			});
			return;
		}

		const formDataToSend = new FormData();

		formDataToSend.append('firstName', formData.firstName);
		formDataToSend.append('lastName', formData.lastName);
		formDataToSend.append('age', formData.age);
		formDataToSend.append('email', formData.email);
		formDataToSend.append('phone', formData.phone);
		formDataToSend.append('role', formData.role);

		if (formData.newPassword) {
			formDataToSend.append('password', formData.newPassword);
		}
		
		if (formData.profilePhoto) {
			formDataToSend.append('profilePhoto', formData.profilePhoto);
		}

		if (formData.role === 'student') {
			formDataToSend.append('education', JSON.stringify(formData.education));
		} else if (formData.role === 'professional') {
			formDataToSend.append('workExperience', JSON.stringify(formData.workExperience));
		} else if (formData.role === 'startup') {
			formDataToSend.append('startupDetails', JSON.stringify(formData.startupDetails));
		}

		try {
			const response = await fetch(
				`https://millionaireelite25-backend.vercel.app/user/update-user/${userId}`,
				{
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: formDataToSend,
				}
			);

			const data = await response.json();

			if (data.success) {
				setStatus({
					message: 'Profile updated successfully!',
					type: 'success',
				});
				setShowPasswordFields(false);
				setItemWithExpiry('user', data.user);
				setUser(data.user);
			} else {
				throw new Error(data.message);
			}
		} catch (error) {
			setStatus({
				message: error.message || 'Failed to update profile',
				type: 'error',
			});
		}
	};

	return (
		<div className="dashboard-container">
			<div className="profile-header">
				<div className="profile-pic-container">
					<input
						ref={profilePhotoInput} // Use ref={profilePhotoInput} instead of ref={(input) => {profilePhotoInput = input;}}
						type="file"
						accept="image/*"
						onChange={(e) =>
							handleChange({
								target: {
									name: 'profilePhoto',
									value: e.target.files[0],
								},
							})
						}
						className="profile-pic-input"
					/>
					<img
						src={
							formData.profilePhoto
								? URL.createObjectURL(formData.profilePhoto)
								: user?.profilePhoto || '/default-avatar.svg'
						}
						alt="Profile"
						className="profile-pic"
						height={100}
						width={100}
						onClick={() => profilePhotoInput.current?.click()} // Use .current to access the DOM element
					/>{' '}
				</div>
				<h1>
					{user?.firstName} {user?.lastName}
				</h1>
			</div>

			{status.message && (
				<div className={`status-message ${status.type}`}>
					{status.message}
				</div>
			)}

			<form onSubmit={handleSubmit} className="profile-form">
				<div className="form-section">
					<h2>Personal Information</h2>
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Age</label>
						<input
							type="number"
							name="age"
							value={formData.age}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Role</label>
						<select
							name="role"
							value={formData.role}
							onChange={handleRoleChange}
						>
							<option value="student">Student</option>
							<option value="professional">Professional</option>
							<option value="startup">Startup</option>
						</select>
					</div>
				</div>

				{formData.role === 'student' && (
					<div className="form-section">
						<h2>Education Details</h2>
						<div className="form-group">
							<label>Degree</label>
							<input
								type="text"
								name="education.degree"
								value={formData.education.degree}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Institution</label>
							<input
								type="text"
								name="education.institution"
								value={formData.education.institution}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Year of Graduation</label>
							<input
								type="number"
								name="education.yearOfGraduation"
								value={formData.education.yearOfGraduation}
								onChange={handleChange}
							/>
						</div>
					</div>
				)}

				{formData.role === 'professional' && (
					<div className="form-section">
						<h2>Work Experience</h2>
						<div className="form-group">
							<label>Company</label>
							<input
								type="text"
								name="workExperience.company"
								value={formData.workExperience.company}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Job Title</label>
							<input
								type="text"
								name="workExperience.jobTitle"
								value={formData.workExperience.jobTitle}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Years of Experience</label>
							<input
								type="number"
								name="workExperience.yearsOfExperience"
								value={
									formData.workExperience.yearsOfExperience
								}
								onChange={handleChange}
							/>
						</div>
					</div>
				)}

				{formData.role === 'startup' && (
					<div className="form-section">
						<h2>Startup Details</h2>
						<div className="form-group">
							<label>Startup Name</label>
							<input
								type="text"
								name="startupDetails.startupName"
								value={formData.startupDetails.startupName}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Industry</label>
							<input
								type="text"
								name="startupDetails.industry"
								value={formData.startupDetails.industry}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Funding Stage</label>
							<input
								type="text"
								name="startupDetails.fundingStage"
								value={formData.startupDetails.fundingStage}
								onChange={handleChange}
							/>
						</div>
					</div>
				)}

				<div className="form-section">
					<h2>Password Management</h2>
					<button
						type="button"
						className="toggle-password-button"
						onClick={() =>
							setShowPasswordFields(!showPasswordFields)
						}
					>
						{showPasswordFields
							? 'Cancel Password Change'
							: 'Change Password'}
					</button>

					{showPasswordFields && (
						<>
							<div className="form-group">
								<label>Current Password</label>
								<input
									type="password"
									name="currentPassword"
									value={formData.currentPassword}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>New Password</label>
								<input
									type="password"
									name="newPassword"
									value={formData.newPassword}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Confirm New Password</label>
								<input
									type="password"
									name="confirmNewPassword"
									value={formData.confirmNewPassword}
									onChange={handleChange}
								/>
							</div>
						</>
					)}
				</div>

				<button type="submit" className="save-button">
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default Dashboard;
