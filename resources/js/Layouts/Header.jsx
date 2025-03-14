import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Buttons from "../components/Buttons";

function Header({ collapsed, toggleSidebar }) {
    return (
        <>
            <header variant="dark" className="bg-dark">
                <Navbar variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <Buttons
                                onClick={toggleSidebar}
                                variant="secondary"
                            >
                                {collapsed ? (
                                    <i className="bi bi-chevron-right"></i>
                                ) : (
                                    <i className="bi bi-chevron-left"></i>
                                )}
                            </Buttons>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;
