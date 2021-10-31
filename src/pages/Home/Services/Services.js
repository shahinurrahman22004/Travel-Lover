import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://wicked-demon-36731.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    } , [])
    return (
        <div>
            <div id="services">
                <h1 className="text-primary fs-1 fw-bold mt-5 ">Our Services</h1>
                <div className="container">
                    <div className="row">
                        {
                            services.map(service => <Service service={service} key={service._id}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;