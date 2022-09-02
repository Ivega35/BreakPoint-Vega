import React, {useState, useEffect} from 'react'
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const ItemList = () => {
    const [products, setproducts]= useState([]);

   useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then((response) => response.json())
        .then((json) => setproducts(json));
    }, []);

  return (
    <div>
      {products.map((product) => {
        return <ItemListContainer key={product.id} data={product}/>;
      })}
    </div>

    );
};

export default ItemList;
