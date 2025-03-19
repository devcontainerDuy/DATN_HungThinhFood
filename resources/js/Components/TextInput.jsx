import React, { forwardRef, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function TextInput({ type = "text", className = "", isFocused = false, ref = null, ...props }) {
    const localRef = useRef();
    const inputRef = ref || localRef;

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused, inputRef]);

    return <Form.Control {...props} type={type} className={className} ref={inputRef} />;
}

TextInput.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    ref: PropTypes.any,
};
