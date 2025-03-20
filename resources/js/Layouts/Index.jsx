import React, { useEffect, useState } from "react";
import Sidebar from "@layouts/Sidebar";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import Main from "@layouts/Main";
import { Head, usePage } from "@inertiajs/react";
import { Toaster } from "react-hot-toast";
import Spinner from "@components/Spinner";

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
    const [loading, setLoading] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [url]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <Head>
                <title>{seo?.title || "CMS Dashboard"}</title>
                <meta head-key="description" name="description" content={seo?.description || "This is CMS Dashboard"} />
                <meta head-key="keywords" name="keywords" content={seo?.keywords || "CMS Dashboard"} />
            </Head>
            <Toaster position="top-center" reverseOrder={true} />
            <Sidebar>
                <Header />
                <Main type={typeBtn} url={href} breadcrumb={breadcrumb}>
                    {children}
                    {/* <button onClick={() => window.notify("success", "ok")}>Make me a toast</button> */}
                </Main>
                <Footer />
            </Sidebar>
        </>
    );
}

export default Index;
