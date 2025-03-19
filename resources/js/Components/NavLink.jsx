import React from "react";
import { Link } from "@inertiajs/react";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";

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

NavLink.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};