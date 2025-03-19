import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
            "@components": "/resources/js/Components",
            "@pages": "/resources/js/Pages",
            "@layouts": "/resources/js/Layouts",
            "@hooks": "/resources/js/Hooks",
            "@css": "/resources/css",
            "@img": "/resources/img",
            "@utils": "/resources/js/Utils",
        },
    },
});
