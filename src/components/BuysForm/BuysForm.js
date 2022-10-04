import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { collection, addDoc } from 'firebase/firestore';
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
    const [buyId, setBuyId]= useState()
    const {carrito, precioTotal}= useContexto();
    
    const handleOnChange = (e) =>{
        const {value, name} = e.target;
        setValues({...values, [name]: value});
        
    }
    
    
    
    const onSubmit = async (e) =>{
        e.preventDefault(); 
        const getCart=  carrito
        const fecha= new Date().toLocalString()+ "";
        
        const docRef= await addDoc(collection(db, 'Purchases'), {
            buyer: {values}, 
            items: {getCart},
            date: fecha, 
            total: precioTotal
        });
        setBuyId(docRef.id)
        setValues(initialState)
    }

  return (
    <div>
        <h1 className='text-center'>Datos del comprador</h1>
        <form onSubmit={onSubmit} className="FormBody">
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

            <button className='btn btn-primary'>Comprar</button>
        </form>
        {buyId && <MessageSuccess buyId={buyId}/> }
    </div>
  )
}

export default BuysForm;