import { useState } from "react";
import "./ItemCounter.css"

const ItemCount = ({stock, initial, onAdd, addFail}) => {

    const [count, setCount] = useState(1);


    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const agregarCarrito = () => {
        if (count <= stock) {
            onAdd(count);
            setCount(1);
        }
        else {
            addFail();
        }
    }
    

    return (   
        <div>
            
            <div className="counterSection">
                <button className="btn btn-outline-info mx-3" onClick={sumar}>+</button>
                <p className="text-light fs-5">Cantidad: {count}</p>
                <button className="btn btn-outline-info mx-3" onClick={restar}>-</button> 
            </div>
            <div className="d-flex justify-content-center pt-3">
                <button className="btn btn-info" onClick={agregarCarrito}>Agregar al carrito</button>
            </div>    
            
        </div>
            
    );
}



export default ItemCount