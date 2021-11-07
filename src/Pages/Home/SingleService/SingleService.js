import React from 'react';
import { useHistory } from 'react-router';
import './SingleServices.css'
const SingleService = (props) => {
    let history = useHistory()
    const { ServiceName, image, detail, id } = props.service;
    const handleDetails = (id) => {
        console.log(id)
        history.push(`/serviceDetail/${id}`)

    }
    return (
        <>
            <div className="col">
                <div class="card shadow-lg">
                    <img src={image} class="card-img-top " alt="..." />
                    <div class="card-body ">
                        <h5 class="card-title">{ServiceName}</h5>
                        <p class="card-text">{detail}</p>
                        <div className="text-center">
                            <button onClick={() => handleDetails(id)} className="EP-service-btn rounded-pill py-2 px-3 ">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleService;