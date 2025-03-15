import React from "react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

function Index() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/login", values, {
            onError: (errors) => setErrors(errors),
        });
    }

    return (
        <>
            <Container
                fluid
                className=" d-flex justify-content-center align-items-center vh-100 p-0"
            >
                <Row
                    className="container-fluid vh-100 p-0"
                    style={{ backgroundColor: "#f0f2f5" }}
                >
                    <Col md={6} className="p-0">
                        <img
                            className="d-block w-100 h-100"
                            src="../img-login/backgroundLogin.png"
                        />
                    </Col>
                    <Col
                        md={6}
                        className="d-flex justify-content-center align-items-center p-0"
                    >
                        <Card
                            style={{
                                width: "400px",
                                padding: "20px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <h3 className="text-center mb-4">Admin Login</h3>
                            <Form onSubmit={handleSubmit}>
                                {/* Email */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Nhập email"
                                        required
                                        isInvalid={
                                            !values.email.endsWith(
                                                "@gmail.com"
                                            ) && values.email !== ""
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Email phải là @gmail.com
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="Nhập mật khẩu"
                                        required
                                    />
                                </Form.Group>

                                {/* Submit Button */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100"
                                >
                                    Đăng nhập
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Index;
