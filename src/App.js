import { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchResult, setSearchResult] = useState();
  const [search, setSearch] = useState("");
  const fetchBeers = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=12`
    );
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    fetchBeers();
  }, [page]);

  const searchBear = async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&beer_name=${search}`
    );
    const data = await response.json();

    setSearchResult(searchResult);
  };

  return (
    <>
      <div className="fixed  w-full flex justify-evenly ">
        <h1 className="font-medium px-3 py-2 bg-white text-2xl">Beer List</h1>

        <div className="px-3 py-2 bg-white">
          <div>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={searchBear}
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-3 py-2 bg-white">
          <label for="underline_select" class="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option selected >Choose a page</option>
            <option value="1" onClick={()=>setPage(1)}>1</option>
            <option value="2" onClick={()=>setPage(2)}>2</option>
            <option value="3" onClick={()=>setPage(3)}>3</option>
            <option value="4" onClick={()=>setPage(4)}>4</option>
          </select>
        </div>
      </div>

      <ul className="grid  bg-slate-200 grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4     ">
        {
          beers.map((beer) => (
            <li key={beer.id} className="">
              <Cards beer={beer} />
            </li>
          ))
         
        }

      </ul>

      <div className="flex justify-center m-5  ">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <div
              onClick={() => setPage(page - 1)}
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setPage(1);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setPage(2);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setPage(3);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              3
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setPage(4);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setPage(5);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </div>
          </li>

          <li>
            <div
              href="#"
              onClick={() => {
                setPage(page + 1);
              }}
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
