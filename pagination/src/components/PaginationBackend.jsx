import React from 'react'
import { useEffect, useState } from "react";

const PaginationBackend = () => {
    const [products, setProducts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
  
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 -10}`);
      const jsonData = await data.json();
      setProducts(jsonData?.products);
      setTotalPage(Math.ceil(jsonData?.total / 10))
    };
  
    const handlePageSelect = (selectedPage) => {
      if (
        selectedPage !== page &&
        selectedPage >= 1 &&
        selectedPage <= totalPage
      ) {
        setpage(selectedPage);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [page]);
    
    return (
      <div>
        <div className="w-full">
          {products.length > 0 && (
            <div className="m-5 grid grid-cols-3 mx-auto w-[90%]">
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="rounded-lg flex justify-center items-center flex-col shadow-lg cursor-pointer bg-gray-200 w-[80%] my-4"
                  >
                    <img
                      src={product.thumbnail}
                      className="w-[90%] h-[90%] rounded-lg"
                      alt={product.thumbnail}
                    ></img>
                    <h3>{product.title}</h3>
                  </div>
                );
              })}
            </div>
          )}
          {products.length > 0 && (
            <div className="flex gap-2 justify-center p-2 mt-4">
              <button
                onClick={() => handlePageSelect(page - 1)}
                className={
                  page > 1 ? `py-4 px-5 border border-gray-400` : "invisible"
                }
              >
                Previous
              </button>
              <span className="flex gap-2">
                {totalPage > 0 && [...Array(totalPage)].map((_, index) => {
                  return (
                    <button
                      onClick={() => handlePageSelect(index + 1)}
                      className={`${
                        page === index + 1 ? `bg-slate-200` : ``
                      } py-4 px-5 border border-gray-400`}
                      key={index}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </span>
              <button
                onClick={() => handlePageSelect(page + 1)}
                className={
                  page < totalPage
                    ? `py-4 px-5 border border-gray-400`
                    : "invisible"
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

export default PaginationBackend
