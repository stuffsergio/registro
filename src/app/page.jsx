"use client";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import Form from "./Form";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen min-h-screen pt-[20px] px-[20px]">
      <NavBar />
      <main className="flex flex-col gap-8 justify-center items-center h-[calc(100vh-100px)]">
        <Form />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </footer>
    </div>
  );
}
