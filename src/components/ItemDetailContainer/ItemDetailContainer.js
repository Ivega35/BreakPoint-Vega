import { useState, useEffect, useContext} from 'react'
import { getProductoById, ItemsContext } from '../../CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useContext(ItemsContext)
    const [loading, setLoading] = useState(false)
    const {productoId} = useParams();

    useEffect(() => {
        setLoading(true)
        getProductoById(productoId)
            .then(item => {
                setItem(item)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [productoId])

    return (
        <div>
          {loading ? <Loader /> : <ItemDetail {...item}/> }
        </div>
    )
}

export default ItemDetailContainer