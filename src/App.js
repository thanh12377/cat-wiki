
import "./App.scss";
import Header from "./component/Header";
import Cat from "./component/Cat";
import { useEffect, useState } from "react";
import { getAllBreed, getParamsBreed } from "./apis/getApi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CatDetail from "./component/CatDetail";
import TopCat from "./component/TopCat";
import Benefits from "./component/Benefits";

function App() {
  const [allBreeds, setAllBreeds] = useState([]);
  const [mostBreeds, setMostBreeds] = useState([]);

  useEffect(() => {
    const params = "limit=4&page=0";
    getParamsBreed(params).then((res) => {
      setMostBreeds(res.data);
    });
  }, []);

  useEffect(() => {
    getAllBreed().then((res) => {
      // console.log(res.data);
      setAllBreeds(res.data);
    });
  }, []);
  const handleLogoClick = () => {
    console.log("logo clicked");
  };

  return (
    <div className="App">
      <Router>
        <Header handleLogoClick={handleLogoClick} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Cat allBreeds={allBreeds} mostBreeds={mostBreeds} />}
          ></Route>
          <Route path="/breed/:id" element={<CatDetail></CatDetail>}></Route>
          <Route path = "/top" element={<TopCat></TopCat>}></Route>
          <Route path ="/benefits" element={<Benefits></Benefits>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
