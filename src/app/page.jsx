"use client";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import Model3D from "@/app/Model3D";
import Form from "./Form";
import Footer from "./Footer";
import TarjetaUsuario from "./TarjetaUsuario";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    email: "",
  });
  // Esta función actualiza el estado de los datos del usuario
  const actualizarDatosUsuario = (nombre, email) => {
    setDatosUsuario({ nombre, email });
  };

  return (
    <div className="max-w-screen max-h-screen min-h-screen flex flex-col gap-[100px] pt-[20px] px-[20px]">
      <NavBar />
      {/* Motramos la tarjeta de usuario solo si hay datos */}
      {datosUsuario.nombre && datosUsuario.email && (
        <TarjetaUsuario usuario={datosUsuario} />
      )}
      <main className="flex flex-row justify-center items-center">
        {/* Componente de formulario */}
        <Form onDatosEnviados={actualizarDatosUsuario} />
      </main>
      <Footer />
    </div>
  );
}
