import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Buttons from "@components/Buttons";

function Header({ collapsed, toggleSidebar }) {
    return (
        <>
            <header className="bg-body-tertiary">
                <Navbar expand="lg" className="bg-body-tertiary">
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
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">haha</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;
