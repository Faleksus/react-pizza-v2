import Header from "components/Header/Header";
import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container"><Outlet/></div>
      </div>
    </div>
  );
};

export default MainLayout;
