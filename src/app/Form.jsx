"use client";

import Image from "next/image";
import Input from "@/app/Input";
import BotonSubmit from "@/app/BotonSubmit";
import { useState } from "react";

export default function Form() {
  return (
    <form
      action=""
      className="h-[calc(50vh)] w-fit flex flex-col justify-center rounded-xl border border-white/20 p-4 backdrop-blur-md"
    >
      <p className="flex justify-center items-center text-center font-bold">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={50}
          height={76}
          priority
        />
      </p>
      <label className="text-left text-sm pt-[20px] pb-[2px]">Nombre</label>
      <Input />
      <label className="text-left text-sm pt-[20px] pb-[2px]">
        Correo electrónico
      </label>
      <Input />
      <BotonSubmit />
    </form>
  );
}
