import { NavLink, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { HomePage } from "./Pages/HomePage/HomePage"
import { Campers } from "./Pages/Campers/Campers"


function App() {

  return (
    <>
    <Header />
 
  {/* <nav>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/campers" >
          Campers
        </NavLink>
      </nav> */}
  <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/catalog" element={<Campers />} />
      </Routes>
    </>
  )
}

export default App
