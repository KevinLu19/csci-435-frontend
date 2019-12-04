import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Loading from "../components/Loading";

const PublicRoute = ({ component: Component }) => (
        <Route component={(props) => (<Component {...props} />)}/>
);
export default PublicRoute;