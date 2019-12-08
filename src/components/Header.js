/**
 * File: Header.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 * Purpose: Links AppRouter to html.
 */

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div className="container">
        <header className="header">
            <div className="container">
                <div className="header__title">
                    <div className="header__title__text">
                        <h1>Database Project</h1>
                    </div>
                    <button className="header__title__button">
                        Logout
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="header__content">
                    <NavLink to="/"
                             className="header__item"
                             activeClassName="is-active"
                             exact={ true }>
                        { <h2>Home</h2> }
                    </NavLink>
                    <NavLink to="/search"
                             className="header__item"
                             activeClassName="is-active">
                        { <h2>Search</h2> }
                    </NavLink>
                    <NavLink to="/table"
                             className="header__item"
                             activeClassName="is-active">
                        { <h2>Data Tables</h2> }
                    </NavLink>
                </div>
            </div>
        </header>
    </div>
);

export default Header;

