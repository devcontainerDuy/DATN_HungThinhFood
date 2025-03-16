import React, { useState } from "react";
import Sidebar from "@layouts/Sidebar";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import Main from "@layouts/Main";
import { Head } from "@inertiajs/react";
import { Toaster } from "react-hot-toast";

function Index({
    seo = {
        title: "",
        description: "",
        keywords: "",
    },
    typeBtn,
    href,
    breadcrumb,
    children,
}) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Head>
                <title>{seo?.title || "CMS Dashboard"}</title>
                <meta head-key="description" name="description" content={seo?.description || "This is CMS Dashboard"} />
                <meta head-key="keywords" name="keywords" content={seo?.keywords || "CMS Dashboard"} />
            </Head>
            <Toaster position="top-center" reverseOrder={true} />
            <Sidebar collapsed={collapsed}>
                <Header collapsed={collapsed} toggleSidebar={toggleSidebar} />
                <Main type={typeBtn} url={href} breadcrumb={breadcrumb}>
                    {children}
                    {/* <button onClick={() => window.notify("promise", "This is a success message")}>Make me a toast</button> */}
                </Main>
                <Footer />
            </Sidebar>
        </>
    );
}

export default Index;
