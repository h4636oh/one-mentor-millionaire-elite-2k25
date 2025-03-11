import React from 'react';
import '../styles/TTMMTimeline.css';

const TTMMTimeline = () => {
    const timelineEvents = [
        {
            date: '8th March',
            event: 'Registration Opens'
        },
        {
            date: '27th March',
            event: 'Registration Deadline'
        },
        {
            date: '29th March',
            event: 'Semi-Final Declaration'
        },
        {
            date: '2nd April',
            event: 'Finalist Announcement'
        },
        {
            date: '6th April',
            event: 'Grand Finale'
        }
    ];

    return (
        <div className="timeline-container">
            <h1>TTMM Timeline</h1>
            <p className="timeline-description">
                Got a game-changing idea? This is your chance to make it big! Step up, pitch in 10 minutes, and turn 
                your vision into a millionaire reality.
            </p>
            
            <div className="timeline">
                <div className="timeline-line"></div>
                {timelineEvents.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-dot"></div>
                        <div className="timeline-event">{item.event}</div>
                    </div>
                ))}
            </div>

            <p className="timeline-footer">
                Only Finalist will get the Chance opportunity to Present in Millionaire Elite -25 and Semi-Finalists top 50 Start-ups Only will get 
                free pass to TTMM Investor Table take funding 100% as per there stage for promising Start-up.
            </p>
        </div>
    );
};

export default TTMMTimeline;
