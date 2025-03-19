import React, { useCallback, useEffect, useState } from "react";
import NavLink from "@components/NavLink";
import { Menu, MenuItem, Sidebar as ProSidebar, SubMenu, useProSidebar } from "react-pro-sidebar";

const Sidebar = ({ children }) => {
    const { collapseSidebar } = useProSidebar();
    const [isExpanded, setIsExpanded] = useState(() => {
        return JSON.parse(localStorage.getItem("isSidebarExpanded")) ?? true;
    });

    const handleToggle = useCallback(() => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        localStorage.setItem("isSidebarExpanded", newState);
        collapseSidebar(!newState);
    }, [isExpanded, collapseSidebar]);

    useEffect(() => {
        collapseSidebar(!isExpanded);
    }, [isExpanded, collapseSidebar]);

    return (
        <div className="d-flex" style={{ minHeight: "100vh", height: "100vh" }}>
            <ProSidebar collapsed={!isExpanded}>
                <Menu>
                    <MenuItem
                        icon={!isExpanded ? <i className="bi bi-list" style={{ fontSize: "32px" }} /> : <i className="bi bi-list-nested" style={{ fontSize: "32px" }} />}
                        onClick={() => {
                            handleToggle();
                        }}
                    >
                        <h4 className="fw-bold text-center">
                            <span>CMS 😎</span>
                        </h4>
                    </MenuItem>
                    <MenuItem disabled>
                        <hr className="sidebar-divider" />
                    </MenuItem>

                    <MenuItem icon={<i className="bi bi-speedometer2" />} component={<NavLink href="/cms/dashboard" />} active={true} title="Bảng điều khiển"> Bảng điều khiển </MenuItem>

                    <SubMenu label="Quản lý người dùng" icon={<i className="bi bi-person" />} title="Quản lý người dùng">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/users" />} active={false} title="Danh sách người dùng"> Danh sách người dùng </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/users/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý nhà cung cấp" icon={<i className="bi bi-person-badge" />} title="Quản lý nhà cung cấp">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/suppliers" />} active={false} title="Danh sách nhà cung cấp"> Danh sách nhà cung cấp </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/suppliers/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý bài viết" icon={<i className="bi bi-newspaper" />} title="Quản lý bài viết">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/posts" />} active={false} title="Danh sách bài viết"> Danh sách bài viết </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/posts/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý danh mục" icon={<i className="bi bi-tags" />} title="Quản lý danh mục">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/categories" />} active={false} title="Danh sách danh mục"> Danh sách danh mục </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/categories/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý sản phẩm" icon={<i className="bi bi-box" />} title="Quản lý sản phẩm">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/products" />} active={false} title="Danh sách sản phẩm"> Danh sách sản phẩm </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/products/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                        <MenuItem icon={<i className="bi bi-tags" />} component={<NavLink href="/cms/products/categories" />} active={false} title="Danh mục sản phẩm"> Danh mục sản phẩm </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý đơn hàng" icon={<i className="bi bi-cart" />} title="Quản lý đơn hàng">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/orders" />} active={false} title="Danh sách đơn hàng"> Danh sách đơn hàng </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/orders/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                        <MenuItem icon={<i className="bi bi-tags" />} component={<NavLink href="/cms/orders/categories" />} active={false} title="Danh mục đơn hàng"> Danh mục đơn hàng </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý kho" icon={<i className="bi bi-box-seam" />} title="Quản lý kho">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/warehouses" />} active={false} title="Danh sách kho"> Danh sách kho </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/warehouses/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                        <MenuItem icon={<i className="bi bi-tags" />} component={<NavLink href="/cms/warehouses/categories" />} active={false} title="Danh mục kho"> Danh mục kho </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý báo cáo" icon={<i className="bi bi-file-earmark-text" />} title="Quản lý báo cáo">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/reports" />} active={false} title="Danh sách báo cáo"> Danh sách báo cáo </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/reports/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                        <MenuItem icon={<i className="bi bi-tags" />} component={<NavLink href="/cms/reports/categories" />} active={false} title="Danh mục báo cáo"> Danh mục báo cáo </MenuItem>
                    </SubMenu>

                    <SubMenu label="Quản lý cài đặt" icon={<i className="bi bi-gear" />} title="Quản lý cài đặt">
                        <MenuItem icon={<i className="bi bi-list" />} component={<NavLink href="/cms/settings" />} active={false} title="Danh sách cài đặt"> Danh sách cài đặt </MenuItem>
                        <MenuItem icon={<i className="bi bi-plus-circle" />} component={<NavLink href="/cms/settings/create" />} active={false} title="Tạo mới"> Tạo mới </MenuItem>
                        <MenuItem icon={<i className="bi bi-tags" />} component={<NavLink href="/cms/settings/categories" />} active={false} title="Danh mục cài đặt"> Danh mục cài đặt </MenuItem>
                    </SubMenu>

                    <MenuItem disabled>
                        <hr className="sidebar-divider" />
                    </MenuItem>

                    <MenuItem icon={<i className="bi bi-box-arrow-right" />} component={<NavLink href="/cms/logout" />} active={false} title="Đăng xuất"> Đăng xuất </MenuItem>
                    
                    <MenuItem disabled>
                        <hr className="sidebar-divider" />
                    </MenuItem>

                    <MenuItem icon={<i className="bi bi-info-circle" />} component={<NavLink href="/cms/about" />} active={false} title="Giới thiệu"> Giới thiệu </MenuItem>
                    <MenuItem icon={<i className="bi bi-question-circle" />} component={<NavLink href="/cms/help" />} active={false} title="Trợ giúp"> Trợ giúp </MenuItem>
                    <MenuItem icon={<i className="bi bi-gear" />} component={<NavLink href="/cms/settings" />} active={false} title="Cài đặt"> Cài đặt </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-text" />} component={<NavLink href="/cms/privacy" />} active={false} title="Chính sách bảo mật"> Chính sách bảo mật </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-lock" />} component={<NavLink href="/cms/terms" />} active={false} title="Điều khoản sử dụng"> Điều khoản sử dụng </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-person" />} component={<NavLink href="/cms/contact" />} active={false} title="Liên hệ"> Liên hệ </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-excel" />} component={<NavLink href="/cms/export" />} active={false} title="Xuất dữ liệu"> Xuất dữ liệu </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-pdf" />} component={<NavLink href="/cms/import" />} active={false} title="Nhập dữ liệu"> Nhập dữ liệu </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-code" />} component={<NavLink href="/cms/developer" />} active={false} title="Nhà phát triển"> Nhà phát triển </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-lock" />} component={<NavLink href="/cms/security" />} active={false} title="Bảo mật"> Bảo mật </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-lock" />} component={<NavLink href="/cms/backup" />} active={false} title="Sao lưu"> Sao lưu </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-lock" />} component={<NavLink href="/cms/restore" />} active={false} title="Khôi phục"> Khôi phục </MenuItem>

                    <MenuItem disabled>
                        <hr className="sidebar-divider" />
                    </MenuItem>

                    <MenuItem icon={<i className="bi bi-file-earmark-person" />} component={<NavLink href="/cms/profile" />} active={false} title="Hồ sơ"> Hồ sơ </MenuItem>
                    <MenuItem icon={<i className="bi bi-file-earmark-lock" />} component={<NavLink href="/cms/change-password" />} active={false} title="Đổi mật khẩu"> Đổi mật khẩu </MenuItem>
                </Menu>
            </ProSidebar>
            <div className="flex-grow-1">{children}</div>
        </div>
    );
};

export default Sidebar;
