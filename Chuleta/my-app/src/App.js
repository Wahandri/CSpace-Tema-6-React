import './App.css';
import Card from './component/Card/Card';
import Header from "./component/Header/Header";
import Counter from "./component/Counter/Counter";
import Shop from './component/Tienda/Shop/Shop';
import List from './component/Tienda/List/List';

function App() {
  return (
    <div className="">
      <Header title="Chuletilla"/>
      <hr />
      <Card title="Primer titulo"/>
      <hr />
      <Shop/>
      <hr />
      <Counter />
      <hr />
    </div> 
  );
}

export default App;
