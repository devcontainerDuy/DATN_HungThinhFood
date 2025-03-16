import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const notify = (type, message) => {
    switch (type) {
        case "success":
            toast.success((t) => (
                <span>
                    <span>{message}</span>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                        <i className="bi bi-x-lg" />
                    </button>
                </span>
            ));
            break;
        case "error":
            toast.error((t) => (
                <span>
                    <span>{message}</span>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                        <i className="bi bi-x-lg" />
                    </button>
                </span>
            ));
            break;
        case "loading":
            toast.loading((t) => (
                <span>
                    <span>{message}</span>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                        <i className="bi bi-x-lg" />
                    </button>
                </span>
            ));
            break;
        case "promise":
            toast.promise(new Promise((resolve, reject) => setTimeout(() => resolve("Thành công!"), 1000)), {
                loading: "Đang tải...",
                success: "Thành công!",
                error: "Thất bại!",
            });
            break;
        default:
            toast("Thông báo chung!", {
                icon: "ℹ️",
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
            break;
    }
};

window.notify = notify;

export default notify;
