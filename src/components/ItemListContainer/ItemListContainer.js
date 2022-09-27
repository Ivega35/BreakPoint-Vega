import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader'
import {collection, query, getDocs, where} from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";

	

const ItemListContainer = () => {
		
	const [itemsData, setItemsData]= useState([])
	const [loading, setLoading] = useState(false);
	const {categoryId} = useParams();
	
	const getItems = async() =>{
		const q = query(collection(db, "paddle"));
		const docs= [];
		const querySnapshot= await getDocs(q);
		querySnapshot.forEach((doc) =>{
			docs.push({...doc.data(), id: doc.id})
		})
		setItemsData(docs);
		setLoading(false);
	};
	const getItemsByCategory = async() =>{
		const q = query(collection(db, "paddle"), where('category', '==', `${categoryId}`));
		const docs= [];
		const querySnapshot= await getDocs(q);
		querySnapshot.forEach((doc) =>{
			docs.push({...doc.data(), id: doc.id})
		})
		setItemsData(docs);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true)
		if(!categoryId){
			getItems();
		}else{
			getItemsByCategory();
		}
		
		
	}, [categoryId])
	return(
	<div >
		{loading ? <Loader/> : <ItemList data={itemsData}/>}

	</div>
)
}
	

export default ItemListContainer;