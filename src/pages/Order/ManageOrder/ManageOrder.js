import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../ManageOrder/SingleOrder';

const ManageOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState();
    useEffect(()=>{
        fetch('https://wicked-demon-36731.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])

    return (
        <div className="container">
            <div className="row">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            orders?.map(order => <SingleOrder key={order._id} order={order}></SingleOrder>)
                        }
                    </tbody>
                    
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder;