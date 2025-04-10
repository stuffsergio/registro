"use client";

import Image from "next/image";
import InputUsuario from "@/app/InputUsuario";
import InputCorreo from "@/app/InputCorreo";
import BotonSubmit from "@/app/BotonSubmit";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import useEventListener from "./useEventListener";

export default function Form({ onDatosEnviados }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    // 1. Registro en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      nombre,
      email,
      password,
    });

    if (authError) {
      setMessage(`Error de registro: ${authError.message}`);
      return;
    }

    const userId = authData.user?.id;

    // 2. Inserta datos adicionales en la tabla "users"
    if (userId) {
      // 2.1 Verifica si ya hay un usuario en la tabla "users"
      const { data: existingUsers, error: queryError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email);

      if (queryError) {
        setMessage(`Error verificando email: ${queryError.message}`);
        return;
      }

      if (existingUsers.length > 0) {
        setMessage("Este correo ya está registrado.");
        return;
      }

      // 2.2 Inserta datos adicionales
      const { error: insertError } = await supabase
        .from("users")
        .insert([{ id: userId, nombre, email }]);

      if (insertError) {
        setMessage(
          `Usuario creado, pero hubo un error guardando datos: ${insertError.message}`
        );
      } else {
        setMessage("Usuario registrado correctamente.");
      }
    }

    // Limpia los campos
    setNombre("");
    setEmail("");
    setPassword("");
    // Enviamos los datos al componente padre
    onDatosEnviados(nombre, email);
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="h-fit w-fit px-[30px] pt-[20px] pb-[10px] flex flex-col justify-center rounded-xl border border-white/80 backdrop-blur-md"
        id="loginForm"
      >
        <p className="flex justify-center items-center text-center font-bold">
          <Image
            className=""
            src="/hombre-con-smartphone.png"
            alt="Next.js logo"
            width={25}
            height={25}
            priority
          />
        </p>
        <label className="text-left text-sm text-[#360000] pt-[20px] pb-[2px]">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-transparent rounded-[4px] border-[1px] border-[#360000] font-secondary-font text-black text-xs text-left px-[10px] py-[5px] focus:outline-none"
          required
        />
        <label className="text-left text-sm text-[#360000] pt-[20px] pb-[2px]">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent rounded-[4px] border-[1px] border-[#360000] font-secondary-font text-black text-xs text-left px-[10px] py-[5px] focus:outline-none"
          required
        />
        <label className="text-left text-sm text-[#360000] pt-[20px] pb-[2px]">
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          className="bg-transparent rounded-[4px] border-[1px] border-[#360000] text-black text-xs text-left px-[10px] py-[5px] focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-center align-items mt-6 text-center">
          <button
            type="submit"
            className="w-fit px-2.5 py-1 flex justify-center align-items rounded-md bg-[#360000] text-white xl:text-sm sm:text-sm md:text-md xs:text-xs hover:bg-[#360000]/80"
          >
            Registrar
          </button>
        </div>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
