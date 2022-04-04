import React from 'react'
import Login from '../../components/Login/Login'

function LoginPage() {
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
            <Login />
        </div>
    )
}

export default LoginPage;