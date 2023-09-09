import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import { MyContext } from "./Context/MyContext";
import { useState } from "react";
import SearchList from "./SearchList";
import Pagination from "./compo/Pagination";
import Navbar from "./compo/Navbar";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchResult, setSearchResult] = useState();
  const [page, setPage] = useState(1);

  const fetchBeers = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
    );
    const data = await response.json();
    setBeers(data);
  };
  fetchBeers()
  return (
    <>
      <MyContext.Provider value={{beers , setPage , page , searchResult, setSearchResult}}>
        <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchList />} />
          </Routes>
          <Pagination/>
        </BrowserRouter>

      </MyContext.Provider>
    </>
  );
}

export default App;
