import Image from "next/image";

export default function RegistroExitoso() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Registro exitoso</h1>
      <p className="text-sm">Gracias por registrarte</p>
      <Image
        src="/emailSend.webp"
        alt="Icono animado"
        width={50}
        height={50}
        priority
        unoptimized // Necesario para soportar animaciones en WebP
      />
    </div>
  );
}
