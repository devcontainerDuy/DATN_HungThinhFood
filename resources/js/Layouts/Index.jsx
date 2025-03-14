import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

function Index({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Sidebar collapsed={collapsed} >
                <Header collapsed={collapsed} toggleSidebar={toggleSidebar} />
                <main>{children}</main>
                <Footer />
            </Sidebar>
        </>
    );
}

export default Index;