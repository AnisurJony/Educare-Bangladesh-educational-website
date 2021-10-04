import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

import './Services.css'
const Services = () => {
            const [courses, setCourses] = useState([])

            useEffect(() => {
                        fetch('./courses.JSON')
                                    .then(res => res.json())
                                    .then(data => {
                                                // console.log(data)
                                                setCourses(data.course)


                                    })
            }, [])

            return (

                        <div className="services-bg ">

                                    <div className='service-style'>
                                                {courses.map(course => <Course

                                                            key={course.code}
                                                            course={course}

                                                ></Course>)}
                                    </div>



                        </div>
            );
};

export default Services;