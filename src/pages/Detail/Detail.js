import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Detail = () => {

    const [service, setService] = useState();
    const {serviceId} = useParams();
    const {user} = useAuth();

    useEffect( () => {
        fetch(`https://wicked-demon-36731.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [serviceId])

    const handleSubmit = e => {
        
        alert('Submit successfullly.');

        e.preventDefault();
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div>
                        <img style={{width: '80%'}} className="mb-2" src={service?.img} alt="" />
                    </div>
                    <div>
                        <h4 className="mb-2">{service?.name}</h4>
                        <h5>Price: {service?.price}</h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Your Address</h2>
                    <form onSubmit={handleSubmit}>
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} placeholder="Your Name" type="text" defaultValue={user.displayName} name="" id="" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="email" placeholder="Your Email" defaultValue={user?.email} name="" id="" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="tel" name="" id="" placeholder="Phone Number" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" name="" id="" placeholder="Street Address" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" name="" id="" placeholder="District" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" name="" id="" placeholder="Divishion" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" name="" id="" placeholder="ZIP Code" required />
                        <br />
                        <input className="simle-btn" type="submit" value="Place Order" />
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Detail;