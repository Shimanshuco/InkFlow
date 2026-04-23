"use client"
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user);
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen mt-5 sm:mt-6 bg-black">

      <Header />
      <Hero />

      {/* pushes footer down */}
      <div className="flex-grow" />

      <Footer />

    </div>


  );
}
