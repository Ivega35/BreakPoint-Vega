import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

const productos = [
    {
    id: '1',
    title: "paleta Odea Legend",
    price: 37000,
    pictureUrl: "../Assets/palaLegend.png",
    stock:4,
    category: "palas",
    description: "Sus caras están fabricadas 100% en carbono, lo cual ofrece mayor resistencia y proporciona un toque de potencia extra. Además, su núcleo en eva soft, logra una amortiguación excepcional, evitando que las vibraciones lleguen al brazo."
},
{
    id: '2',
    title: "paleta Odea Speed 12k",
    price: 57000,
    pictureUrl: "../Assets/palaOdea.png",
    stock: '2',
    category: "palas",
    description: "Está diseñada con forma de lágrima y balance medio, mientras que las caras están confeccionadas con fibra de carbono. "
},
{
    id: '3',
    title: "paleta Siux",
    price: 22000,
    pictureUrl: "../Assets/palaSiux.png",
    stock: 0,
    category: "palas",
    description: "Estructura resistente y duradera, con marco de carbono y caras de fibra de vidrio para mayor flexibilidad."
},
{
    id: '4',
    title: "paleta Wingpadel",
    price: 67000,
    pictureUrl: "../Assets/palaWingpadel.png",
    stock: 4,
    category: "palas",
    description: "La Wingpadel Air Combat 3.0 Black Attack es un modelo de potencia, con una forma de diamante y un balance alto, ideal para pegadores."
},
{
    id: '5',
    title: "Buzo Black Crown",
    price: 11000,
    pictureUrl: "../Assets/buzoBlackcrown.png",
    stock: 5,
    category: "indumentaria",
    description: " Avanzá a tu propio ritmo y disfrutá de cada momento envuelto en la comodidad de este buzo de algodón frizado con capucha. Subí la capucha, guardá tus manos en el bolsillo frontal y desconectate del ruido exterior."
},
{
    id: '6',
    title: "Remera Black Crown",
    price: 5500,
    pictureUrl: "../Assets/remeraBlackcrown.png",
    stock: 0,
    category: "indumentaria",
    description: "Es una remera diseñada para jugadores de pádel que buscan calidad y comodidad en su ropa. Cuello en V y manga corta, confeccionada en set de poliéster y elastano."
},
{
    id: '7',
    title: "Short Black Crown",
    price: 3500,
    pictureUrl: "../Assets/shortBlackcrown.png",
    stock: 4,
    category: "indumentaria",
    description: "Short Black Crown Live, fabricado en poliéster y elastano, lo cual aporta transpirabilidad, elimina la humedad y tiene rápido secado. Además, proporciona ligereza, movilidad y mejor confort en la cancha."
}
]

export const ItemsPovider = ({children}) =>{
    const [items, setItems]= useState(productos);
    

    return(
        <ItemsContext.Provider value={[items, setItems]}>
            {children}
        </ItemsContext.Provider>
    )

}
export const getProductos = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}
export const getProductosByCategory = (categoryId) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos.filter(producto => producto.category === categoryId))
        }, 2000)
    })
}
export const getProductoById = (id) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos.find(producto => producto.id === id))
        }, 2000)
    })
}