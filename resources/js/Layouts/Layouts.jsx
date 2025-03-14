import React, { useEffect } from "react";

function Layouts({ children }) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row ">
                    <div className="col-md-2 p-0">
                        <nav
                            class="sidebar d-flex flex-column p-3 text-white bg-dark"
                            style={{ height: "100%" }}
                        >
                            <a
                                href="#"
                                class="text-white text-decoration-none d-flex align-items-center mb-3"
                            >
                                <img src="" alt="Logo" class="logo me-2" />
                                <span class="fs-5 fw-bold">Admin</span>
                            </a>

                            <ul class="nav nav-pills flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-speedometer2 fs-3"></i>{" "}
                                        <span> Dashboard</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-bar-chart fs-3"></i>{" "}
                                        <span> Thống kê</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white">
                                        <i class="bi bi-box-seam fs-3"></i>{" "}
                                        <span> Quản lý sản phẩm</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý người dùng</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-box-seam fs-3"></i>{" "}
                                        <span> Quản lý đơn hàng</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý nhà cung cấp</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý danh mục</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý khối lượng</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý nhân bánh</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span> Quản lý khuyến mãi</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white">
                                        <i class="bi bi-people fs-3"></i>{" "}
                                        <span>Quản lý người dùng</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10 p-0">{children}</div>
                </div>
            </div>
        </>
    );
}

export default Layouts;
