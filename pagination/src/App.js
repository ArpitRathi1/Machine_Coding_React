import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const jsonData = await data.json();
    setProducts(jsonData?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {products.length > 0 && (
        <div className="m-5 grid grid-cols-3 mx-auto w-[90%]">
          {products.map((product) => {
            return (
              <div key={product.id} className="flex justify-center items-center flex-col shadow-lg w-[80%] my-4">
                <img src={product.thumbnail} alt="Image"></img>
                <h3>{product.title}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
