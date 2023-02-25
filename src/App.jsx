import Header from "components/Header/Header";
import Home from "pages/Home";
import Cart from "pages/Cart";
import { NotFound } from "pages/NotFound";
import { Route, Routes } from "react-router";

import "./scss/app.scss";
import React, { useState } from "react";

export const SearchContext = React.createContext();

export const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
