import ItemCount from "../ItemCounter/ItemCounter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {useContexto} from "../Context/Context";
import "./ItemDetail.css"

const ItemDetail = ( {dataDetail} ) => {

  const {agregarAlCarrito} = useContexto();

  const [confirmar, setConfirmar] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cant) => {

    agregarAlCarrito(cant, dataDetail);
    toast.success('Items agregados al carrito: ' + cant, {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast-success",
    });
    setCantidad(cant)
    setConfirmar(true);
  
  };

  const onAddFail = () => {
    toast.error('No hay stock suficiente', {
      theme: "dark",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast-error",
    });
  };

  return (
    <div className="detailCard">
    <div className="row g-0 py-3">
      <div className="col-md-4 text-center pt-4">
        <img src={dataDetail.pictureUrl} className="img-fluid" alt={dataDetail.title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title text-light text-center">{dataDetail.title}</h1>
          <p className="card-text text-light text-center px-5 py-4">{dataDetail.description}</p>
          <p className="card-text text-light fs-5 text-center"> <strong> Precio: ${dataDetail.price} </strong> </p>
          <p className="card-text text-light text-center">Stock: {dataDetail.stock}</p>

      {confirmar ? <div className="d-flex justify-content-center">
        <NavLink to="/cart"><button className="btn btn-info mx-3">Terminar compra</button></NavLink>
        <NavLink to="/"><button className="btn btn-info mx-3"> Volver al catalogo</button></NavLink>
        </div> : <ItemCount stock={dataDetail.stock} onAdd={onAdd} addFail={onAddFail} />}
      <div className="d-flex flex-start ml-5 mb-5"></div>
      <ToastContainer />
    </div>
      </div>
    </div>
  </div>
  );
}

export default ItemDetail;