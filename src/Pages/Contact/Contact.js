import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <>
            <section className="container my-5 ">
                <div className="row">
                    <div className="col-md-6 eye-pearl-heading">
                        <h1><span>We Love</span> To Hear From </h1>
                        <h1>Our Customers</h1>
                        <div>

                        </div>
                    </div>

                    <div className="col-md-6 eye-pearl-input-parent">

                        <div className="row ">
                            <div className="col-md-5">
                                <input type="text" className="form-control p-3" placeholder="Your Name" />
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control p-3" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-5">
                                <input type="text" className="form-control p-3" placeholder="Phone Number" />
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control p-3" placeholder="Subject" />
                            </div>
                        </div>

                        <textarea className="form-control my-3 " placeholder="write messages" ></textarea>

                        <button className="EP-Footer-btn rounded-pill py-3 px-4">Send Message</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;