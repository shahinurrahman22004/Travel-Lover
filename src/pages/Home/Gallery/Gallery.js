import React from 'react';


const News = () => {
    return (
        <div id="gallery" className="container">
            <h1 className="text-primary mb-5 mt-5">OUR GALLERY</h1>
            <div className="row">
                <div className="col-md-4 p-3">
                    <h2>BEST TRAVELER'S SHARED PHOTOS</h2>
                    <p>Over the past year, travel has pretty much come to a halt. But with the world beginning to reopen and people getting vaccinated, I can't help but fantasize about seeing the world once again.</p>
                </div>
                <div className="col-md-4 p-3">
                    <img className="w-100" src="https://i.ibb.co/R03bSH0/gallery-1.jpg" alt="" />
                </div>
                <div className="col-md-4 p-3">
                    <img className="w-100" src="https://i.ibb.co/1T4cY9P/gallery-2.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 mt-3 p-3">
                    <img className="w-100" src="https://i.ibb.co/vXPQKfD/gallery-3.jpg" alt="" />
                </div>
                <div className="col-md-7 p-3">
                    <img className="w-100" src="https://i.ibb.co/thhkZ0r/gallery-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default News;