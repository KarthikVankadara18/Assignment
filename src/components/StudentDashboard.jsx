import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const mockEnrolledCourses = [
      { id: 1, name: 'Introduction to React', instructor: 'John Doe', thumbnail: 'react-thumbnail.jpg', dueDate: '2022-12-31', progress: 50, completed: false },
    ];

    setEnrolledCourses(mockEnrolledCourses);
  }, []);

  const markCourseAsCompleted = (courseId) => {
    setEnrolledCourses(prevCourses =>
      prevCourses.map(course => (course.id === courseId ? { ...course, completed: true } : course))
    );
  };

  return (
    <div className="student-dashboard-container">
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <div>
              <img src={course.thumbnail} alt={course.name} />
            </div>
            <div>
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <progress value={course.progress} max="100"></progress>
              {!course.completed && (
                <button onClick={() => markCourseAsCompleted(course.id)}>
                  Mark as Completed
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
