import React, { useId, useState } from "react";
import Layouts from "@layouts/Index";
import Buttons from "@components/Buttons";
import InputLabel from "@components/InputLabel";
import TextInput from "@components/TextInput";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { generateRandom } from "@utils/Random";
import useSubmitForm from "@hooks/useSubmitForm";

function Create({ roles, crumbs }) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
        gender: 0,
        password: "",
        roles: [],
        avatar: null,
    });
    const [role, setRole] = useState(roles || []);
    const [crum, setCrum] = useState(crumbs || []);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
    const randomPassword = () => setValues({ ...values, password: generateRandom(8) });
    const handleChange = () => setValues({ username: "", email: "", phone: "", address: "", gender: 0, password: "", roles: [], avatar: null });
    const { handleSubmit, loading, error } = useSubmitForm("/cms/users", handleChange);

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
                        <Form as={Row} className="row-cols-1 py-4" noValidate>
                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Tên người dùng
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <TextInput type="text" placeholder="John Doe" value={values?.username} onChange={(e) => setValues({ ...values, username: e.target.value })} />
                                {error?.username && <small className="text-danger">{error?.username}</small>}
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Địa chỉ email
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <TextInput type="email" placeholder="name@example.com" value={values?.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                                {error?.email && <small className="text-danger">{error?.email}</small>}
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
                                {error?.password && <small className="text-danger">{error?.password}</small>}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Giới tính</InputLabel>
                                <Form.Select value={values?.gender} onChange={(e) => setValues({ ...values, gender: e.target.value })}>
                                    <option value={1}>Nam</option>
                                    <option value={2}>Nữ</option>
                                    <option value={0}>Khác</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Số điện thoại</InputLabel>
                                <TextInput type="text" placeholder="Nhập số điện thoại..." value={values?.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Địa chỉ</InputLabel>
                                <TextInput type="text" placeholder="Nhập địa chỉ..." value={values?.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>
                                    Quyền
                                    <span className="text-danger ms-2" title="Bắt buộc">
                                        (*)
                                    </span>
                                </InputLabel>
                                <Form.Select value={values?.roles} onChange={(e) => setValues({ ...values, roles: [e.target.value] })} aria-label="multiple select roles">
                                    <option value="">Chọn quyền</option>
                                    {role.length > 0 &&
                                        role.map((item) => {
                                            return (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            );
                                        })}
                                </Form.Select>
                                {error?.roles && <small className="text-danger">{error?.roles}</small>}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId={`input-field-${useId()}`}>
                                <div className="d-flex justify-content-end gap-2">
                                    <Buttons variant="secondary" type="reset" onClick={() => handleChange()} className="me-2">
                                        <i className="bi bi-arrow-counterclockwise" /> Làm mới
                                    </Buttons>
                                    <Buttons
                                        variant="success"
                                        className="me-2"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSubmit(values);
                                        }}
                                        loaded={loading}
                                    >
                                        <i className="bi bi-save" /> Lưu lại
                                    </Buttons>
                                </div>
                            </Form.Group>
                        </Form>
                    </div>
                </Container>
            </Layouts>
        </>
    );
}

export default Create;
