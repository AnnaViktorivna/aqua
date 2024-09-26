import {  Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { HomePage } from "./Pages/HomePage/HomePage"
import { CampersPage } from "./Pages/CampersPage/CampersPage"


function App() {

  return (
    <>
    <Header />
  <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/catalog" element={<CampersPage />} />
      </Routes>
    </>
  )
}

export default App
