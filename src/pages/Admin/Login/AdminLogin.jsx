import React from 'react'
import AdminLoginComp from '../../../components/AdminLoginComp/AdminLoginComp'

function AdminLogin() {
    return (

        <div
            style={{
                background: "#081220",
                height: "100vh",
                // width: "calc(100vw - 15px)",
                overflow: "hidden",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
            }}
        >
            Login
            <AdminLoginComp />
        </div>
    )
}

export default AdminLogin