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
        target="_blank"
        className="hover:[text-shadow:_0px_0px_10px_#fff]"
      >
        @stuffsergio
      </a>
    </footer>
  );
}
