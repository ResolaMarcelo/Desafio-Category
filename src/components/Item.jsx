import React from "react";
import '../App.css';
import Clicker from "./Clicker";
import  { useParams, Link} from "react-router-dom"

export default function Item(props) {
  return (
    <>
      <div className="item-card">
        
        <div className="item-img">
          <img className="img img-fluid" src={props.item.pictureUrl} alt="" />
        </div>
        <div className="item-header">{props.item.title}</div>
        <div className="item-description">{props.item.description}</div>
        <div className="item-price">$ {props.item.price}</div>
        <Clicker initial="1" stock="10"></Clicker>
       
      </div>
    </>
  );
}