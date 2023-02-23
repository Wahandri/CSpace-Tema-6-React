import React from 'react'
import "./Card.css";

export default function Card(props) {
  return (
    <div>
        <div className='box'>
          <div className='header'>
            286x180
          </div>
          <div className='body'>
            <h4>{props.title}</h4>
            <p>Somo quick example text to build on the card title and make up the bulk of the card's contend</p>
            <button className='button'>Go somewhere</button>
          </div>
        </div>
    </div>
  )
}

Card.defaultProps = {
  title: "Sin titulo",
}
