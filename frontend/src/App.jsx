import React from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/villager/VilagerLogin"
import Register from "./pages/villager/VillagerRegister"

import Dashboard from "./pages/villager/Dashboard"
import AddSpring from "./pages/villager/AddSpring"
import SpringDetail from "./pages/villager/SpringDetail"
import AddWeeklyData from "./pages/villager/AddWeeklyData"
import EditSpring from "./pages/villager/EditSpring"

import VillagerLogin from "./pages/villager/VilagerLogin"

import Navbar from "./components/Navbar"
import PrivateRoute from "./utils/PrivateRoute"

function Layout(){

 const location = useLocation()

 const hideNavbar =
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname === "/register" ||
  location.pathname === "/login/villager" ||
  location.pathname === "/login/ngo" ||
  location.pathname === "/login/officer" ||
  location.pathname === "/login/admin"

 return(
  <>
   {!hideNavbar && <Navbar/>}

   <Routes>

    {/* Landing */}
    <Route path="/" element={<Landing/>}/>

    {/* Common Auth */}
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    {/* Role Based Login */}
    <Route path="/login/villager" element={<VillagerLogin/>}/>

    {/* Dashboard */}
    <Route path="/dashboard" element={
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    }/>

    {/* Spring CRUD */}
    <Route path="/add-spring" element={
      <PrivateRoute>
        <AddSpring/>
      </PrivateRoute>
    }/>

    <Route path="/spring/:id" element={
      <PrivateRoute>
        <SpringDetail/>
      </PrivateRoute>
    }/>

    <Route path="/add-data/:id" element={
      <PrivateRoute>
        <AddWeeklyData/>
      </PrivateRoute>
    }/>

    <Route path="/edit-spring/:id" element={
      <PrivateRoute>
        <EditSpring/>
      </PrivateRoute>
    }/>

   </Routes>
  </>
 )
}

function App(){

 return(
  <BrowserRouter>
   <Layout/>
  </BrowserRouter>
 )

}

export default App