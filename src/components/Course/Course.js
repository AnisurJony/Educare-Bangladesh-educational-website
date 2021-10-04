import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

import './Course.css'
const Course = (props) => {
            const { title, price, img, duration, grand, student } = props.course;


            return (


                        <Card className="course-card" style={{ width: '16rem', height: '22rem' }}>
                                    <div className='mt-3'>
                                                <img className="course-image" style={{ width: '14rem', height: '10rem' }} src={img} alt="" />
                                    </div>


                                    <div>
                                                <h3 className="course-title mt-2">{title}</h3>
                                                <p>Duration: {duration} month <br />
                                                            Course Fee: ${price} <br />
                                                            scholarship: {grand}</p>
                                                <Button className="bg-primary rounded text-white border-0">Enroll Now</Button>

                                    </div>

                        </Card>



            );
};

export default Course;
