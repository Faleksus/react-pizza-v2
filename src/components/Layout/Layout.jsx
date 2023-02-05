import { Header } from 'components/Header/Header'
import { Home } from 'pages/Home'
import React from 'react'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Outlet/>
    </div>
  )
}
