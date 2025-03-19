import React from "react";
import { Dropdown } from "react-bootstrap";

const Dropdowns = ({ className = "", title, type = "button", children, align = "end", ...props }) => {
    return (
        <Dropdown align={align} {...props}>
            {title}
            <Dropdown.Menu>{children}</Dropdown.Menu>
        </Dropdown>
    );
};

const DropdownToggle = ({ as = "div", className = "", children, ...props }) => {
    return (
        <Dropdown.Toggle as={as} className={"cursor-pointer " + className} {...props}>
            {children}
        </Dropdown.Toggle>
    );
};

const DropdownItem = ({ href, className = "", children, ...props }) => {
    return (
        <Dropdown.Item href={href} className={className} {...props}>
            {children}
        </Dropdown.Item>
    );
};

Dropdowns.Toggle = DropdownToggle;
Dropdowns.Item = DropdownItem;
Dropdowns.Divider = Dropdown.Divider;

export default Dropdowns;
