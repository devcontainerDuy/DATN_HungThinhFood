import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { Container, Breadcrumb as BCrumb } from "react-bootstrap";
import PropTypes from "prop-types";

function Breadcrumb({ props, children }) {
    const { url } = usePage();

    return (
        <Container className="p-0 my-3" fluid>
            <div className="d-flex flex-wrap justify-content-md-between align-items-center bg-dark-subtle border-black border border-2 border-dark-subtle rounded-3 p-2 shadow">
                <BCrumb aria-label="breadcrumb" className="mt-3 ms-3">
                    <BCrumb.Item href="/cms/" linkAs={Link} linkProps={{ to: "/cms/" }}>
                        <i className="bi bi-house-door-fill" width="16" height="16" />
                        <span className="visually-hidden">Home</span>
                    </BCrumb.Item>
                    {props &&
                        props.map((item, index) => (
                            <BCrumb.Item
                                key={index}
                                href={item.url}
                                linkAs={Link}
                                linkProps={{ to: item.url }}
                                aria-current={index === 0 ? "page" : false}
                                className="text-capitalize"
                                active={item.url === import.meta.env.VITE_APP_URL + url ? true : false}
                            >
                                {item.name}
                            </BCrumb.Item>
                        ))}
                </BCrumb>
                <div className="me-3">{children}</div>
            </div>
        </Container>
    );
}

export default Breadcrumb;

Breadcrumb.propTypes = {
    props: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
};
