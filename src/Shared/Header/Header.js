import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, logout} = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><Nav.Link className="text-white" as={HashLink} to="/home#home">Travel Lover</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>

                            <Nav.Link className="text-white"  as={HashLink} to="/home#services">Services</Nav.Link>

                            <Nav.Link className="text-white"  as={HashLink} to="/home#blog">Blog</Nav.Link>

                            <Nav.Link className="text-white"  as={HashLink} to="/home#gallery">Gallery</Nav.Link>

                            {user?.email && 
                            <Nav.Link className="text-white"  as={HashLink} to="/myorders">My Orders</Nav.Link>} 

                            {user?.email && 
                            <Nav.Link className="text-white"  as={HashLink} to="/manageAllOrder">Manage All Order</Nav.Link>} 

                            {user?.email && 
                            <Nav.Link className="text-white"  as={HashLink} to="/addNewService">Add New Service</Nav.Link>} 
                            
                            {user?.email ?
                            <Button onClick={logout} variant="light">LogOut</Button>:
                            <Nav.Link as={HashLink} className="text-white"  to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;