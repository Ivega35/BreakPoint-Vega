import { useState, useEffect} from "react";
import { getProductos, getProductosByCategory} from "../../Asyncmock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader'
	

	

const ItemListContainer = () => {
		
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const {categoryId} = useParams();
	

	useEffect(() => {
		setLoading(true)

	    if (!categoryId) {
	        getProductos().then(items =>{
				setItems(items)
				setLoading(false)
			})
		}else {
			getProductosByCategory(categoryId).then(items =>{
				setItems(items)
				setLoading(false)
			})
	    }
	}, [categoryId])

	return(
	<div >
		{loading ? <Loader/> : <ItemList data={items}/>}

	</div>
)
}
	

export default ItemListContainer;