import { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {collection, doc, getDoc} from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {

    const [selected, setSelected] = useState([])
    const [loading, setLoading] = useState(false)
    const { productoId } = useParams();

    useEffect(() => {
      setLoading(true)

    const itemCollection = collection(db, "paddle");
    const refDoc = doc(itemCollection, productoId);
    getDoc(refDoc)
      .then((res) => {
        setSelected({id: res.id, ...res.data()});
        setLoading(false);

      })
      .catch((error) => {

      })

    }, [productoId])

    return (
        <div>
          {loading ? <Loader /> : <ItemDetail dataDetail={selected}/> }
        </div>
    )
}

export default ItemDetailContainer