import React, { useEffect, useState } from "react";
import Layouts from "@layouts/Index";
import Table from "@components/Table";
import Buttons from "@components/Buttons";
import { Link } from "@inertiajs/react";

function Index({ users, trashs, role, crumbs }) {
    const [data, setData] = useState([]);
    const [crum, setCrum] = useState([]);

    const columns = [
        { field: "uid", headerName: "ID", width: 80 },
        { field: "name", headerName: "Tên tài khoản", width: 200 },
        { field: "email", headerName: "Địa chỉ mail", width: 200 },
        {
            field: "roles",
            headerName: "Loại tài khoản",
            width: 200,
        },
        {
            field: "status",
            headerName: "Trạng thái",
            width: 180,
        },
        {
            field: "created_at",
            headerName: "Ngày tạo",
            width: 200,
        },
        {
            field: "action",
            headerName: "Thao tác",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <div className="d-flex gap-2">
                            <Buttons as={Link} href={`/cms/users/${params.row.uid}/edit`} variant="warning">
                                <i className="bi bi-pencil-square" />
                            </Buttons>
                            <Buttons variant="danger" onClick={() => console.log("nhấn xóa: " + params.row.uid)}>
                                <i className="bi bi-trash" />
                            </Buttons>
                        </div>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        setData(users);
        setCrum(crumbs);
    }, [users, crumbs]);

    return (
        <>
            <Layouts breadcrumb={crum} seo={{ title: "Danh sách nhà cung cấp", description: "Danh sách nhà cung cấp" }} typeBtn="add" href="/cms/users/create">
                <Table columns={columns} data={data} />
            </Layouts>
        </>
    );
}

export default Index;
