"use client";
import Image from "next/image";
import NavBar from "@/app/NavBar";
import Model3D from "@/app/Model3D";
import Form from "./Form";
import Footer from "./Footer";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen min-h-screen pt-[20px] px-[20px]">
      <NavBar />
      <main className="flex flex-row gap-8 justify-center items-center h-[calc(100vh-100px)]">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
