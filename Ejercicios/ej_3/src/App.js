import Header from './Conponent/Header/Header';
import Diary from './Conponent/Diary/Diary';
import Form from './Conponent/Form/Form';
import './App.css';

function App() {
  const contacts = [
    {
      "Nombre": "Manuel",
      "Apellidos": "Garcia Cobos",
      "Ciudad": "Malaga",
      "CP": 29010,
      "Telefono": 777333333
    },
    {
      "Nombre": "Hector",
      "Apellidos": "Lobato Milan",
      "Ciudad": "Cadiz",
      "CP": 39243,
      "Telefono": 677534882,
    },
    {
      "Nombre": "Teresa",
      "Apellidos": "Ortega Oreyana",
      "Ciudad": "valencia",
      "CP": 55302,
      "Telefono": 952002298
    }
  ];
  return (
    <div className="navBar">
      <Header title="Ejercicio React: 3"/>
    </div>
  );
}

export default App;
