import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import  {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemDetail from './components/Detail/ItemDetail';
import Categoria from './components/Categoria';

function App() {
  return (
    <div className="App">
      
      <>
        <BrowserRouter>
        <NavBar></NavBar>
          <Switch>

            {/* ruta home */}
            <Route exact path="/home">
           

            </Route>

            {/* ruta contacto */}
            <Route  path="/categoria/:categoriaId/:id">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>

            <Route exact path="/contacto">
              Estas en contacto
            </Route>

            {/* ruta carrito */}
            <Route  path="/categoria/:categoriaId">
             <ItemListContainer></ItemListContainer>
        
            </Route>

              {/* ruta carrito */}
              <Route exact path="/digitales">
              Estos son nuestros jeugos
            </Route>

              {/* ruta carrito */}
              <Route exact path="/mandos">
              Estos son nuestros mandos
            </Route>
          </Switch>
         
        </BrowserRouter>
      </>
      
      

    </div>
  );
}

export default App;
