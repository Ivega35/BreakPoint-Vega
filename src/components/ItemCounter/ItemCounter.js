import "./ItemCounter.css"
import { Link } from "react-router-dom";

const ItemCounter = ({countUp, countDown, onAdd, cant}) => {
   
  return (
    <div>
    <div className='counterSection'>
      <button type="button" className="btn btn-outline-info" onClick={() => countUp()}>+</button>
      <h5 className='mx-3 text-light'>Cantidad: {cant}</h5>
      <button type="button" className="btn btn-outline-info" onClick={() => countDown()}>-</button>
    </div >
    <div className='text-center p-3'>
      <button className='btn btn-primary mx-2' onClick= {() => onAdd()} >Agregar al carrito</button>
      <Link to={`/cart`}>
      <button className="btn btn-primary mx-2">Finalizar compra</button>
      </Link>
    </div>
    </div>
  )
}

export default ItemCounter;