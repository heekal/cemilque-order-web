import React from "react"
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from "./pages/dashboard.jsx"
import Order from "./pages/order.jsx"
import Note from "./pages/Note.jsx"

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path = '/customajg' element = {<Dashboard />}/>
        <Route path = '/order' element = {<Order />}/> 
      </Routes>
    </>
  )
}

export default App
