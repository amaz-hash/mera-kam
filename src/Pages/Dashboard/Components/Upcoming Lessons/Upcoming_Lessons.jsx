import React from 'react';
import './Upcoming_Lessons.css';

const lessons = [
  {
    title: 'Programming Fundamentals',
    date: '09-Jan-24',
    time: '09:00 AM',
    batch: 'BS/CS - Batch 01',
    isHighlighted: true,
  },
  {
    title: 'Object-Oriented Programming',
    date: '10-Jan-24',
    time: '11:00 AM',
    batch: 'BS/CS - Batch 02',
    isHighlighted: false,
  },
  {
    title: 'Intro to Software Engineering',
    date: '10-Jan-24',
    time: '11:00 AM',
    batch: 'BS/CS - Batch 04',
    isHighlighted: false,
  },
];

function UpcomingLessons() {
  return (
    <div className="upcoming-lessons">
    <h2>UPCOMING LESSONS</h2>
      {lessons.map((lesson, index) => (
        <div
          key={index}
          className={`lesson-card ${lesson.isHighlighted ? 'highlighted' : ''}`}
        >
          <div className="lesson-title">{lesson.title}</div>
          <div className="lesson-details">
            <span>{lesson.date}</span>
            <span>{lesson.time}</span>
          </div>
          <div className="lesson-batch">{lesson.batch}</div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingLessons;
