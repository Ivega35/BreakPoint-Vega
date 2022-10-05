import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useContexto } from "../Context/Context";
import MessageSuccess from '../MessageSuccess/MessageSuccess';
import "./BuysForm.css"




const initialState={
    name:'', 
    phone:'', 
    email:''
}
const BuysForm = () => {
    const [values, setValues]= useState(initialState);
    const [buyId, setBuyId]= useState('')
    const {carrito,limpiarCarrito , precioTotal}= useContexto();
    
    const handleOnChange = (e) =>{
        const {value, name} = e.target;
        setValues({...values, [name]: value});
        
    }
    
    
    
    const onSubmit = async (e) =>{
        e.preventDefault(); 
        const docRef= await addDoc(collection(db, 'Purchases'), {
            buyer: {values}, 
            items: carrito,
            total: precioTotal
        });
        setBuyId(docRef.id)
        setValues(initialState)
        limpiarCarrito();
    }

  return (
    <div>
        <h1 className='text-center my-3'>Datos del comprador</h1>
        <form onSubmit={onSubmit} >
           <div className="FormBody">
            <TextField 
                placeholder='Nombre y apellido' 
                name="name" 
                value={values.name}
                onChange={handleOnChange}
                style={{ margin: 10, width: 400 }}/>
                
            <TextField 
                placeholder='Telefono' 
                style={{ margin: 10, width: 400 }}
                name="phone" 
                value={values.phone}
                onChange={handleOnChange}/>
            <TextField 
                placeholder='E-mail' 
                style={{ margin: 10, width: 400 }}
                name="email" 
                value={values.email}
                onChange={handleOnChange}/>
            
            </div>
            <div className='btn-section'>
            <button className='btn btn-primary my-3 fs-4'>Comprar</button>
            </div>
            {buyId && <MessageSuccess compraID={buyId}/> }
        </form>
        
    </div>
  )
}

export default BuysForm;