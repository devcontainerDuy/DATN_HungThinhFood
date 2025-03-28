import { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const useSubmitForm = (url, handleChange) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    const handleSubmit = async ({ ...data }) => {
        setLoading(true);
        setError([]);

        await toast
            .promise(
                window.axios.post(
                    url,
                    { ...data },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                ),
                {
                    loading: "Đang xử lý...",
                    success: (response) => {
                        console.log(response);
                        
                        if (response.data?.check === true) {
                            handleChange() || null;
                            return window.notify("success", response?.data?.message || "Thành công");
                        }
                        return window.notify("error", response?.data?.message || "Không có gì xảy ra");
                    },
                    error: (error) => {
                        console.log(error);
                        setError(error?.response?.data?.errors);
                        return window.notify("error", error?.response?.data?.message || "Có lỗi xảy ra");
                    },
                }
            )
            .finally(() => setLoading(false));
    };

    return { handleSubmit, loading, error };
};

useSubmitForm.propTypes = {
    url: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default useSubmitForm;
