import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    const mockCourse = {
      id: 1,
      name: 'Introduction to React',
      instructor: 'John Doe',
      description: 'Learn the basics of React.',
      enrollmentStatus: 'Open',
      duration: '8 weeks',
      schedule: 'Mon, Wed, Fri 10:00 AM - 12:00 PM',
      location: 'Online',
      prerequisites: 'None',
      syllabus: 'Week 1: Introduction to React...',
    };

    setCourse(mockCourse);
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <h1>{course.name}</h1>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Course Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites}</p>
      <details>
        <summary>Syllabus</summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetailsPage;
