/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef } from "react";
import axios from "axios";
import Skeleton from "../components/PizzaBlock/Skeleton";
import qs from "qs";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import { filters, Sort } from "components/Sort/Sort";
import { useEffect } from "react";
import { useState } from "react";
import { Categories } from "components/Categories/Categories";
import Pagination from "components/Pagination/Pagination";
import { SearchContext } from "App";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const fetchPizzas = () => {
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
  };
  //Если изменили параметры и был первый рендер, тогда выполняем это действие
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        currentPage,
        categoryId,
        sortProperty: sort.sortProperty,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage, navigate]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в редаксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1));

      const sort = filters.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const itemsPizza = pizzas.map((pizza) => (
    <PizzaBlock
      key={pizza.id}
      id={pizza.id}
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

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">{isLoading ? skeleton : itemsPizza}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};


export default Home;