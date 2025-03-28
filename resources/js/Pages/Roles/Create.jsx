import React, { useId, useState } from "react";
import Layouts from "@layouts/Index";
import { Form, Container, Row, Col } from "react-bootstrap";
import Buttons from "@components/Buttons";
import InputLabel from "@components/InputLabel";
import TextInput from "@components/TextInput";
import useSubmitForm from "@hooks/useSubmitForm";

function Create({ permissions, crumbs }) {
    const [values, setValues] = useState({ name: "", guard_name: "", permissions: [] });
    const handleChange = () => setValues({ name: "", guard_name: "", permissions: [] });
    const { handleSubmit, loading, error } = useSubmitForm("/cms/roles", handleChange);

    return (
        <Layouts breadcrumb={crumbs} seo={{ title: "Thêm vai trò", description: "Thêm vai trò" }} typeBtn="back" href="/cms/roles">
            <Container>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Tên vai trò</InputLabel>
                                <TextInput type="text" name="name" placeholder="Nhập tên vai trò" value={values?.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                                {error?.name && <small className="text-danger">{error.name}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Guard name</InputLabel>
                                <TextInput type="text" name="name" placeholder="Nhập guard name" value={values?.guard_name} onChange={(e) => setValues({ ...values, guard_name: e.target.value })} />
                                {error?.guard_name && <small className="text-danger">{error.guard_name}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId={`input-field-${useId()}`}>
                                <InputLabel>Quyền hạn</InputLabel>
                                <div className="d-flex flex-wrap flex-row gap-2">
                                    {permissions.map((perm) => (
                                        <Form.Check
                                            key={perm.id}
                                            type="checkbox"
                                            label={perm.name}
                                            lang="vi"
                                            value={perm.name}
                                            id={useId()}
                                            onChange={(e) =>
                                                setValues({
                                                    ...values,
                                                    permissions: e.target.checked ? [...values.permissions, e.target.value] : values.permissions.filter((perm) => perm !== e.target.value),
                                                })
                                            }
                                        />
                                    ))}
                                </div>
                                {error?.permissions && <small className="text-danger">{error.permissions}</small>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Buttons
                        variant="success"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(values);
                        }}
                        loaded={loading}
                    >
                        <i className="bi bi-save" /> Lưu lại
                    </Buttons>
                </Form>
            </Container>
        </Layouts>
    );
}

export default Create;
