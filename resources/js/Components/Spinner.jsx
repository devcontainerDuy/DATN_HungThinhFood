import React from "react";
import { PacmanLoader } from "react-spinners";
function Spinner() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-body" style={{ height: "100vh" }}>
                <PacmanLoader color="#36d7b7" size={20}/>
            </div>
        </>
    );
}

export default Spinner;
