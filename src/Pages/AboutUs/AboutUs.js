import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <section className="container my-5">
                <div>
                    <h1><span>Learn </span> More About Our EyePearl</h1>
                    <h1>Eye Care Clinic</h1>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus blanditiis maiores quae, perspiciatis vel beatae suscipit porro est corrupti placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit saepe, aliquid voluptatibus autem voluptatum qui repudiandae sed cupiditate? Quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis sed omnis ipsam tempore ducimus minus obcaecati tenetur commodi beatae.</p>
                </div>

                {/* experts part  */}
                <article>
                    <div>
                        <h1><span>Expert</span> and Experienced </h1>
                        <h1>Eye Specialists</h1>
                    </div>

                    {/* cards  */}
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>


            </section>
        </>
    );
};

export default AboutUs;