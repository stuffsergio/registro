"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BotonSubmit() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    router.push("/registroExitoso");
  }

  return (
    <div className="pt-[24px] flex justify-center items-center">
      <button
        id="buttonSubmit"
        type="button"
        onClick={handleClick}
        className="w-fit px-2.5 py-1 rounded-md bg-[#360000] text-white xl:text-sm sm:text-sm md:text-md xs:text-xs hover:bg-[#360000]/80"
      >
        {isLoading ? "Cargando..." : "Submit"}
      </button>
    </div>
  );
}
