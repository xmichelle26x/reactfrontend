import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const endpoint = "http://localhost:8000/api/v1";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    const productList = response.data;
    setProducts(productList);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/products/${id}`);
    getProducts();
  };

  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-16 py-10">
        <h1 className="text-3xl font-bold">PRODUCTS</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-3 py-2"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-3 py-4"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-3 py-4"
                      >
                        Descripcion
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Precio
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Cantidad
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2 break-words">
                    {products.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black whitespace-pre-wrap"
                      >
                        <td className="px-6 py-1 whitespace-pre-line text-sm font-small text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-6 py-1">
                          {data.nombre}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-6 py-1 whitespace-pre-wrap break-words">
                          {data.descripcion}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-6 py-1">
                          {data.precio}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold px-6 py-1">
                          {data.cantidad}
                        </td>
                        <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-4 space-x-2">
                          <Link
                            to={`/update/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(data.id)}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
