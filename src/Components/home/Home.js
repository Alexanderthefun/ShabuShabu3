import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./Home.css";


export const Home = () => {


    return (
        <div className="homeContainer">
            <img className='logoImage' src="shabushabulogo.jpg" alt="Shabu Shabu Logo" />
            <div className="content">
                <p>Shabu Shabu is a local, family friendly Hotpot & Grill restaurant located at <br/> 1722 West End Ave, Nashville, TN 37203</p>
                <p>Please visit the About page for more information.</p>
            </div>
            
        </div>
    )
}