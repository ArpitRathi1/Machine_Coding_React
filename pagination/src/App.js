import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])

  const fetchData = async() => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const jsonData = await data.json()
    console.log(jsonData)
    setProducts(jsonData?.products)
    console.log(products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
