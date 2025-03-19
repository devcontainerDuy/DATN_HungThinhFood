import React from "react";
import './bootstrap.jsx';
import "@css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { ProSidebarProvider } from 'react-pro-sidebar';

createInertiaApp({
    title: (title) => `${title} - CMS Dashboard`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ProSidebarProvider>
                <App {...props} />
            </ProSidebarProvider>
        );
    },
});