import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const jsonData = await data.json();
    setProducts(jsonData?.products);
  };

  const handlePageSelect = (selectedPage) => {
    if(selectedPage !== page && selectedPage>=1 && selectedPage <= products.length / 10){
      setpage(selectedPage)
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {products.length > 0 && (
        <div className="m-5 grid grid-cols-3 mx-auto w-[90%]">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <div
                key={product.id}
                className="rounded-lg flex justify-center items-center flex-col shadow-lg cursor-pointer bg-gray-200 w-[80%] my-4"
              >
                <img
                  src={product.thumbnail}
                  className="w-[90%] h-[90%] rounded-lg"
                  alt="Image"
                ></img>
                <h3>{product.title}</h3>
              </div>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="flex gap-2 justify-center p-2 mt-4">
          <button onClick={() => handlePageSelect(page-1)} className={page > 1 ? `py-4 px-5 border border-gray-400` : "invisible"}>Previous</button>
          <span className="flex gap-2">
            {[...Array(products.length / 10)].map((_, index) => {
              return <button onClick={() => handlePageSelect(index + 1)} className={`${page===index+1 ? `bg-slate-200` : ``} py-4 px-5 border border-gray-400` } key={index}>{index + 1}</button>
            })}
          </span>
          <button onClick={() => handlePageSelect(page+1)} className={page < products.length / 10 ? `py-4 px-5 border border-gray-400` : "invisible"}>Next</button>
        </div>
      )}
    </div>
  );
}

export default App;
