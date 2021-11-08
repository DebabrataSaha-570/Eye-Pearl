import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    let { id } = useParams()
    const [services, setServices] = useState([])



    useEffect(() => {
        fetch('./serviceDetail.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="container my-5">
            <h3>This is service detail component : {id} {services.length} </h3>
            <p className="text-primary">Eita partechi na , pore eita niya bosbo</p>
            <p></p>
        </div>
    );
};

export default ServiceDetail;