import React, { useEffect, useState } from "react";
import { Table as Tab, Form, InputGroup } from "react-bootstrap";
import Paginated from "@components/Paginated";
import Buttons from "@components/Buttons";

function Table({ columns, data }) {
    const [d, setD] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setD(data?.data);
        setTotalPage(data?.total);
    }, [data]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = d?.filter((row) =>
        columns.some((col) =>
            row[col.field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <Tab className="caption-top" variant="dark" striped bordered hover responsive>
            <caption className="text-light">
                <div className="d-flex">
                    <div className="my-auto">
                        <p className="fw-bold h3">
                            <span>Danh sách</span>
                        </p>
                    </div>
                    <div className="ms-auto">
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="search"
                                placeholder="Tìm kiếm..."
                                aria-label="search"
                                aria-describedby="basic-addon1"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <Buttons variant="success" id="basic-addon1">
                                <i className="bi bi-search" />
                            </Buttons>
                        </InputGroup>
                    </div>
                </div>
            </caption>
            <thead>
                <tr>
                    {columns &&
                        columns?.map((col, index) => (
                            <th key={index} style={{ width: col?.width }}>
                                {col?.headerName}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {filteredData?.length > 0 ? (
                    filteredData?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns?.map((col, colIndex) => (
                                <td key={colIndex}>{col?.renderCell ? col?.renderCell({ row }) : row[col?.field]}</td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns?.length}>
                            <div className="d-flex justify-content-center">
                                <p className="m-0">Không có dữ liệu</p>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={columns?.length}>
                        <div className="d-flex justify-content-between px-3">
                            <div className="my-auto">
                                <p className="m-0 fw-bold">
                                    <span>Tổng số: </span>
                                    <span>{filteredData?.length || 0}</span>
                                </p>
                            </div>
                            <Paginated current={currentPage} total={totalPage} handle={handlePageChange} />
                        </div>
                    </td>
                </tr>
            </tfoot>
        </Tab>
    );
}

export default Table;