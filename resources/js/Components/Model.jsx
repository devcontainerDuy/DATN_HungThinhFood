import React from "react";
import { Form, Modal as Modals } from "react-bootstrap";
import Buttons from "@/Components/Buttons";
import PropTypes from "prop-types";

export default function Modal({ show, close, size = "md", submit, title = "Modal Title", body = "Modal Body", footer, loaded = false }) {
    if (footer === undefined) {
        footer = (
            <>
                <Buttons type="button" variant="secondary" icon="close" title="Thoát ra" onClick={close} />
                <Buttons type="submit" variant="success" icon="save" title="Lưu lại" loaded={loaded || false} />
            </>
        );
    }

    return (
        <>
            <Modals show={show} onHide={close} size={size} centered>
                <Form onSubmit={submit} noValidate encType="multipart/form-data">
                    <Modals.Header closeButton>
                        <Modals.Title>
                            <span>{title}</span>
                        </Modals.Title>
                    </Modals.Header>
                    <Modals.Body
                        className="overflow-auto"
                        style={{
                            maxHeight: "calc(100vh - 210px)",
                        }}
                    >
                        {body}
                    </Modals.Body>
                    <Modals.Footer>{footer}</Modals.Footer>
                </Form>
            </Modals>
        </>
    );
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    size: PropTypes.string,
    submit: PropTypes.func,
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node,
    loaded: PropTypes.bool,
};
