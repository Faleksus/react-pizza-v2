import { Categories } from "components/Categories/Categories";
import { Header } from "components/Header/Header";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import "./scss/app.scss";

export const App = () => {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Всі піцци</h2>
          <div class="content__items">
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
