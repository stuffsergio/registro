import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row gap-1 items-center justify-center">
      <Image
        aria-hidden
        src="/hombre-con-smartphone.png"
        alt="Hombre con smartphone"
        width={20}
        height={20}
      />
      Una iniciativa de
      <a
        href="https://www.instagram.com/stuffsergio/"
        className="hover:shadow-2xl hover:shadow-gray-800"
      >
        @stuffsergio
      </a>
    </footer>
  );
}
