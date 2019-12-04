import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Header from '../components/Header';
import Loading from "../components/Loading";


// It redirects to main page for now
const PrivateRoute = () => (
            <Redirect to="/"/>
);

export default PrivateRoute;
