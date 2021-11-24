import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        
        fetch('../courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [courses]);
    return (
        // Course Page
        <div className='mt-48 mb-28'>
            <h1 className='text-pink-500 text-center mb-20 font-extrabold text-5xl'>
                Welcome To Course Section
            </h1>

            {/* Fetching datas from course.json */}
            
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;