/**
 * app.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./routers/AppRouter";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

console.log('app.js is running');

const App = (props) => (
    <AppRouter/>
);

ReactDOM.render(<App/>, document.getElementById('app'));


