import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
            return (


                        <div className="d-flex justify-content-around header-bg py-4">
                                    <div>
                                                <h2 className="name"> EduCareBD </h2>
                                    </div>
                                    <Nav className="d-flex">
                                                <Link className="me-3  link" to="/home">Home</Link>
                                                <Link className="me-3  link" to="/about">About</Link>
                                                <Link className="me-3  link" to="/services">Services</Link>
                                                <Link className="me-3  link" to="/blogs">Blogs</Link>
                                                <Link className="me-3  link" to="/contact">contact Us</Link>
                                    </Nav>
                        </div>

            );
};

export default Header;