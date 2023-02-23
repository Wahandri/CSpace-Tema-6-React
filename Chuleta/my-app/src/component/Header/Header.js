import React from 'react'
import "./Header.css";
import "./logotipo.png";

export default function Header(props) {
  return (
    <div className='header'>
        <img className='img' src="logotipo.png" alt='' />
        <h1 className=''>{props.title}</h1>
    </div>
  )
}
