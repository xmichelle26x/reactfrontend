import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = () => {
  const endpoint = "http://localhost:8000/api/v1/products";

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const data = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    cantidad: cantidad,
  };

  const update = async (e) => {
    e.preventDefault();
    axios.put(`${endpoint}${id}`, data).then(navigate("/"));
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}/${id}`);
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
      setPrecio(response.data.precio);
      setCantidad(response.data.cantidad);
    };
    getProductById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Actualizar producto</h2>
      <form className="w-[40%] h-full flex flex-col mt-2" onSubmit={update}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-2 mt-4"
          type="text"
          placeholder="Nombre del producto"
        />
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-2 mt-4"
          type="text"
          placeholder="Descripcion del producto"
        />
        <input
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-2 mt-4"
          type="number"
          placeholder="Precio del producto"
        />
        <input
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-2 pl-2 mt-4"
          type="text"
          placeholder="Cantidad del producto"
        />
         <div className="flex justify-around items-center py-2 space-x-10">
      <button
        className="bg-cyan-800 hover:bg-cyan-600 outline-none font-bold border text-white border-zinc-400 py-2 pl-2 mt-4 w-[100%]"
        type="submit"
        onClick={update}
      >
        Actualizar producto
      </button>
      <Link
        className="bg-cyan-800 hover:bg-cyan-600 outline-none font-bold border text-white border-zinc-400 py-2 pl-2 mt-4  w-[100%]"
        type="submit"
        to={`/`}
      >
        Cancelar
      </Link>
       
      </div>
    </form>
  </div>
  );
};

export default Update;
