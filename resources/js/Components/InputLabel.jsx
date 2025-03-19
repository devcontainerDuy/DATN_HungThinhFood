import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <Form.Label
            {...props}
            className={className}
            style={{ fontWeight: "bold" }}
        >
            {value ? value : children}
        </Form.Label>
    );
}

InputLabel.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
