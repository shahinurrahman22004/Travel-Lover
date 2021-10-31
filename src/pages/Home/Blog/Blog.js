import React from 'react';

const Blog = ({blog}) => {
    const {title, img, para, Profetion} = blog;
    return (
        <div className="card-group col-md-6 mb-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <small>{Profetion}</small>
                    <p>{para}</p>
                </div>
                <button className="simle-btn">Read More</button>
            </div>
            
        </div>
    );
};

export default Blog;