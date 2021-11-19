import React from 'react';
import { useState } from 'react';

const AddService = () => {

    const initialiInfo = {name: '', description: '', img: '', price: ''}
    const [products, setProducts] = useState(initialiInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...products };
        newInfo[field] = value;
        setProducts(newInfo);
    }

    const handleServices = e => {
        alert('Product added');

        

        fetch('https://wicked-demon-36731.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => setProducts(data))

        e.preventDefault();
    }


    return (
        <div className="container my-4">
            <div>
                <h3>Add New Service</h3>
            </div>

            <div>
                <form onSubmit={handleServices}>
                <input style={{width: '80%', padding: '10px', margin: '10px'}} 
                    placeholder="Name" 
                    type="text" 
                    name="Name"
                    onBlur={handleOnBlur}
                    id="" 
                    required />
                    <br />

                    <textarea style={{width: '80%', padding: '10px', margin: '10px'}} 
                    type="text" placeholder="Description"
                    name="description"
                    onBlur={handleOnBlur} 
                    id="" 
                    required ></textarea>
                    <br />

                    <input style={{width: '80%', padding: '10px', margin: '10px'}} 
                    type="text" 
                    name="img"
                    onBlur={handleOnBlur} 
                    id="" 
                    placeholder="Image Url" 
                    required />
                    <br />

                    <input style={{width: '80%', padding: '10px', margin: '10px'}} 
                    type="tel" 
                    name="price"
                    onBlur={handleOnBlur} 
                    id="" 
                    placeholder="Price" 
                    required />
                    <br />

                    <input className="simle-btn" type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;