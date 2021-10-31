import React from 'react';
import './Footer.css';

const Footer = () => {

    const handleSub = () => {
        alert('Your Subscribe is Done');
    }

    return (
        <div>
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 py-3 px-3">
                                <h4>ABOUT TRAVEL</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aspernatur sapiente ad doloremque nostrum architecto, vitae quasi eos vel ducimus.</p>
                            </div>
                            <div className="col-md-3 py-3 px-3">
                                <h4>CONTACT INFORMATION</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                <p>01310365997</p>
                                <p>shahinur02345@gmail.com</p>
                                <p>Sat-Thu 8:00-16:00</p>
                            </div>
                            <div className="col-md-3 py-3 tx-3">
                                <h4>LATEST POST</h4>
                                <p>Life is a beautiful journey not a destination</p>
                                <p><small>September 29, 2021</small> |  <small>No Comments</small></p>
                                <hr />
                                <p>Take only memories, leave only footprints</p>
                                <p><small>Setpember 29, 2021</small> |  <small>No Comments</small></p>
                            </div>
                            <div className="col-md-3 py-3 tx-3">
                                <h4>SUBSCRIBE US</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <form onSubmit={handleSub}>
                                    <input className="p-1"  type="email" name="" placeholder="Your Email" required />
                                    <input className="mt-3 simle-btn px-3 py-2"  type="submit" value="SUBSCRIBE NOW" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p style={{color: 'gray', marginTop: '10px'}}>Copyright © 2021 Travel Lover.All rights reserveds</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;