import React from 'react'
import './Login.css'

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

                <input type="button" value="Submit" id="auth" />

            </form>
        </div>
    );
}