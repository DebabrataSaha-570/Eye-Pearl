import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './AllServices.css'

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))

    }, [])
    console.log(services)
    return (
        <>
            <section className="container my-5">
                <div className="my-5 text-center">
                    <h1><span className="services-color-1">Services</span> We are Offerings </h1>
                    <h1>To Our Clients</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                    }




                </div>
            </section>
        </>
    );
};

export default AllServices;