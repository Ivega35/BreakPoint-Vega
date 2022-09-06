import { Fragment, useState, useEffect} from 'react'
import products from "../json/products.json"
import ItemDetail from"./ItemDetail.js"

const ItemDetailContainer = () => {
    const [details, setDetails]= useState([]);
    
    const getItem = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (products);
            }, 2000)
        }
        )}
    
    useEffect(() => {
        
        getItem().then((products) => {
            setDetails(products);
            console.log(products);
        })
    }, []);

  return (
    <Fragment>
        <ItemDetail dataDetail={details} />
    </Fragment>   
  )
}

export default ItemDetailContainer
