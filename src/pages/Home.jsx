import React from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import { Categories } from "components/Categories/Categories";

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63d007b610982404378ba227.mockapi.io/pizzas")
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => (
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
    </>
  );
};
