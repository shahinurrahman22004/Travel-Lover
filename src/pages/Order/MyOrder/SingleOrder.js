import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const SingleOrder = (props) => {
    const {serviceId, _id } = props.order;
    const [product, setProduct] = useState();
    
    const [show, setShow] = useState(false);
    useEffect( () => {
        fetch(`https://wicked-demon-36731.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [serviceId])
    
    const cancleOrder = canId => {

        const url = `https://wicked-demon-36731.herokuapp.com/orders?can=cancheled&id=${canId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
           // body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                setShow(false);
            }
        });
        
    }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <tr>
                <td>
                    <img style={{width: '100px'}} src={product?.img} alt="" />
                    
                </td>
                <td>
                    {product?.name}
                </td>
                <td>
                    {product?.price}
                </td>
                <td>
                    <p>{props.order.shipped}</p>
                </td>
                <td>
                    <Button onClick={handleShow} variant="danger">Cancel</Button>
                </td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you cenceled this Order-------</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => cancleOrder(_id)}>
                    Place Order
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SingleOrder;