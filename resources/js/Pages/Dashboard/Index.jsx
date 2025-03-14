import React from "react";
import Layouts from "../../Layouts/Layouts";

function Index() {
    //     let canvas = document.getElementById("myChart");
    //     let ctx = canvas.getContext("2d");

    //     const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    //     const yValues = [];

    //     if (yValues.length === 0) {
    //         canvas.style.{{"isplay = "none";
    // "}}       let noDataMessage = document.createElement("p");
    //         noDataMessage.innerText = "Không có dữ liệu để hiển thị!";
    //         noDataMessage.style.{{"olor = "white";
    //  "}}      noDataMessage.style".{{extAlign = "center";}}//         noDataMessage.style.{{"ontSize = "18px";
    //"}}        canvas.parentNode.appendChild(noDataMessage);
    //         return;
    //     }

    //     new Chart(ctx, {
    //         type: "line",
    //         data: {
    //             labels: xValues,
    //             datasets: [
    //                 {
    //                     label: "Thống kê đơn hàng",
    //                     backgroundColor: "rgba(0,0,255,0.1)",
    //                     borderColor: "rgba(247, 247, 254, 0.95)",
    //                     data: yValues,
    //                     fill: true,
    //                     tension: 0.3,
    //                 },
    //             ],
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     display: true,
    //                     position: "top",
    //                 },
    //             },
    //             scales: {
    //                 x: {
    //                     title: {
    //                         display: true,
    //                         text: "Ngày",
    //                     },
    //                 },
    //                 y: {
    //                     min: 6,
    //                     max: 16,
    //                     title: {
    //                         display: true,
    //                         text: "Số đơn hàng",
    //                     },
    //                 },
    //             },
    //         },
    //     });
    // }, []);

    return (
        <>
            <Layouts
                children={
                    <div
                        className="container-fluid p-4"
                        style={{ backgroundColor: "#161824" }}
                    >
                        <div className="container-fluid mt-4">
                            <div className="container-fluid mb-4 p-0">
                                <div className="container-fluid d-flex justify-content-end align-items-center flex-column p-0">
                                    <h1 className="text-white">
                                        Xin chào, Tâm
                                    </h1>
                                    <p className="text-white">
                                        Chúc bạn một ngày tốt lành
                                    </p>
                                </div>
                            </div>
                            <h2 className="text-white mb-4">Trang Dashboard</h2>

                            {/* <!-- Thống kê --> */}
                            <div className="row text-white mb-4">
                                <div className="col-md-3 mb-3">
                                    <div className="card bg-dark p-3 ">
                                        <div className="d-flex justify-content-between align-items-center ">
                                            <div className="container-fluid">
                                                <i className="bi bi-pie-chart-fill text-success fs-1"></i>
                                            </div>
                                            <div className="container-fluid  d-flex  align-items-start flex-column gap-1">
                                                <span className="text-white fs-1">
                                                    10,000
                                                </span>
                                                <span className="text-white ">
                                                    Lượt truy cập
                                                </span>
                                                <span className="text-white ">
                                                    <i className="bi bi-graph-up-arrow text-success"></i>
                                                    Tăng
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="card bg-dark p-3">
                                        <div className="d-flex justify-content-between align-items-center ">
                                            <div className="container-fluid">
                                                <i className="bi bi-book text-success fs-1"></i>
                                            </div>
                                            <div className="container-fluid  d-flex  align-items-start flex-column gap-1">
                                                <span className="text-white fs-1">
                                                    14
                                                </span>
                                                <span className="text-white ">
                                                    Tổng bài viết
                                                </span>
                                                <span className="text-white ">
                                                    <i className="bi bi-graph-up-arrow text-success"></i>{" "}
                                                    Tăng
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="card bg-dark p-3">
                                        <div className="d-flex justify-content-between align-items-center ">
                                            <div className="container-fluid">
                                                <i className="bi bi-cake2-fill text-success fs-1"></i>
                                            </div>
                                            <div className="container-fluid  d-flex  align-items-start flex-column gap-1">
                                                <span className="text-white fs-1">
                                                    6
                                                </span>
                                                <span className="text-white ">
                                                    Sản phẩm mới
                                                </span>
                                                <span className="text-white ">
                                                    <i className="bi bi-graph-up-arrow text-success"></i>{" "}
                                                    Tăng thêm
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="card bg-dark p-3">
                                        <div className="d-flex justify-content-between align-items-center ">
                                            <div className="container-fluid">
                                                <i className="bi bi-bag-check text-success fs-1"></i>
                                            </div>
                                            <div className="container-fluid  d-flex  align-items-start flex-column gap-1">
                                                <span className="text-white fs-1">
                                                    6
                                                </span>
                                                <span className="text-white ">
                                                    Đơn hàng mới
                                                </span>
                                                <span className="text-white ">
                                                    <i className="bi bi-graph-up-arrow text-success"></i>{" "}
                                                    Tăng thêm
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 
        <!-- Biểu đồ --> */}
                            <div className="row mt-3 mb-3 gap-4 ">
                                <div
                                    className="col-md-9 bg-dark rounded p-3 ml-3"
                                    style={{ width: "74.2%" }}
                                >
                                    <h5 className="text-white">
                                        Thống kê số lượng đơn hàng
                                    </h5>
                                    <div className="container-fluid">
                                        {/* <canvas
                                            id="myChart"
                                            style={{"width:100%;max-width:100"}}"
                                        ></canvas> */}
                                    </div>
                                </div>

                                <div
                                    className="col-md-3 card bg-dark rounded p-3"
                                    style={{ width: "23%" }}
                                >
                                    <h4 className="text-white">
                                        Danh sách khách hàng mới
                                    </h4>
                                    <p className="text-white">
                                        Hiển thị các khách hàng mới đăng ký
                                    </p>
                                </div>
                            </div>
                            {/* <!-- bài viết và danh mục --> */}
                            <div className="row mt-3 mb-3 gap-4 ">
                                <div
                                    className="col-md-9 bg-dark rounded p-3 ml-3"
                                    style={{ width: "74.2%" }}
                                >
                                    <h5 className="text-white">
                                        📊Thống kê số bài viết
                                    </h5>
                                    <div className="container-fluid">
                                        @include('page.Baiviet')
                                    </div>
                                </div>

                                <div
                                    className="col-md-3 card bg-dark rounded p-3"
                                    style={{ width: "23%" }}
                                >
                                    <h4 className="text-white">
                                        Danh sách danh mục
                                    </h4>
                                    <p className="text-white">
                                        Hiển thị số lượng sản phẩm đang có trong
                                        danh mục
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />
        </>
    );
}

export default Index;
