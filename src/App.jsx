import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  const counter = (num1) => {
    return num1;
  };

  return (
    <div className="App">
      <nav>
        <div>
          <img src="./logo.png" alt="LOGO DNC"></img>
          <ul>
            <li className="nav__item">Food</li>
            <li className="nav__item">Variedades</li>
            <li className="nav__item">Lanches</li>
            <li className="nav__item">Pizzas</li>
            <li className="nav__item">Doces</li>
            <li className="nav__item">Promoções</li>
          </ul>
        </div>
        <div>
          <span className="nav__item">Minhas Compras</span>
          <img src="./cart.png"></img>
        </div>
      </nav>
      <main>
        <div className="grid">
          <Card image="./Burguer.png" name={"X-Burguer"}></Card>
          <Card image="./Acai.png" name={"Açai com mix de frutas"}></Card>
          <Card image="./Frango.png" name={"Frango"}></Card>
          <Card image="./Pastel.png" name={"Pastel"}></Card>
          <Card image="./Pizza.png" name={"Pizza"}></Card>
          <Card image="./Biscoitos.png" name={"Biscoitos"}></Card>
        </div>
      </main>
      <h1>Teste</h1>
      <img src="./Biscoitos.png"></img>
    </div>
  );
}

export default App;
