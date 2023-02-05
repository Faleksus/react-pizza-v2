import { Header } from "components/Header/Header";
import { Home } from "pages/Home";
import { Cart } from "pages/Cart";
import { NotFound } from "pages/NotFound";
import { Route, Routes } from "react-router";

import "./scss/app.scss";

export const App = () => {
  return (
    <div className="wrapper">
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
    </div>
  );
};
