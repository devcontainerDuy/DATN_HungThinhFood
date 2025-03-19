import React, { use, useId, useState } from "react";
import Layouts from "@layouts/Index";
import Buttons from "@components/Buttons";
import InputLabel from "@components/InputLabel";
import TextInput from "@components/TextInput";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { generateRandom } from "@utils/Random";

function Create({ crum }) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        password: "",
    });

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
    const randomPassword = () => setValues({ ...values, password: generateRandom(8) });

    return (
        <>
            <Layouts breadcrumb={crum} seo={{ title: "Danh sách nhà cung cấp", description: "Danh sách nhà cung cấp" }} typeBtn="back" href="/cms/users">
                <div className="py-2 border-bottom">
                    <div className="my-auto py-2">
                        <p className="fw-bold h3">
                            <span>Tạo mới</span>
                        </p>
                    </div>
                </div>

                <Container>
                    <div className="my-auto">
                        <Form as={Row} className="row-cols-3 py-4" noValidate>
                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Tên người dùng
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <TextInput type="text" placeholder="John Doe" value={values?.username} onChange={(e) => setValues({ ...values, username: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Địa chỉ email
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <TextInput type="email" placeholder="name@example.com" value={values?.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Mật khẩu
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <InputGroup>
                                    <Buttons variant="primary" title="Tạo mật khẩu ngẫu nhiên" className="rounded-start" onClick={randomPassword}>
                                        <i className="bi bi-dice-5" />
                                    </Buttons>
                                    <TextInput
                                        type={show ? "text" : "password"}
                                        placeholder="Nhập mật khẩu..."
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        value={values?.password}
                                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    />
                                    <Buttons variant="secondary" title={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"} className="rounded-end" onClick={handleShow}>
                                        <i className={show ? "bi bi-eye-slash" : "bi bi-eye"} />
                                    </Buttons>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </div>
                </Container>
            </Layouts>
        </>
    );
}

export default Create;
