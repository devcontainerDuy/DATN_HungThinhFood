import React, { useEffect, useState } from "react";
import Layouts from "@layouts/Index";
import Table from "@components/Table";
import Buttons from "@components/Buttons";
import { Link } from "@inertiajs/react";
import { formatDate } from "@utils/Format";
import useDeleteFrom from "@hooks/useDeleteFrom";

function Index({ users, trashs, role, crumbs }) {
    const [data, setData] = useState([]);
    const [crum, setCrum] = useState([]);
    const { handleDelete } = useDeleteFrom("/cms/users", setData);

    const columns = [
        { field: "uid", headerName: "ID", width: 80 },
        { field: "username", headerName: "Tên tài khoản", width: 200 },
        { field: "email", headerName: "Địa chỉ mail", width: 200 },
        {
            field: "roles",
            headerName: "Loại tài khoản",
            width: 200,
            renderCell: (params) => {
                return Number.isNaN(params.row.roles)
                    ? params.row.roles.map((item, _) => {
                          return (
                              <span key={item.id} className="badge rounded-pill bg-secondary">
                                  {item.name}
                              </span>
                          );
                      })
                    : "N/A";
            },
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            width: 180,
            renderCell: (params) => {
                return params.row.phone ? params.row.phone : "N/A";
            },
        },
        {
            field: "created_at",
            headerName: "Ngày tạo",
            width: 200,
            renderCell: (params) => {
                return formatDate(params.row.created_at);
            },
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
                            <Buttons variant="danger" onClick={() => handleDelete(params.row.id)}>
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
