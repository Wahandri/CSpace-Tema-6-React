import './App.css';
import Card from './Component/Card/Card';
import Header from './Component/Header/Header';

function App() {
  return (
    <div>
      <Header 
        title="Ejercicio React: 1"
      />
      <Card 
        title="My Card" 
        buttonName="Mi boton"
        urlButton="http://www.google.es" 
        img="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        texto="Este es un texto de prueba escrito un poquito sin pensar mucho"
      />
      
    </div>
  );
}

export default App;
