import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from "./ProtectedRoute";
import Chart from "./Chart";

function Main() {

    return(
        <div id="main">
            <Routes>
                <Route 
                    exact path="/" 
                    element ={<Login/>}
                />
                <Route
                    path="/user"
                    element={<ProtectedRoute/>}
                />
                <Route
                    path="/chart"
                    element={<Chart/>}
                />
            </Routes>
        </div>
        );
};

export default Main;