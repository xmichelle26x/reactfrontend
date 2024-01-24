import React from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black flex items-center px-10 py-2 justify-between">
      <Link to={"/"} className="text-cyan-800 text-3xl font-semibold">CRUD</Link>
      <Link to={"/create"} className="w-48 h-10 text-white border-2 border-white bg-cyan-800 hover:bg-cyan-600 flex justify-center items-center">
        Añadir producto
      </Link>
    </div>
  );
};

export default Navbar;
