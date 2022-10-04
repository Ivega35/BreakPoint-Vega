import { useContexto } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
import "./cart.css"

const Cart = () => {
    const { carrito, borrarDelCarrito, limpiarCarrito, precioTotal} = useContexto();
    console.log(carrito, borrarDelCarrito, limpiarCarrito);

    return (
      <div className=" container-fluid">
      <div className="col-lg-12 d-flex justify-content-center flex-column ">
        <div className="text-center py-3">
          <h1>Carrito</h1>
        </div>
        {carrito.length > 0 ? (
        <div>
          <ul className="cart-body">
            {carrito.map(producto => {
              return <li key={producto.id} className="d-flex justify-content-between py-2 align-items-center">
                <img className="col-lg-1" src={producto.pictureUrl}/>
                <h5 className="col-lg-2 text-light pt-3">{producto.title}</h5>
                <p className="col-lg-2 text-light pt-3">precio: ${producto.price}</p>
                <p className="col-lg-2 text-light pt-3">cantidad: {producto.cantidad}</p>
                <button className="btn btn-danger border-radius-3 mx-2 h-50 " onClick={() => borrarDelCarrito(producto.id)}>Borrar</button>
                </li>})}
          </ul>
          
            <h4 className="text-center pt-2">Total: ${precioTotal}</h4>
            <div className="d-flex justify-content-center py-3">
            <NavLink to='/shop' className="btn btn-primary mx-5">Finalizar Compra</NavLink>
            <button className="btn btn-primary mx-5" onClick={limpiarCarrito}>Limpiar Carrito</button>
          </div>
          <ToastContainer />
        </div>) :
        <div >
        
        <h4 className="text-center py-5">El carrito se encuentra vacio.</h4>  
        <div className="d-flex justify-content-center ">
        <NavLink to="/" className="btn btn-primary">Volver a Home</NavLink>
        </div>
        </div>}
      </div>
      </div>
    )
}

export default Cart