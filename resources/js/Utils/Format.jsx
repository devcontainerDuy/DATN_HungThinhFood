import React from "react";

export function formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString("vi-VN", options);
}
