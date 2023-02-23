import React from 'react'
import "./List.css"

export default function List(props) {
  
  const {categoria, producto} = props;

  return (
    <div className='div'>
      <h2 className='categoria'>{categoria}</h2>
      <ul className='list-group'>{producto.map((item) => 
        <li className='list-group-item'>{item.producto}, marca {item.marca}</li>)}
      </ul>
    </div>
  )
}
