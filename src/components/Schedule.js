import React from 'react';
import '../App.css';
const scheduleData = [
	{
		time: '5:00 - 6:15 PM',
		title: 'Icons of Elite 2025 - Shraddha Kapoor and Ranveer Singh.',
		description: [
			'Street Ki Aidan and Ranveer Ka Andaz - Mumbai Ready Hai Ek Zabardast Hungame Ke',
			'Liye on Coming soon this April.',
		],
	},
	{
		time: '6:15 - 7:00 PM',
		title: 'One-Mentor Grand Launch and Introduction.',
		description: [
			'One-Mentor Ki Biggest Surprise Aa Rahi Hai - Startup dreams will get Reality.',
			'April mein Taaljhar Rahega.',
		],
	},
	{
		time: '7:00 - 7:40 PM',
		title: 'TTMM (The Ten Minute Million)',
		description: [
			'10-Minute Million: 7.5 Million Tak Ka Chance only in 10 Minutes! Wo sirf dekhte reh jaayenge! Coming soon this April Ko FOMO to dekhna hai. Registration miss mat karna.',
			'Registrations Start: 8th March | Deadline: 27th March.',
		],
	},
	{
		time: '7:40 - 8:00 PM',
		title: 'Cheque Handout & Team Photo',
		description: [
			'Presentation of investment cheques to the startup founders.',
			'Group photo session with investors, founders, and One-Mentor leadership.',
		],
	},
	{
		time: '8:00 - 9:00 PM',
		title: 'Influencers Elite',
		description: [
			'The Stars You Love, The Surprises You Never Expected - Biggest Creator Reveal Drops on 8th April! Stay Tuned at influencer elite.',
		],
	},
	{
		time: '9:00 - 12:00 AM',
		title: 'Gala Night',
		description: [
			'8:00 PM - 8:40 PM (Arijit Singh, Vishal Dadlani & Abhishek Malhan)',
			'9:40 PM - 12:00 PM (Shrey Ghoshal & Sonu Nigam)',
			'12:00 PM - 11:00 PM (Badshah, AR Rahman, Raftaar & Divine)',
			'11:00 PM - 12:00 PM (Mohammad Faiz & King)',
			'11:20 PM - 12:00 PM (Anuv Jain & Yo Honey Singh).',
		],
	},
];

const ScheduleCard = ({ time, title, description }) => {
	return (
		<div className="schedule-card-border">
			<div className="schedule-card">
				<div className="schedule-time-container">
					<div className="schedule-time">{time}</div>
				</div>
				<div className="schedule-details-container">
					<div className="schedule-title">{title}</div>
					<div className="schedule-description">
						{description.map((desc, index) => (
							<p key={index}>{desc}</p> // Render each description item as a paragraph
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const Schedule = () => {
	return (
		<div className="schedule-container">
			<h2 className="schedule-heading">Schedule</h2>
			{scheduleData.map((item, index) => (
				<ScheduleCard
					key={index}
					time={item.time}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	);
};

export default Schedule;
