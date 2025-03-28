import "./globals.css";
import Image from "next/image";
import Home from "./page";

export const metadata = {
  title: "NewTimeless",
  description:
    "¡Entra para enterarte de las últimas noticias de tecnología, emprendimiento y actualidad!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="h-screen max-w-screen bg-[url('/adamantiums.webp')] bg-cover bg-center priority">
          {children}
        </div>
      </body>
    </html>
  );
}
