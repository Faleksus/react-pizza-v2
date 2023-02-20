import React, { useContext } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import { Categories } from "components/Categories/Categories";
import Pagination from "components/Pagination/Pagination";
import { SearchContext } from "App";

export const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярності",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "desc" : "asc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    // Можем заменить поиск по пицам, удаляем 28 строку и на 33 строке удаляем ${search}
    // потом коментируем с 45 по 54, и раскоментируем с 56 по 70
    fetch(
      `https://63d007b610982404378ba227.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const itemsPizza = pizzas.map((pizza) => (
    <PizzaBlock
      key={pizza.id}
      title={pizza.title}
      price={pizza.price}
      image={pizza.imageUrl}
      sizes={pizza.sizes}
      types={pizza.types}
    />
  ));

  // const itemsPizza = pizzas.filter((obj) => {
  //   if (searchValue) {
  //     return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  //   }
  //   return obj;
  // }).map((pizza) => (
  //   <PizzaBlock
  //     key={pizza.id}
  //     title={pizza.title}
  //     price={pizza.price}
  //     image={pizza.imageUrl}
  //     sizes={pizza.sizes}
  //     types={pizza.types}
  //   />
  // ));

  const skeleton = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">{isLoading ? skeleton : itemsPizza}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
