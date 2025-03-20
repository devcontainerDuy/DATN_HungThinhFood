import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const notify = (type, message) => {
    switch (type) {
        case "success":
            toast.success((t) => (
                <div className="d-flex align-content-between">
                    <span className="m-auto">{message}</span>
                    <span className="m-auto">
                        <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                            <i className="bi bi-x-lg" />
                        </button>
                    </span>
                </div>
            ));
            break;
        case "error":
            toast.error((t) => (
                <div className="d-flex align-content-between">
                    <span className="m-auto">{message}</span>
                    <span className="m-auto">
                        <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                            <i className="bi bi-x-lg" />
                        </button>
                    </span>
                </div>
            ));
            break;
        case "loading":
            toast.loading((t) => (
                <div className="d-flex align-content-between">
                    <span className="m-auto">{message}</span>
                    <span className="m-auto">
                        <button className="btn btn-sm btn-secondary ms-2" onClick={() => toast.dismiss(t.id)}>
                            <i className="bi bi-x-lg" />
                        </button>
                    </span>
                </div>
            ));
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
