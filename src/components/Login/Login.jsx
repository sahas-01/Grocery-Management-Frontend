import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
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
                <Link to="/availableshops">
                    <input type="submit" value="Submit" id="auth" />
                </Link>
            </form>
        </div>
    );
}