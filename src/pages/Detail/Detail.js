import React from 'react';

const Detail = () => {

    const handleSubmit = () => {
        alert('Submit successfullly.');
    }

    return (
        <div className="container">
            <div className="row">
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
    );
};

export default Detail;