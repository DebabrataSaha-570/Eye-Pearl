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
                                    <strong className="faq-heading">  1. How Often should I need to test my eyes?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        As per the American Optometric Association adults who wear glasses or contact lenses and adults who are over 60 years should visit their eye care specialist every year or as suggested by the doctor. If the person doesn’t require any vision correction, then a person between 18 and 60 years should visit the doctor twice a year.
                                        <br />
                                        <br />
                                        Source: https://www.aoa.org/patients-and-public/caring-for-your-vision/comprehensive-eye-and-vision-examination/recommended-examination-frequency-for-pediatric-patients-and-adults?sso=y
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong className="faq-heading">2. What causes dry eyes?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        The tears in your eyes keep them lubricated and moist. That keeps your eyes comfortable. Dry eyes are caused when your eyes are not producing enough tears. You may notice a blurred vision, light sensitivity, redness, and itching in your eyes. Any disbalance in your tear-flow system can cause dry eyes. Other causes include natural ageing process, conditions such as rheumatoid arthritis and collagen vascular diseases; less blinking or staring at computer screens or any other object for a long time without blinking
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong className="faq-heading"> 3. How to treat dry eyes?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        The doctor may give you artificial tears and ointments to keep your eyes lubricated. The doctor may even opt for a procedure called temporary punctal occlusion to treat your condition.

                                        <br />
                                        <br />
                                        Source: http://www.webmd.com/eye-health/eye-health-dry-eyes#1
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <strong className="faq-heading" >4. I have noticed small spots floating in front of my eyes. Is this a cause for concern?</strong>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-success p-2 text-dark bg-opacity-10">
                                    <p>
                                        Eye floaters are tiny specks and spots that keep floating in your field of vision. These are annoying at times but usually are harmless. These occur when tiny pieces of the gel-like vitreous of your eyes break loose. However, if you notice flashing spots, then you should immediately consult an eye doctor.
                                        <br />
                                        <br />
                                        Source: http://www.allaboutvision.com/conditions/spotsfloats.htm
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