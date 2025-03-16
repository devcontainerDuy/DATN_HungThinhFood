import { Link } from "@inertiajs/react";
import React from "react";
import Dropdowns from "@components/Dropdowns";
import { Nav } from "react-bootstrap";
import NavLink from "@components/NavLink";

const Sidebar = ({ children, collapsed }) => {
    return (
        <div className="d-flex bg-dark text-white">
            <div
                className="d-flex flex-column flex-shrink-0 p-3  sticky-top"
                style={{ width: collapsed ? "80px" : "250px", height: "100vh" }}
            >
                <Link
                    to="/"
                    className="d-flex align-items-center mb-0 mb-md-0 mx-md-auto text-decoration-none"
                >
                    {!collapsed ? (
                        <span className="fs-4">CMS Dashboard</span>
                    ) : (
                        <i className="bi bi-speedometer2 fs-4 mx-auto"></i>
                    )}
                </Link>
                <hr />
                <Nav variant="pills" className="flex-column mb-auto">
                    <Nav.Item>
                        <NavLink
                            href="/"
                            className="d-flex align-items-center"
                            active="true"
                        >
                            <i className="bi bi-speedometer2 me-2"></i>
                            {!collapsed && "Dashboard"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/posts"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-file-earmark-text me-2"></i>
                            {!collapsed && "Thống kê"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/users"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-people me-2"></i>
                            {!collapsed && "Quản lý người dùng"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/sanpham"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý sản phẩm"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/danhmuc"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý danh mục"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            href="/nhaphanphoi"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý nhà cung cấp"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/khoiluong"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý khối lượng"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/nhanbanh"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý nhân bánh"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            href="/baiviet"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý bài viết"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/danhmucbaiviet"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý danh mục bài viết"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/donhang"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý Đơn hàng"}
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/binhluan"
                            className="d-flex align-items-center"
                        >
                            <i className="bi bi-gear me-2"></i>{" "}
                            {!collapsed && "Quản lý bình luận"}
                        </NavLink>
                    </Nav.Item>
                </Nav>
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
                            {!collapsed && (
                                <strong className="ms-2">Admin</strong>
                            )}
                        </>
                    }
                    align="start"
                >
                    <Dropdowns.Item href="/profile">Profile</Dropdowns.Item>
                    <Dropdowns.Item href="/settings">Settings</Dropdowns.Item>
                    <Dropdowns.Item href="/login">Sign in</Dropdowns.Item>
                </Dropdowns>
            </div>
            <div className="flex-grow-1">{children}</div>
        </div>
    );
};

export default Sidebar;
