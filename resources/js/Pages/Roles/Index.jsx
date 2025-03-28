import React, { useEffect, useState } from "react";
import Layouts from "@layouts/Index";
import Table from "@components/Table";
import Buttons from "@components/Buttons";
import { Link } from "@inertiajs/react";
import useDeleteFrom from "@hooks/useDeleteFrom";

function Index({ roles, crumbs }) {
    const [data, setData] = useState(roles || []);
    const [crum, setCrum] = useState(crumbs || []);
    const { handleDelete } = useDeleteFrom("/cms/roles", setData);

    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field: "name", headerName: "Tên vai trò", width: 200 },
        {
            field: "permissions",
            headerName: "Quyền hạn",
            width: 300,
            renderCell: (params) => {
                return params.row.permissions.map((perm, _) => (
                    <span key={perm.id} className="badge bg-secondary me-1">
                        {perm.name}
                    </span>
                ));
            },
        },
        {
            field: "action",
            headerName: "Thao tác",
            width: 160,
            renderCell: (params) => (
                <div className="d-flex gap-2">
                    <Buttons as={Link} href={"/cms/roles/:role/edit".replace(":role", params.row.id)} variant="warning">
                        <i className="bi bi-pencil-square" />
                    </Buttons>
                    <Buttons variant="danger" onClick={() => handleDelete(params.row.id)}>
                        <i className="bi bi-trash" />
                    </Buttons>
                </div>
            ),
        },
    ];

    return (
        <Layouts breadcrumb={crum} seo={{ title: "Danh sách vai trò", description: "Danh sách vai trò" }} typeBtn="add" href="/cms/roles/create">
            <Table columns={columns} data={data} />
        </Layouts>
    );
}

export default Index;
