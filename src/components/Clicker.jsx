import React, { useState } from "react";
import '../clicker.css';


function Clickerr(props) {
  const [contador, setContador] = useState(props.initial)

  function sumar() {
    if (contador < props.stock) {

      setContador(contador + 1)
    }
  }


  function restar() {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }


  function carrito() {
    alert("Se agregaron " + contador + " Productos al carrito")
    setContador(0)
  }




  return (
    <>


      <p>  {contador}</p>
      <button onClick={restar} >-</button>
      <button onClick={carrito}>A.Carrito</button>
      <button onClick={sumar}>+</button>

      <p>Stock: 10</p>

    </>
  );
}

export default Clickerr;