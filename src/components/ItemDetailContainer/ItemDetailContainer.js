import { useState, useEffect} from 'react'
import { getProductoById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(false)
    const {productoId} = useParams();

    useEffect(() => {
        setLoading(true)
        getProductoById(productoId)
            .then(producto => {
                setProducto(producto)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [productoId])

    return (
        <div>
          {loading ? <Loader /> : <ItemDetail {...producto}/> }
        </div>
    )
}

export default ItemDetailContainer