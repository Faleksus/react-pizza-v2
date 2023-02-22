import React, { useContext } from "react";
import axios from "axios";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "components/PizzaBlock/PizzaBlock";
import { Sort } from "components/Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import { Categories } from "components/Categories/Categories";
import Pagination from "components/Pagination/Pagination";
import { SearchContext } from "App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "redux/slices/filterSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes("-") ? "desc" : "asc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    // Можем заменить поиск по пицам, удаляем 34 строку и на 39 строке удаляем ${search}
    // потом коментируем с 60 по 69, и раскоментируем с 71 по 85
    // fetch(
    //   `https://63d007b610982404378ba227.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((arr) => {
    //     setPizzas(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://63d007b610982404378ba227.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

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
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">{isLoading ? skeleton : itemsPizza}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
