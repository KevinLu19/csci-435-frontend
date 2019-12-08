/*
Author: Kevin Lu 
Date:  12/6/2019
File: Search.js
Purpose: This file will be used to let users enter in student names to check what kind of classes they are taking.
Modification: N/A
*/

import React from "react"
import Header from "./Header"

const Search = () => (
    <>
        <Header/>
        <div className="container">
            <div className="container">
                <div className="section">
                    <div className="list-body">
                        <h2>
                            Enter Student Name:
                        </h2>

                        <div>
                            <input class="form-control" type="text" placeholder="Search Engine" aria-label="Search"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Search;