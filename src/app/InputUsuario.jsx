import Image from "next/image";

export default function InputUsuario() {
  return (
    <div className="flex flex-row items-center border-1 border-[#360000]/40 rounded-[4px]">
      <Image
        className="pl-1.5"
        src="/images/usuario.png"
        alt="Correo electrónico"
        width={25}
        height={50}
        priority
      />
      <input
        type="text"
        name="nombre"
        id="input-nombre"
        className="bg-transparent rounded-[4px] font-secondary-font text-black text-xs text-left px-[10px] py-[5px] focus:outline-none"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
}
