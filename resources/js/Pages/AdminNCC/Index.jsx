import React from "react";
import Layouts from "../../Layouts/Index";
function Index() {
    return (
        <>
            <Layouts
                children={
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <p className="mb-0">Số lượng nhà cung cấp: 2</p>
                            <a href="#" className="btn btn-primary">
                                + Thêm nhà cung cấp
                            </a>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-dark table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>Hình ảnh</th>
                                        <th>Tên nhà cung cấp</th>
                                        <th>Người Thêm</th>
                                        <th>Ngày thêm</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div
                                                className="bg-secondary rounded"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                }}
                                            ></div>
                                        </td>
                                        <td>Tân Huê Viên</td>
                                        <td>
                                            <i className="bi bi-pinterest"></i>{" "}
                                            Tâm
                                        </td>
                                        <td>17/10/2024</td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-outline-secondary btn-sm">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                                <button className="btn btn-outline-warning btn-sm">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
                                                    <i className="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div
                                                className="bg-secondary rounded"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                }}
                                            ></div>
                                        </td>
                                        <td>Công Lập Thành</td>
                                        <td>
                                            <i className="bi bi-pinterest"></i>{" "}
                                            Minh
                                        </td>
                                        <td>18/10/2024</td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button className="btn btn-outline-secondary btn-sm">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                                <button className="btn btn-outline-warning btn-sm">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
                                                    <i className="bi bi-x-circle"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Phân trang (Giả lập) --> */}
                        <div className="d-flex justify-content-center">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#">
                                            «
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
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
