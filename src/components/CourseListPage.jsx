// src/components/CourseListPage.jsx
import React, { useState, useEffect } from 'react';
import './CourseListPage.css';

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock API call
    const courseModel = {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here', // Replace with the actual image link
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    };

    setCourses([courseModel]);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-list-container">
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Description: {course.description}</p>
              <p>Enrollment Status: {course.enrollmentStatus}</p>
              <p>Course Duration: {course.duration}</p>
              <p>Schedule: {course.schedule}</p>
              <p>Location: {course.location}</p>
              <p>Prerequisites: {course.prerequisites.join(', ')}</p>
              <details>
                <summary>Syllabus</summary>
                <ul>
                  {course.syllabus.map(week => (
                    <li key={week.week}>
                      <strong>Week {week.week}:</strong> {week.topic} - {week.content}
                    </li>
                  ))}
                </ul>
              </details>
              <details>
                <summary>Enrolled Students</summary>
                <ul>
                  {course.students.map(student => (
                    <li key={student.id}>
                      {student.name} ({student.email})
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListPage;
