import { Fragment, useState, useEffect} from "react";
import { getProductos, getProductosByCategory } from "../../asyncmock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader'
	

	

const ItemListContainer = () => {
		
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(false);
	const {categoryId} = useParams();
	

	useEffect(() => {
		setLoading(true)

	    if (!categoryId) {
	        getProductos().then(productos =>{
				setProductos(productos)
				setLoading(false)
			})
		}else {
			getProductosByCategory(categoryId).then(productos =>{
				setProductos(productos)
				setLoading(false)
			})
	    }
	}, [categoryId])

	return(
	<div >
		{loading ? <Loader/> : <ItemList data={productos}/>}

	</div>
)
}
	

export default ItemListContainer;