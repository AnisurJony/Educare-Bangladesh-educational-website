import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCategory = (props) => {

            const { title, img, description } = props.category;

            const text = description.slice(0, 110);

            return (
                        <div className='my-5 col-12 col-sm-6 col-md-4 col-lg-3'>

                                    <Card style={{ width: '16rem', height: '25rem' }}>
                                                <div className='mt-4'> <Card.Img style={{ width: '14rem', height: '10rem' }} variant="top" src={img} /></div>
                                                <Card.Body>
                                                            <Card.Title>{title}</Card.Title>
                                                            <Card.Text>
                                                                        {text}
                                                            </Card.Text>
                                                            <Button className="bg-primary rounded text-white border-0">Let's Go</Button>
                                                </Card.Body>
                                    </Card>
                        </div>
            );
};

export default ServiceCategory;