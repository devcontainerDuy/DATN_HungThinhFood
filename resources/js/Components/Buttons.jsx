import React from "react";
import { Button } from "react-bootstrap";

export default function Buttons({
    className = "",
    variant = "dark",
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            variant={variant}
            className={`text-uppercase ${
                disabled ? "opacity-25" : ""
            } ${className}`}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
