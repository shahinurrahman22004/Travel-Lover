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
        fetch(`https://wicked-demon-36731.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [serviceId])

    const handleSubmit = () => {
        alert('Submit successfullly.');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <img  src={service.img} alt="" />
                    </div>
                    <div>
                        <p>Name{service?.name}</p>
                        <p>Price{service?.price}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Your Address</h2>
                    <form onSubmit={handleSubmit}>
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" placeholder="Your Name" name="" id="" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="email" placeholder="Your Email" name="" id="" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="text" placeholder="Address" name="" id="" required />
                        <br />
                        <input style={{width: '80%', padding: '10px', margin: '10px'}} type="password" name="" id="" placeholder="Password" required />
                        <br />
                        <input className="simle-btn" type="submit" value="Submit" />
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Detail;