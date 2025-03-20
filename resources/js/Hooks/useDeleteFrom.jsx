import React from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const useDeleteFrom = (url, setMeta) => {
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Bạn có chắc chắn muốn xóa không?",
            text: "Dữ liệu sẽ không thể khôi phục lại!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vâng, xóa nó!",
            cancelButtonText: "Không, hủy đi!",
            reverseButtons: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await window.axios
                    .delete(url + "/" + id)
                    .then((response) => {
                        if (response.data.check === true) {
                            setMeta((prev) => ({
                                ...prev,
                                data: prev.data?.filter((item) => item.id !== id) || [],
                            }));
                            Swal.fire({
                                title: "Đã xóa!",
                                text: response?.data?.message || "Tập tin của bạn đã bị xóa.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        } else {
                            Swal.fire({
                                title: "Xóa không thành công!",
                                text: response?.data?.message || "Có lỗi xảy ra.",
                                icon: "error",
                            });
                        }
                    })
                    .catch((error) => {
                        window.notify("error", error?.response?.data?.message || "Có lỗi xảy ra");
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Đã hủy",
                    text: "Tập tin của bạn không bị xóa.",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    return { handleDelete };
};

export default useDeleteFrom;

useDeleteFrom.propTypes = {
    url: PropTypes.string.isRequired,
    setMeta: PropTypes.func.isRequired,
};
