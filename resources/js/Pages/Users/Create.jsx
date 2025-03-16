import React from "react";
import Layouts from "@layouts/Index";

function Create({ crum }) {
    return (
        <>
            <Layouts breadcrumb={crum} seo={{ title: "Danh sách nhà cung cấp", description: "Danh sách nhà cung cấp" }} typeBtn="back" href="/cms/users">
                <h1>Trang tạo </h1>
            </Layouts>
        </>
    );
}

export default Create;
