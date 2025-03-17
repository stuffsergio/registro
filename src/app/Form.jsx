"use client";

import Image from "next/image";
import InputUsuario from "@/app/InputUsuario";
import InputCorreo from "@/app/InputCorreo";
import BotonSubmit from "@/app/BotonSubmit";
import { useState } from "react";
import useEventListener from "./useEventListener";

export default function Form() {
  function Example() {
    const [key, setKey] = useState("");
    useEventListener("keydown", (event) => {
      setKey(event.key);
    });
    return (
      <h1 className="py-[30px]">
        Última tecla presionada:
        <br /> {key}
      </h1>
    );
  }

  return (
    <form
      action=""
      className="h-fit w-fit px-[20px] py-[40px] flex flex-col justify-center rounded-xl border border-white/80 backdrop-blur-md"
    >
      <p className="flex justify-center items-center text-center font-bold">
        <Image
          className=""
          src="/spectral.jpg"
          alt="Next.js logo"
          width={25}
          height={30}
          priority
        />
      </p>
      <label className="text-left text-sm text-[#360000] pt-[20px] pb-[2px]">
        Nombre
      </label>
      <InputUsuario />
      <label className="text-left text-sm text-[#360000] pt-[20px] pb-[2px]">
        Correo electrónico
      </label>
      <InputCorreo />
      <BotonSubmit />
      <Example />
    </form>
  );
}
