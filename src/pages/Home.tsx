/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import qs from "qs";

import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import { filters, Sort } from "../components/Sort/Sort";
import { Categories } from "../components/Categories/Categories";
import Pagination from "../components/Pagination/Pagination";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzasSlice";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "desc" : "asc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId === 0 ? "" : `category=${categoryId}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      //@ts-ignore
      fetchPizzas({ category, sortBy, order, search, currentPage })
    );
  };

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
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const itemsPizza = items.map((pizza: any) => (
    <Link key={pizza.id} to={`/pizza/${pizza.id}`}>
      <PizzaBlock
        id={pizza.id}
        title={pizza.title}
        price={pizza.price}
        image={pizza.imageUrl}
        sizes={pizza.sizes}
        types={pizza.types}
        rating={0}
      />
    </Link>
  ));

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
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Помилка завантаження</h2>
          <p>На жаль, не вдалося завантажити сторінку. Спробуйте пізніше...</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeleton : itemsPizza}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
