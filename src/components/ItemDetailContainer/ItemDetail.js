
import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemDetail = (title, price, description, pictureUrl, stock) => {
  const onAdd = (cant) =>{
    if(stock !=0 ){  
    alert(`compraste ${cant} unidades del producto: ${title}`)
    }else{
        alert(`El producto: ${title} se encuentra agotado!`)
    }
}
  return (
    
    <div class="card" style="width: 18rem;">
  <img src={pictureUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{title} </p>
    <p class="card-text">{price} </p>
    <ItemCounter stock={stock} initial={1} onAdd={onAdd}/>
  </div>
</div>
  )
}

export default ItemDetail

