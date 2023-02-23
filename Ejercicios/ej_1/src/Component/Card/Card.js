// import React from 'react'
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card box w-50 m-auto mt-5" >
      <img className="card-img-top " src={props.img} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.texto}</p>
        <a href={props.urlButton} className="button btn btn-primary">{props.buttonName}</a>
      </div>
    </div>
  )
}

