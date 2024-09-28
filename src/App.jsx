import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./Pages/HomePage/HomePage";
import { CampersPage } from "./Pages/CampersPage/CampersPage";
import { CampersItemPage } from "./Pages/CampersItemPage/CampersItemPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CampersPage />}>
          <Route path=':id' element={<CampersItemPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
