import React,   {useEffect, useState} from 'react';
import  { useParams, Link} from "react-router-dom"
import Productos from "../productos.json"
import Item from './Item';


export default function Categoria() {

    const { categoriaId } = useParams()

    const [arrayDeProductos, setArrayDeProductos] = useState([])

    // console.log(Productos)

    useEffect(()=>  {

     
    
      setArrayDeProductos(Productos.filter(item=> item.category == "categoriaId"))


    }, [categoriaId])



  return( <>



  Estoy en la categoria   {categoriaId}
   
    {
      arrayDeProductos.map(item => <div>{item.category}

         {item.id}    </div>)

      
    
    }
   
  </>);
}
