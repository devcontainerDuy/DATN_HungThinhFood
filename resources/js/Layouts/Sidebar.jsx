import { Link } from "@inertiajs/react";
import React from "react";
import Dropdowns from "../components/Dropdowns";

const Sidebar = ({ children, collapsed }) => {
    return (
        <div className="d-flex">
            <div
                className={`d-flex flex-column flex-shrink-0 p-3 bg-light`}
                style={{ width: collapsed ? "80px" : "250px", height: "100vh" }}
            >
                <Link
                    to="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
                >
                    {!collapsed ? (
                        <span className="fs-4">CMS Dashboard</span>
                    ) : (
                        <i className="bi bi-speedometer2 fs-4"></i>
                    )}
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link
                            to="/dashboard"
                            className="nav-link active d-flex align-items-center"
                        >
                            <i className="bi bi-speedometer2 me-2"></i>{" "}
                            {!collapsed && "Dashboard"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts"
                            className="nav-link d-flex align-items-center"
                        >
                            <i className="bi bi-file-earmark-text me-2"></i>{" "}
                            {!collapsed && "Posts"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className="nav-link d-flex align-items-center"
                        >
                            <i className="bi bi-people me-2"></i>{" "}
                            {!collapsed && "Users"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="nav-link d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Settings"}
                        </Link>
                    </li>
                </ul>
                <hr />
                <Dropdowns
                    className="d-flex align-items-center text-decoration-none"
                    as="div"
                    trigger={
                        <>
                            <i
                                className="bi bi-person-circle me-2"
                                style={{ fontSize: "32px" }}
                            ></i>
                            {!collapsed && <strong className="ms-2">Admin</strong>}
                        </>
                    }
                    align="start"
                >
                    <Dropdowns.Item href="/profile">Profile</Dropdowns.Item>
                    <Dropdowns.Item href="/settings">Settings</Dropdowns.Item>
                    <Dropdowns.Item href="/logout">Sign out</Dropdowns.Item>
                </Dropdowns>
                <div className="dropdown">
                    <ul
                        className="dropdown-menu text-small"
                        aria-labelledby="dropdownUser"
                    >
                        <li>
                            <Link className="dropdown-item" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/settings">
                                Settings
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/logout">
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-grow-1">{children}</div>
        </div>
    );
};

export default Sidebar;
