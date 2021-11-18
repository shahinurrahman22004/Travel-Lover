import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {_id, name, description, img, price} = props.service;
    return (
        <div className="card-group col-md-4 mb-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>{price}</p>
                </div>
                <Link to={`/details/${_id}`}>
                    <button className="simle-btn">Book Now</button>
                </Link>
            </div>
            
        </div>
    );
};

export default Service;