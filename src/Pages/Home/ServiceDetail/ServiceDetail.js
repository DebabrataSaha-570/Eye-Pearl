import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    let { id } = useParams()
    return (
        <div>
            <h3>This is service detail component : {id} </h3>
        </div>
    );
};

export default ServiceDetail;