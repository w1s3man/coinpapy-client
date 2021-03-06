//import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../context/user.context';

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


export const Appbar = () => {
    const { isLoggedIn, logoutUser } = useContext(UserContext);

    return (
        <Navbar className="navbar navbar-light bg-light fixed-top">
            <Container>
                <Navbar.Brand href="/">Coinpapy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {!isLoggedIn && <>
                        <div className="navbar-nav ms-auto" aria-labelledby="navbar">
                            <Nav.Link href="/" className="start-10">About</Nav.Link>
                            <Nav.Link href="/login" className="position-relative end-10">Login</Nav.Link>
                            <Nav.Link href="/signup" className="nav-link text-white btn btn-primary btn-sm">Signup</Nav.Link>
                        </div>
                </>}
                {isLoggedIn && <>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard" className="nav-item mx-2">Dashboard</Nav.Link>
                        <Nav.Link href="/assets" className="nav-item mx-2">Assets</Nav.Link>
                        <Nav.Link href="/watchlist" className="nav-item mx-2">Watchlist</Nav.Link>
                        <Nav.Link href="/coins" className="nav-item mx-2">Coins</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <NavDropdown title="Profile" id="basic-nav-dropdown mr-3" className="navbar-nav">
                            <NavDropdown.Item href="/edit" className="dropdown-item" aria-labelledby="navbarDropdown">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="dropdown-item text-danger" aria-labelledby="navbarDropdown" onClick={logoutUser}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>

       
    )
}