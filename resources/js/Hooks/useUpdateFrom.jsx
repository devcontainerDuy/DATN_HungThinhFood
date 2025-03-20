import React, { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const useUpdateFrom = (url, handleChange) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    const handleSubmit = async ({ ...data }) => {
        setLoading(true);
        setError([]);

        await toast
            .promise(window.axios.put(url, { ...data }), {
                loading: "Đang xử lý...",
                success: (response) => {
                    if (response.data?.check === true) {
                        handleChange();
                        return window.notify("success", response?.data?.message || "Thành công");
                    } else {
                        return window.notify("error", response?.data?.message || "Có lỗi xảy ra");
                    }
                },
                error: (error) => {
                    setError(error?.response?.data?.errors);
                    return window.notify("error", error?.response?.data?.message || "Có lỗi xảy ra");
                },
            })
            .finally(() => setLoading(false));
    };

    return { handleSubmit, loading, error };
};

export default useUpdateFrom;

useUpdateFrom.propTypes = {
    url: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};
