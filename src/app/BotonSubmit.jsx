"use client";
import { useRouter } from "next/navigation";

export default function BotonSubmit() {
  const router = useRouter();

  function handleClick() {
    router.push("/registroExitoso");
  }

  return (
    <div className="pt-[24px] flex justify-center items-center">
      <button
        type="button"
        onClick={handleClick}
        className="w-fit px-2.5 py-1 rounded-md bg-[#360000] text-white xl:text-sm sm:text-xs hover:bg-[#360000]/80"
      >
        Submit
      </button>
    </div>
  );
}
