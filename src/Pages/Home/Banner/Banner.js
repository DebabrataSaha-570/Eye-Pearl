import React from 'react';

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    {/* <div class="carousel-item active">
                        <img src="https://i.ibb.co/t8j4m7D/man-having-eye-sight-check-ophthalmology-clinic-3.jpg" class="d-block w-100" alt="..." />
                    </div> */}
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/t8j4m7D/man-having-eye-sight-check-ophthalmology-clinic-3.jpg" class="d-block w-100" alt="..." />

                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/Fw8Q7DQ/man-having-eye-sight-check-ophthalmology-clinic-2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/xM7SP3B/ophthalmologist-checking-patient-her-clinic.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;