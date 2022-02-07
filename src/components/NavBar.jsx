import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  {BrowserRouter, Switch, Route, Link} from "react-router-dom"


export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
               <img src="https://cdn140.picsart.com/343749438059201.png?type=webp&to=crop&r=256" className="img-logo" alt="" />
                <Link to={"/home"}>Home</Link>
                <Link to="/categoria/mandos" >Mandos</Link>
  <Link to="/categoria/teclados" >Teclados</Link>
  <Link to="/categoria/digitales" >Digitales </Link>
            </ul>
            <i className="fa fa-cart-plus cart"></i>
        </div>


    )
}