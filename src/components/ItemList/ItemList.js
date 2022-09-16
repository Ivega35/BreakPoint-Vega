import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {
 
    return (
    <div className="container-fluid">
      <div className= "row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
        {data.map((prod) => {
          return <Item key={prod.id} itemData={prod}/>;
          })}
      </div>
    </div>
  )
}

export default ItemList