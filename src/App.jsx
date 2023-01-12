import { Categories } from "components/Categories/Categories";
import { Header } from "components/Header/Header";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import "./scss/app.scss";
// import { pizzas } from "./pizza";
import pizzas from "./pizzas.json";

export const App = () => {

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
