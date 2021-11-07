import React from 'react';
import './Welcome.css'
const Welcome = () => {
    return (
        <>
            <section className="container shadow p-3 my-5">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://i.ibb.co/X5zJjcy/medical-team-studio.jpg" alt="" />
                    </div>
                    <div className="col-md-7 eye-pearl-welcome-heading">
                        <h2>Welcome To <span> Eye Pearl </span>  </h2>
                        <h5>Best Optometrist In Town Are Ready To Help You!</h5>
                        <p> At webful eye pearl clinic we have best optometrist in town who are ready to give you great consultation and advices to get rid of glasses or get new lenses of glasses suggestion . Dont delay contact us today so we can provide you best features . once things start working nicely we will adjust good profits for our customers so they can get good eyes in less money . This is only we care and we want to care. </p>

                        <div className="d-flex pt-4">
                            <img src="https://i.ibb.co/JqKSb3Q/17257.png" alt="" />
                            <div className="ps-4">
                                <h5>Dr. John Abraham</h5>
                                <p>is the best Doctor for the Optometrists in Jacksonville. He is really passionate to help patients. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Welcome;