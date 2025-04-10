"use client";
import { useState } from "react";

export default function NavBar() {
  const [usersMenu, setUsersMenu] = useState(false);
  const [serviciosMenu, setServiciosMenu] = useState(false);

  return (
    <nav className="relative h-10 text-center flex justify-center items-center rounded-xl border border-white/80 backdrop-blur-xs">
      <ul className="flex xl:space-x-40 sm:space-x-30 items-center xl:text-[14px] md:text-xs xs:text-xs text-white">
        <li
          className={`group px-2 py-5 cursor-pointer ${
            serviciosMenu
              ? "bg-transparent px-0 rounded-xl text-white transition-all"
              : ""
          }`}
          onMouseEnter={() => setServiciosMenu(true)}
          onMouseLeave={() => setServiciosMenu(false)}
          onClick={() => setServiciosMenu(!serviciosMenu)}
        >
          Servicios
          {serviciosMenu && (
            <ul className="absolute left-1/2 top-11 transform -translate-x-1/2 min-h-[10vh] w-full flex flex-row justify-evenly items-center align-top text-black rounded-xl border border-white/90">
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
          className={`users px-4 py-5 cursor-pointer ${
            usersMenu
              ? "bg-blue-400/60 px-0 rounded-[18px] text-white transition-all"
              : ""
          }`}
          onMouseEnter={() => setUsersMenu(true)}
          onMouseLeave={() => setUsersMenu(false)}
          onClick={() => setUsersMenu(!usersMenu)}
        >
          Users
          {usersMenu && (
            <ul className="absolute left-1/2 top-11 transform -translate-x-1/2 min-h-[10vh] w-full flex flex-row justify-evenly items-center align-top text-black rounded-xl border border-white/90">
              <li>Iniciar sesión</li>
              <li>Registrarse</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
