import React from 'react'

const Item = ({nombre, precio, img}) => {


    return (            
    


            <div className="itemCard col"> 
                
                <img src={img} className="card-img-top" alt="card"></img>
                
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">  Precio: ${precio}</p>
                </div>
            </div>
       
    )
}


export default Item
