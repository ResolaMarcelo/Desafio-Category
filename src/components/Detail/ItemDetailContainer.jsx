import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail';
import productos from '../../productos.json';



export default function ItemDetailContainer() {
    

    const [prod, setProd] = useState({})
    const { categoriaId } = useParams()

    useEffect(() => {
        const GetItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = productos.find((e) => e.id === productos.id)
             
    resolve(producto)
}, 2000)
    })
GetItem.then((res) => {
   
    setProd(productos.filter(item=> item.id === categoriaId ));
})
GetItem.catch((err) => {
    setProd(err)
})
}, [])


return <ItemDetail prod={prod} />;
}
