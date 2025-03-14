import { Link } from "@inertiajs/react";
import React from "react";
import { Nav } from "react-bootstrap";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Nav.Link
            {...props}
            as={Link}
            className={`${active ? "active" : ""} ${className}`}
        >
            {children}
        </Nav.Link>
    );
}
