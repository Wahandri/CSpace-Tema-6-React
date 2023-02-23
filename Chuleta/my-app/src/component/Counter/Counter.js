import {useState} from 'react';
import "./Counter.css";

export default function Counter() {

  const [count, setCount] = useState(0);

  const myClick = function (e) {
    setCount(count + 1)
  };
  // const myDelete = function (e) {
  //   setCount(count - 1);
  // };

  return (
    <div>
        <p>Has hecho Click {count} veces </p>
        <button onClick={myClick} className='btn btn-primary'>Push</button>
        <button onClick={() => setCount(count - 1)} className='btn btn-danger'>delete</button>
    </div>
  )
}
