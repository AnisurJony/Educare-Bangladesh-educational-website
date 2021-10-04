
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCategory.css'
const ServiceCategory = (props) => {

            const { title, img, description } = props.category;

            const text = description.slice(0, 110);

            return (
                        <div className='my-5 col-12 col-sm-6 col-md-4 col-lg-3'>

                                    <Card style={{ width: '16rem', height: '25rem' }} className="category-card ">

                                                <div className='mt-3'> <Card.Img className="card-image" style={{ width: '14rem', height: '10rem' }} variant="top" src={img} /></div>

                                                <Card.Body>
                                                            <Card.Title className="card-title">{title}</Card.Title>

                                                            <Card.Text>
                                                                        {text}
                                                            </Card.Text>

                                                            <Link to="/services" className="category-btn">Let's Go</Link>
                                                </Card.Body>
                                    </Card>
                        </div>
            );
};

export default ServiceCategory;