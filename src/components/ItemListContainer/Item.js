import React from 'react'
import "./ItemListContainer.css"
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
const Item = ({nombre, precio, img, stock}) => {
    
    const onAdd = (cant) =>{
        if(stock !=0 ){  
        alert(`compraste ${cant} unidades del producto: ${nombre}`)
        }else{
            alert(`El producto: ${nombre} se encuentra agotado!`)
        }
    }

    const showDetails =()=>{
        <ItemDetailContainer/>
    }
    return (            
    


        <div className="itemCard"> 
            <img src={img} className="card-img-top" alt="card"></img>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <p className='card-text'>Stock: {stock}</p>
                <ItemCounter initial={1} stock={stock} onAdd={onAdd}/>
                <button type="button" class="btn btn-info" onClick= {showDetails} >Ver más...</button>
            </div>
        </div>
       
    )
}


export default Item
