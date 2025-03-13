"use client";
import { useState } from "react";

export default function NavBar() {
  const [usersMenu, setUsersMenu] = useState(false);

  return (
    <nav className="relative h-10 text-center flex justify-center items-center rounded-xl border border-white/20 backdrop-blur-md">
      <ul className="flex space-x-20 items-center text-xs text-white">
        <li className="relative group">
          <span className="px-4 py-2 mn-h-[40px] cursor-pointer">
            Servicios
          </span>
          <ul className="absolute left-0 mt-2 hidden w-40 bg-white text-black shadow-lg group-hover:block">
            <li className="px-4 py-2 hover:bg-gray-200">Diseño Web</li>
            <li className="px-4 py-2 hover:bg-gray-200">Marketing</li>
            <li className="px-4 py-2 hover:bg-gray-200">SEO</li>
          </ul>
        </li>

        <li>
          <span className="px-4 py-2 mn-h-[40px]">
            <a href="#">Logo</a>
          </span>
        </li>

        <li
          onMouseEnter={() => setUsersMenu(true)}
          onMouseLeave={() => setUsersMenu(false)}
          onClick={() => setUsersMenu(!usersMenu)}
          className={`users px-4 py-2 cursor-pointer ${
            usersMenu ? "bg-gray-900/70 px-3 py-1 rounded-md text-white" : ""
          }`}
        >
          Users
          {usersMenu && (
            <ul className="absolute left-1/2 top-11 transform -translate-x-1/2 min-h-[10vh] w-full users-hover:block flex flex-row justify-center items-center align-top text-black bg-gray-300 rounded-xl border border-white/20 backdrop-blur-xl">
              <li>Iniciar sesión</li>
              <li>Registrarse</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
