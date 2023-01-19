import { Categories } from "components/Categories/Categories";
import { Header } from "components/Header/Header";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import "./scss/app.scss";
// import { pizzas } from "./pizza";
// import pizzas from "./pizzas.json";

export const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://63c90ba9320a0c4c953f64a0.mockapi.io/pizzas').then((response) => {
      return response.json();
    }).then((arr) => {
      setPizzas(arr);
    });
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock
                key={pizza.id}
                title={pizza.title}
                price={pizza.price}
                image={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
              />
            ))}


          </div>
        </div>
      </div>
    </div>
  );
};
