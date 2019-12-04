/**
 * LoginPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import AccountFrom from "./AccountFrom";
import Loading from "../Loading";

export const LoginPage = () => (
        <div className="container">
            <header className="header">
                <div className="container">
                    <div className="header__title">
                        <div className="header__title__text">
                            <h2>Database Project</h2>
                        </div>
                    </div>
                </div>
            </header>
            <AccountFrom
                buttonText="Login"
                linkText="Don't have an account? Register"
                link="/register"
            />
        </div>
    );

export default LoginPage;
