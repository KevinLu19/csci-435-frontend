/**
 * AppRouter.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import MainPage from "../components/MainPage";
import LoginPage from "../components/accounts/LoginPage";
import RegisterPage from "../components/accounts/RegisterPage";
import NotFoundPage from "../components/NotFoundPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { createBrowserHistory } from "history";
import Course from "../components/Course";
import Search from "../components/Search";
import DataTables from "../components/DataTables";

export const history = createBrowserHistory();

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={ history }>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/"
                            component={ MainPage }
                            exact={ true }/>
                        <PublicRoute
                            path="/course"
                            component={ Course }/>
                        <PublicRoute
                            path="/search"
                            component={ Search }/>

                        <PublicRoute
                            path="/table"
                            component={ DataTables }/>

                        <PublicRoute
                            path="/login"
                            component={ LoginPage }/>
                        <PublicRoute
                            path="/register"
                            component={ RegisterPage }/>
                        <Route
                            component={ NotFoundPage }/>
                    </Switch>
                </div>
            </Router>
        );
    }
}