import React, {useState, useEffect} from 'react'
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const ItemList = () => {
    const [articles, setArticles]= useState([{
        "id": 1,
        "tittle": "paleta Odea Legend",
        "price": 37000,
        "pictureUrl": "../Assets/palaLegend.png",
        "stock": 1
    },
    {
        "id": 2,
        "tittle": "paleta Odea Speed 12k",
        "price": 57000,
        "pictureUrl": "../Assets/palaOdea.png",
        "stock": 2
        
    },
    {
        "id": 3,
        "tittle": "paleta Siux",
        "price": 22000,
        "pictureUrl": "../Assets/palaSiux.png",
        "stock": 4
    },
    {
        "id": 4,
        "tittle": "paleta Wingpadel Air Combat",
        "price": 67000,
        "pictureUrl": "../Assets/palaWingpadel.png",
        "stock": 6
    },
    {
        "id": 5,
        "tittle": "Buzo Black Crown",
        "price": 11000,
        "pictureUrl": "'../Assets/buzoBlackcrown.png'",
        "stock": 0
    },
    {
        "id": 6,
        "tittle": "Remera Black Crown",
        "price": 5500,
        "pictureUrl": "../Assets/remeraBlackcrown.png",
        "stock": 0
    },
    {
        "id": 7,
        "tittle": "Short Black Crown",
        "price": 3500,
        "pictureUrl": "../Assets/shortBlackcrown.png",
        "stock": 3
    }]);

   // useEffect(() => {
        //fetch('../Item/Item.js')
        //.then((response) => response.json())
        //.then((json) => setArticles(json));
    //}, []);

  return (
    <div>
      {articles.map((art) => {
        return <ItemListContainer key={art.id} data={art}/>;
      })}
    </div>

    );
};

export default ItemList;
