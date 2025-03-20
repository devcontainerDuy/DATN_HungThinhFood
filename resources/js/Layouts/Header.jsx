import React from "react";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import Dropdowns from "@components/Dropdowns";
import { useTheme } from "@hooks/useTheme";

function Header() {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = (newTheme) => {
        toggleTheme(newTheme);
    };

    return (
        <header className="p-0 m-0">
            <Navbar variant="light" expand="lg" className="shadow-sm">
                <Container fluid>
                    {/* <Navbar.Brand>
                        <Image src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Avatar Logo" roundedCircle style={{ width: "40px" }} />
                    </Navbar.Brand> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Form.Control type="text" placeholder="Search" className="me-2" />
                        </Nav>
                        <Nav className="gap-4 my-auto fs-5">
                            <Dropdowns
                                as={Nav.Item}
                                title={
                                    <Dropdowns.Toggle className="dropdown-custom">
                                        <i className="bi bi-activity" />
                                    </Dropdowns.Toggle>
                                }
                                align="end"
                            >
                                <Dropdowns.Item href="#">✅ System running</Dropdowns.Item>
                                <Dropdowns.Item href="#">⚠️ Server maintenance soon</Dropdowns.Item>
                                <Dropdowns.Divider />
                                <Dropdowns.Item href="#">View status page</Dropdowns.Item>
                            </Dropdowns>

                            <Dropdowns
                                as={Nav.Item}
                                title={
                                    <Dropdowns.Toggle className="dropdown-custom">
                                        <i className="bi bi-moon-stars" />
                                    </Dropdowns.Toggle>
                                }
                                align="end"
                            >
                                <Dropdowns.Item active={theme === "light"} onClick={() => handleThemeChange("light")}>
                                    ☀️ Light Mode
                                </Dropdowns.Item>
                                <Dropdowns.Item active={theme === "dark"} onClick={() => handleThemeChange("dark")}>
                                    🌙 Dark Mode
                                </Dropdowns.Item>
                                <Dropdowns.Item active={theme === "auto"} onClick={() => handleThemeChange("auto")}>
                                    🔄 Auto
                                </Dropdowns.Item>
                            </Dropdowns>

                            <Dropdowns
                                as={Nav.Item}
                                title={
                                    <Dropdowns.Toggle className="dropdown-custom">
                                        <i className="bi bi-bell" />
                                    </Dropdowns.Toggle>
                                }
                                align="end"
                            >
                                <Dropdowns.Item href="#">🔔 New user signed up</Dropdowns.Item>
                                <Dropdowns.Item href="#">📩 You have 3 new messages</Dropdowns.Item>
                                <Dropdowns.Divider />
                                <Dropdowns.Item href="#">See all notifications</Dropdowns.Item>
                            </Dropdowns>

                            <Dropdowns
                                as={Nav.Item}
                                title={
                                    <Dropdowns.Toggle className="dropdown-custom">
                                        <Image
                                            className="img-fluid p-0 m-0"
                                            src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
                                            alt="Avatar Logo"
                                            roundedCircle
                                            style={{ width: "32px", height: "auto" }}
                                        />
                                    </Dropdowns.Toggle>
                                }
                                align="end"
                            >
                                <Dropdowns.Item href="#">Profile</Dropdowns.Item>
                                <Dropdowns.Item href="#">Settings</Dropdowns.Item>
                                <Dropdowns.Divider />
                                <Dropdowns.Item href="#">Logout</Dropdowns.Item>
                            </Dropdowns>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
