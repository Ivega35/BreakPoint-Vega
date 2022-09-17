import { createContext, useContext, useState} from 'react';

const contexto = createContext();

const { Provider } = contexto;

export const useContexto = () => {
    return useContext(contexto);
}


const CustomProvider = ({children}) => {

    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (cantidad, producto) => {
        
        const copia_producto = {...producto}
        copia_producto.cantidad=cantidad;

        const copiaCarrito = [...carrito, copia_producto]
        setCarrito(copiaCarrito)

        const copiaCantidadTotal = cantidadTotal + cantidad;
        setCantidadTotal(copiaCantidadTotal)

        const copiaPrecioTotal = (precioTotal + producto.price * cantidad);
        setPrecioTotal(copiaPrecioTotal);
    }


    const borrarDelCarrito = (id) => {
        const copiaCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(copiaCarrito)

        const copiaCarritoTotal= carrito.find(producto => producto.id == id)
        const deletedPrice= precioTotal - copiaCarritoTotal.price * copiaCarritoTotal.cantidad
        setPrecioTotal(deletedPrice);
        
        
    } 


    const limpiarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setPrecioTotal(0)
    }


    const isInCarrito = (id) => {
        const producto = carrito.find(producto => producto.id === id)
        return producto !== undefined
    
    }

    const valorDelContexto = {
        carrito,
        cantidadTotal,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarCarrito, 
        isInCarrito
    }

    return (
        <Provider value= {valorDelContexto}>
            {children}
        </Provider>
    )

}

export default CustomProvider;