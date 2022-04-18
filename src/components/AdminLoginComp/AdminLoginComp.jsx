import React from 'react'
import { Link } from 'react-router-dom'

function AdminLoginComp() {
    return (
        <div class="login-box">
            <h2>Login to Get Started</h2>
            <form class="auth">
                <div class="user-box">
                    <input type="text" name="" required="" placeholder="Username" id="uid" />

                </div>
                <div class="user-box">
                    <input type="password" name="" required="" placeholder="Password" id="pass" />

                </div>

                <br />
                <Link to="/admin/home">
                    <input type="submit" value="Submit" id="auth" className="btn btn-primary" />
                </Link>
            </form>
        </div>
    )
}

export default AdminLoginComp