import { useState, useEffect, } from 'react'
import { getProductoById } from '../../Asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
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
          {loading ? <Loader /> : <ItemDetail dataDetail={item}/> }
        </div>
    )
}

export default ItemDetailContainer