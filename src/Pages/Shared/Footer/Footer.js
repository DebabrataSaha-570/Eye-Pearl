import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../Images/eyeCareKids.png'
import image2 from '../../../Images/eyeCareGirl.png'

import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="eyePearl-footer p-5">
                <section className="container">
                    <div className="row ">
                        <div className="col-md-3 col-12">
                            <div>
                                <h2 className="mb-5 EP-heading"> <i class="fas fa-eye "></i>  Eye Pearl</h2>
                                <p className="EP-footer-color-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, blanditiis.</p>
                                <Link to="/appoinment"> <button className="EP-Footer-btn rounded-pill py-3 px-4">Book Appointment</button></Link>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div>
                                <h3 className="EP-heading-color">Links</h3>
                                <Link> <p>About</p> </Link>
                                <Link>  <p>Treatments</p></Link>
                                <Link> <p>Our Doctors</p> </Link>
                                <Link> <p>Before and After</p></Link>
                                <Link> <p>Site Map</p> </Link>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="mt-5">
                                <Link>
                                    <p>Contact</p>
                                </Link>
                                <Link><p>Help</p></Link>
                                <Link><p>PrivacyPolicy</p></Link>
                                <Link><p>Appointment</p></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3 className="EP-heading-color">News</h3>
                            <div className="d-flex">
                                <div>
                                    <img className="me-3" src={image1} alt="" />
                                </div>
                                <div>
                                    <small className="EP-color-3">October 2016, 2020</small>
                                    <p className="EP-heading-color">The best eye care service for kids</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <img className="me-3" src={image2} alt="" />
                                </div>
                                <div>
                                    <small className="EP-color-3">October 2016, 2020</small>
                                    <p className="EP-heading-color">You are nothing without your eyes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h3 className="EP-heading-color">Contact</h3>
                            <p className="EP-footer-color-2">22334455</p>
                            <p className="EP-footer-color-2">eyepearl@gmail.com</p>
                            <p className="EP-footer-color-2">66 Bekar Street , Noakhali, Bangladesh</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;