import React from "react";
import Sidebar from "../../Layouts/Sidebar";

function Index() {
    return (
        <>
            <Sidebar
                children={
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <p class="mb-0">Số lượng bài viết: 5</p>
                            <a href="#" class="btn btn-primary">
                                + Thêm bài viết
                            </a>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-dark table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <th>Tiêu đề bài viết</th>
                                        <th>Tác giả</th>
                                        <th>Ngày viết</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div
                                                class="bg-secondary rounded"
                                                style="width: 50px; height: 50px;"
                                            ></div>
                                        </td>
                                        <td>Bánh cóng - Đặc sản Sóc Trăng</td>
                                        <td>
                                            <i class="bi bi-pinterest"></i> Tâm
                                        </td>
                                        <td>17/10/2024</td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-outline-secondary btn-sm">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>
                                                <button class="btn btn-outline-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-sm">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                class="bg-secondary rounded"
                                                style="width: 50px; height: 50px;"
                                            ></div>
                                        </td>
                                        <td>
                                            Bún nước lèo - Hương vị truyền thống
                                        </td>
                                        <td>
                                            <i class="bi bi-pinterest"></i> Minh
                                        </td>
                                        <td>18/10/2024</td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-outline-secondary btn-sm">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>
                                                <button class="btn btn-outline-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-sm">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                class="bg-secondary rounded"
                                                style="width: 50px; height: 50px;"
                                            ></div>
                                        </td>
                                        <td>
                                            Bánh Pía - Ngọt ngào hương sầu riêng
                                        </td>
                                        <td>
                                            <i class="bi bi-pinterest"></i> Lan
                                        </td>
                                        <td>19/10/2024</td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-outline-secondary btn-sm">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>
                                                <button class="btn btn-outline-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-sm">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                class="bg-secondary rounded"
                                                style="width: 50px; height: 50px;"
                                            ></div>
                                        </td>
                                        <td>Bánh Tét - Hương vị ngày Tết</td>
                                        <td>
                                            <i class="bi bi-pinterest"></i> Duy
                                        </td>
                                        <td>20/10/2024</td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-outline-secondary btn-sm">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>
                                                <button class="btn btn-outline-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-sm">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                class="bg-secondary rounded"
                                                style="width: 50px; height: 50px;"
                                            ></div>
                                        </td>
                                        <td>
                                            Cháo cá lóc rau đắng - Đậm đà miền
                                            Tây
                                        </td>
                                        <td>
                                            <i class="bi bi-pinterest"></i> Hạnh
                                        </td>
                                        <td>21/10/2024</td>
                                        <td>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-outline-secondary btn-sm">
                                                    <i class="bi bi-three-dots"></i>
                                                </button>
                                                <button class="btn btn-outline-warning btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-sm">
                                                    <i class="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Phân trang (Giả lập) --> */}
                        <div class="d-flex justify-content-center">
                            <nav>
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#">
                                            «
                                        </a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            »
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            />
        </>
    );
}

export default Index;
