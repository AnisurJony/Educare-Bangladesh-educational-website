
import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
            return (



                        <div className="base-container" >

                                    <h2 className="mt-3" style={{ color: '#7952B3' }}>Educare Bangladesh</h2>

                                    <div className="container">
                                                <div className="row row-cols-2">
                                                            <div className="col-12 col-md-6">

                                                                        <div className="">
                                                                                    <div>
                                                                                                <img src="" alt="" />
                                                                                    </div>
                                                                                    <div>
                                                                                                <h3>YOU ARE WELCOME</h3>
                                                                                                <p> If you have a question,don't hesitate to contact us <br />
                                                                                                            We work 24/7
                                                                                                </p>
                                                                                    </div>
                                                                        </div>
                                                                        <div>
                                                                                    <div>
                                                                                                <img src="" alt="" />
                                                                                    </div>
                                                                                    <div>
                                                                                                <h3>ADDRESS</h3>
                                                                                                <p> Basundhara city,Panthapath, Cawron Bazar<br />
                                                                                                            Dhaka, Bangladesh

                                                                                                </p>
                                                                                    </div>
                                                                        </div>
                                                                        <div>
                                                                                    <div>
                                                                                                <img src="" alt="" />
                                                                                    </div>
                                                                                    <div>
                                                                                                <h3>PHONE</h3>
                                                                                                <p>(+880)01708785201<br />
                                                                                                            (+880)01537633281
                                                                                                </p>
                                                                                    </div>
                                                                        </div>
                                                                        <div>
                                                                                    <div>
                                                                                                <img src="" alt="" />
                                                                                    </div>
                                                                                    <div>
                                                                                                <h3>EMAIL</h3>
                                                                                                <p>info@educarebd.com<br />
                                                                                                            contact@educare.com
                                                                                                </p>
                                                                                    </div>
                                                                        </div>

                                                            </div>
                                                            <div className="col right-container">

                                                                        <div>
                                                                                    <h2 className="my-5">CONTACT US</h2>
                                                                                    <form action="">
                                                                                                <h6>Your Name</h6>
                                                                                                <input className="input-style" type="text" required placeholder="Full Name" />
                                                                                                <br />
                                                                                                <h6>Your Email</h6>
                                                                                                <input className="input-style" type="email" required placeholder="info@gaiml.com" />
                                                                                                <br />
                                                                                                <h6>Your Message</h6>
                                                                                                <textarea className="input-style" type="text" rows="6" cols="25" />
                                                                                                <br />                                                                                <button type="button" className="contact-btn">Submit</button>
                                                                                    </form>
                                                                        </div>
                                                            </div>

                                                </div>
                                    </div>









                        </div>
            );
};

export default ContactUs;