import React from "react";
import { Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Buttons({
    className = "",
    variant = "dark",
    disabled = false,
    children,
    loaded = false,
    ...props
}) {
    return (
        <Button
            {...props}
            variant={variant}
            className={`text-uppercase ${
                disabled ? "opacity-25" : ""
            } ${className}`}
            disabled={loaded || disabled}
        >
            {loaded ? (
                <Spinner animation="border" size="sm" role="status" aria-hidden="true"/>
            ) : (
                children
            )}
        </Button>
    );
}

Buttons.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    loaded: PropTypes.bool,
};
