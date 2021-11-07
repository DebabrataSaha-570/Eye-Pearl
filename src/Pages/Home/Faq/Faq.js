import React from 'react';
import './Faq.css'
const Faq = () => {
    return (
        <>
            <section className="container">
                <div className="text-center eye-pearl-heading">
                    <h2>Why Chose <span >Us ?</span></h2>
                    <p>We Have Best Professional Team To Care Your Eyes</p>
                </div>

                <article className="my-5">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong className="faq-heading">  Do we provide consultation for free ?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore eligendi quibusdam iste eum consequatur molestiae qui? Odit consequatur minus magnam atque nihil at rerum ipsam quae quaerat, officia dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong className="faq-heading"> Is our procedure latest to technology?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore eligendi quibusdam iste eum consequatur molestiae qui? Odit consequatur minus magnam atque nihil at rerum ipsam quae quaerat, officia dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong className="faq-heading"> Do we respect your time and care your eyes most?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore eligendi quibusdam iste eum consequatur molestiae qui? Odit consequatur minus magnam atque nihil at rerum ipsam quae quaerat, officia dolores.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <strong className="faq-heading" >  What financial solutions we have to help you?</strong>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore eligendi quibusdam iste eum consequatur molestiae qui? Odit consequatur minus magnam atque nihil at rerum ipsam quae quaerat, officia dolores.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Faq;