import { Categories } from "components/Categories/Categories";
import { Header } from "components/Header/Header";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import "./scss/app.scss";

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
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
            <PizzaBlock
              title='Чізбургер-піцца'
              price='250'
              image='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
