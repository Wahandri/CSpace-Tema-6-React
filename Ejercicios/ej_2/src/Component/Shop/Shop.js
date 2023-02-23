import React from 'react'
import List from '../List/List.js';

export default function Shop() {
  const shoppingList = {
    electronicos: [
        {id: 11, producto: "Tablet", marca: "Samsung", precio: 249},
        {id: 12, producto: "Tv", marca: "LG", precio: 649},
        {id: 13, producto: "Plancha", marca: "Planchun", precio: 49},
    ],
    alimentacion: [
        {id: 14, producto: "Galletas", marca: "Oreo", precio: 1.45},
        {id: 15, producto: "Tomate Frito", marca: "Orlando", precio: 1.10},
        {id: 11, producto: "Cereales", marca: "Frostiss", precio: 2.49},

    ],

  };
  
  
  
    return (
    <div className=''>
       <List categoria="Electronicos" producto={shoppingList.electronicos}/>
       <List categoria="Alimentacion" producto={shoppingList.alimentacion}/>
    </div>
  )
}
