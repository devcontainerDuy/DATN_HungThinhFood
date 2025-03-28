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
            next_cursor: data.next_cursor,
            prev_cursor: data.prev_cursor,
        });
    }, [data]);

    const handleChange = (cursor) => {
        router.get(url, { cursor: cursor });
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
                    {columns?.map((col) => (
                        <th key={col?.field} style={{ width: col?.width }}>
                            {col?.headerName}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="table-group-divider">
                {filteredData?.length > 0 ? (
                    filteredData?.map((row) => (
                        <tr key={row.id}>
                            {columns?.map((col) => (
                                <td key={col.field} style={{ width: col?.width }}>
                                    {col?.renderCell ? col?.renderCell({ row }) : row[col?.field]}
                                </td>
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
                                    <strong>Số mục trên mỗi trang:</strong> {data?.per_page}
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
