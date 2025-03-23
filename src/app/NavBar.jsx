"use client";
import { useState } from "react";

export default function NavBar() {
  const [usersMenu, setUsersMenu] = useState(false);
  const [serviciosMenu, setServiciosMenu] = useState(false);

  return (
    <nav className="relative h-10 text-center flex justify-center items-center rounded-xl border border-white/80 backdrop-blur-xs">
      <ul className="flex xl:space-x-40 sm:space-x-50 items-center xl:text-sm sm:from-neutral-900 text-white">
        <li
          className={`group px-2 py-4 cursor-pointer ${
            serviciosMenu ? "bg-gray-300/20 px-0 rounded-xl text-white" : ""
          }`}
          onMouseEnter={() => setServiciosMenu(true)}
          onMouseLeave={() => setServiciosMenu(false)}
          onClick={() => setServiciosMenu(!serviciosMenu)}
        >
          Servicios
          {serviciosMenu && (
            <ul className="absolute left-1/2 top-9 transform -translate-x-1/2 min-h-[10vh] w-full flex flex-row justify-evenly items-center align-top text-black bg-gray-300/20 rounded-xl border border-white/90 backdrop-blur-xl">
              <li>Diseño Web</li>
              <li>Marketing</li>
              <li>SEO</li>
            </ul>
          )}
        </li>

        <li>
          <span className="px-4 py-2 mn-h-[40px]">
            <a href="#">Logo</a>
          </span>
        </li>

        <li
          className={`users px-4 py-0.5 cursor-pointer ${
            usersMenu ? "bg-green-200/20 px-1 py-1 rounded-xl text-white" : ""
          }`}
          onMouseEnter={() => setUsersMenu(true)}
          onMouseLeave={() => setUsersMenu(false)}
          onClick={() => setUsersMenu(!usersMenu)}
        >
          Users
          {usersMenu && (
            <ul className="absolute left-1/2 top-9 transform -translate-x-1/2 min-h-[10vh] w-full users-hover:block flex flex-row justify-evenly items-center align-top text-black bg-gray-300 rounded-xl border border-white/90 backdrop-blur-xl">
              <li>Iniciar sesión</li>
              <li>Registrarse</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
