/**
 * NotFoundPage.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
    <div className="container">
        404 - <Link to="/home">Go home</Link>
    </div>
);
export default NotFoundPage;
