import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "@components/Breadcrumb";
import Buttons from "@components/Buttons";
import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

function Main({ breadcrumb = [], type, url, children }) {
    const typeButton = () => {
        switch (type) {
            case "add":
                return (
                    <Buttons as={Link} href={url} variant="success" className="d-flex align-items-center">
                        <i className="bi bi-plus-circle" />
                        <p className="my-0 ms-2">
                            <span>Thêm mới</span>
                        </p>
                    </Buttons>
                );
            case "edit":
                return (
                    <Buttons as={Link} href={url} variant="warning" className="d-flex align-items-center">
                        <i className="bi bi-pencil-square" />
                        <p className="my-0 ms-2">
                            <span>Sửa</span>
                        </p>
                    </Buttons>
                );
            case "delete":
                return (
                    <Buttons as={Link} href={url} variant="danger" className="d-flex align-items-center">
                        <i className="bi bi-trash" />
                        <p className="my-0 ms-2">
                            <span>Xóa</span>
                        </p>
                    </Buttons>
                );
                case "back":
                return (
                    <Buttons as={Link} href={url} variant="secondary" className="d-flex align-items-center">
                        <i className="bi bi-arrow-left" />
                        <p className="my-0 ms-2">
                            <span>Quay lại</span>
                        </p>
                    </Buttons>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <Container as={"main"}>
                <Row className="row-cols-1 d-flex flex-row-reverse flex-wrap justify-content-center">
                    <Col>
                        <Breadcrumb props={breadcrumb}>{type && typeButton()}</Breadcrumb>
                    </Col>
                    <Col>
                        <div className="border border-2 border-dark-subtle rounded-3 shadow p-4">{children}</div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Main;

Main.prototype = {
    type: PropTypes.string,
    url: PropTypes.string,
    children: PropTypes.node,
};
