import Image from "next/image";
import VideoPlayer from "@/app/VideoPlayer";

export default function RegistroExitoso() {
  return (
    <div className="flex flex-row items-center justify-evenly h-screen">
      <VideoPlayer />
      <section className="flex flex-col items-center justify-center gap-5">
        <strong className="text-2xl">Registro exitoso</strong>
        <p className="text-sm">Gracias por registrarte</p>
        <Image
          src="/emailSend.webp"
          alt="Icono animado"
          width={50}
          height={50}
          priority
          unoptimized // Necesario para soportar animaciones en WebP
        />
      </section>
    </div>
  );
}
