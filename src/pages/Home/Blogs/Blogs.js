import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';



const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlog(data));
    }, [])

    return (
        <div id="blog" className="container">
            <h1 className="text-primary mb-5 mt-5">Our Blogs</h1>
            <div className="row">
                {
                    blog.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;