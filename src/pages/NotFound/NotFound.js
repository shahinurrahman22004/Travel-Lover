import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div >
            <div className="mt-5">
                <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt="" />
                <h1>OOPS! </h1>
                <p>No signal here! we cannot find the page you are looking for </p>
                <Link to="/">
                    <button className="simle-btn">Home</button>
        
                </Link>
            </div>
        </div>
    );
};

export default Notfound;

