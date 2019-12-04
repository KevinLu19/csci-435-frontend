/**
 * RegisterPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import AccountFrom from "./AccountFrom";
import Loading from "../Loading";

export const RegisterPage = () => (
    <div className="container">
        <header className="header">
            <div className="header__title">
                <div className="header__title__text">
                    <h2>Database Project</h2>
                </div>
            </div>
        </header>
        <AccountFrom
            buttonText="Register"
            linkText="Have an account? Login"
            link="/login"
        />
    </div>
);

export default RegisterPage;