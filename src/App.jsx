import { NavLink, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { CampersPage } from "./Pages/CampersPage/CampersPage";
import { CampersItemPage } from "./Pages/CampersItemPage/CampersItemPage";
import { Features } from "./components/Catalog/Campers/Details/Features";
import Review from "./components/Catalog/Campers/Details/Review";

function App() {
  return (
    <>
      <Header />
      {/* <nav>
        <NavLink to='/'>Головна</NavLink>
        <NavLink to='/catalog'>Каталог</NavLink>
        <NavLink to='/catalog/id'>Кампер</NavLink>
      </nav> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CampersPage />} />
        <Route path='/catalog/:id' element={<CampersItemPage />}>
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Review />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
