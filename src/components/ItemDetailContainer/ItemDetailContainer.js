import React, { useState, useEffect } from "react";
import { getProductoById } from "../../asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {
  const [producto, setProducto]= useState([]);
  const [Loading, setLoading] = useState(false);
  const {productoId}= useParams();

  useEffect(()=>{
    setLoading(true)
    getProductoById(productoId)
      .then(producto =>{
        setProducto(producto)
        setLoading(false)
      })
      .catch(error=>{
        console.log(error)
        setLoading(false)
      })
  }, [productoId])
  return (
    <div>
      {Loading ? <Loader/> : <ItemDetail {...producto} />}
    </div>
  )


};


export default ItemDetailContainer;