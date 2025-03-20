import React, { useEffect, useState } from "react";
import { Table as Tab, Form, InputGroup } from "react-bootstrap";
import Paginated from "@components/Paginated";
import Buttons from "@components/Buttons";
import PropTypes from "prop-types";
import { router, usePage } from "@inertiajs/react";

function Table({ columns, data }) {
    const [d, setD] = useState([]);
    const [meta, setMeta] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { url } = usePage();

    useEffect(() => {
        setD(data?.data);
        setMeta({
            current_page: data.current_page,
            last_page: data.last_page,
            per_page: data.per_page,
            total: data.total,
        });
    }, [data]);

    const handleChange = (page) => {
        setMeta((prevMeta) => ({ ...prevMeta, current_page: page }));
        router.get(url, { page: page });
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = d?.filter((row) => columns.some((col) => row[col.field]?.toString().toLowerCase().includes(searchQuery.toLowerCase())));

    return (
        <Tab className="caption-top" striped bordered hover responsive>
            <caption className="text-body">
                <div className="d-flex border-bottom py-2">
                    <div className="my-auto">
                        <p className="fw-bold h3">
                            <span>Danh sách</span>
                        </p>
                    </div>
                    <div className="ms-auto">
                        <InputGroup className="mb-3">
                            <Form.Control type="search" placeholder="Tìm kiếm..." aria-label="search" aria-describedby="basic-addon1" value={searchQuery} onChange={handleSearch} />
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
                                <p className="m-0">
                                    <strong>Tổng số mục:</strong> {meta?.total || 0} |<strong> Số mục trên mỗi trang:</strong> {meta?.per_page} |<strong> Tổng số trang:</strong> {meta?.last_page}
                                </p>
                            </div>
                            
                            <Paginated meta={meta} handle={handleChange} />
                        </div>
                    </td>
                </tr>
            </tfoot>
        </Tab>
    );
}

export default Table;

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
};
