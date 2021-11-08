import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneVolume, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <>
            <section className="container my-5 ">
                <div className="row">
                    <div className="col-md-6 col-11 eye-pearl-heading">
                        <h1><span>We Love</span> To Hear From </h1>
                        <h1>Our Customers</h1>
                        <div className="d-flex align-items-center ">
                            <h3><FontAwesomeIcon className="eye-pearl-contact-icon" icon={faPhoneVolume} /></h3>
                            <div className="m-3">
                                <h5>222 333 888</h5>
                                <h5>12 332 8384 000</h5>
                            </div>

                        </div>
                        <hr className="w-75" />
                        <div className="d-flex align-items-center">
                            <h3><FontAwesomeIcon className="eye-pearl-contact-icon" icon={faEnvelope} /></h3>
                            <div className="m-3">
                                <h5>abc@company.com</h5>
                                <h5>info@company.com</h5>
                            </div>

                        </div>
                        <hr className="w-75" />
                        <div className="d-flex align-items-center">
                            <h3><FontAwesomeIcon className="eye-pearl-contact-icon" icon={faMapMarkerAlt} /></h3>
                            <div className="m-3">
                                <h5>4384 Desert Broom Court</h5>
                                <h5>Montreal , Canada</h5>
                            </div>

                        </div>
                        <hr className="w-75" />


                    </div>

                    <div className="col-md-6  col-12 eye-pearl-input-parent">

                        <div className="row ">
                            <div className="col-md-5 col-10">
                                <input type="text" className="form-control p-4" placeholder="Your Name" />
                            </div>
                            <div className="col-md-5 col-10 my-2">
                                <input type="text" className="form-control p-4" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-5 col-10">
                                <input type="text" className="form-control p-4" placeholder="Phone Number" />
                            </div>
                            <div className="col-md-5 col-10 my-2">
                                <input type="text" className="form-control p-4" placeholder="Subject" />
                            </div>
                        </div>

                        <textarea className="form-control  mb-3 mt-4" placeholder="write messages" ></textarea>

                        <button className="EP-Footer-btn rounded-pill py-3 px-4">Send Message</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;