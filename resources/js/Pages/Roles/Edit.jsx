import React, { useEffect, useId, useState } from "react";
import Layouts from "@layouts/Index";
import { Form, Container, Row, Col } from "react-bootstrap";
import Buttons from "@components/Buttons";
import InputLabel from "@components/InputLabel";
import useUpdateFrom from "@hooks/useUpdateFrom";

function Edit({ roles, permissions, crumbs }) {
    const [values, setValues] = useState({ name: "", guard_name: "", permissions: [] });
    const { handleSubmit, loading, error } = useUpdateFrom(`/cms/roles/${roles.id}`);

    useEffect(() => {
        setValues({
            name: roles.name,
            guard_name: roles.guard_name,
            permissions: roles.permissions.map((perm) => perm.name),
        });
    }, [roles]);
    

    return (
        <Layouts breadcrumb={crumbs} seo={{ title: "Chỉnh sửa vai trò", description: "Chỉnh sửa vai trò" }} typeBtn="back" href="/cms/roles">
            <Container>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <InputLabel>Tên vai trò</InputLabel>
                                <Form.Control type="text" name="name" placeholder="Nhập tên vai trò" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                                {error?.name && <small className="text-danger">{error.name}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <InputLabel>Guard</InputLabel>
                                <Form.Control type="text" name="guard_name" placeholder="Nhập guard" value={values.guard_name} onChange={(e) => setValues({ ...values, guard_name: e.target.value })} />
                                {error?.guard_name && <small className="text-danger">{error.guard_name}</small>}
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <InputLabel>Quyền hạn</InputLabel>
                                <div className="d-flex flex-wrap flex-row gap-2">
                                    {permissions.map((perm) => (
                                        <Form.Check
                                            key={perm.id}
                                            type="checkbox"
                                            label={perm.name}
                                            value={perm.name}
                                            id={useId()}
                                            checked={values.permissions.includes(perm.name)}
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
                        type="submit"
                        loaded={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(values);
                        }}
                    >
                        <i className="bi bi-save" /> Lưu lại
                    </Buttons>
                </Form>
            </Container>
        </Layouts>
    );
}

export default Edit;
