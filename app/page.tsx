'use client'
import Image from "next/image";
import ThemeToggle from "./ui/ThemeToggle";
import { useEffect } from "react";

export default function Home() {
    const themeToggle = () => {
        document.documentElement.classList.toggle(
            "dark",
            localStorage.theme === "dark" ||
                (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
    }

    useEffect(() => {
        themeToggle()
    }, [])



  return (
    <div className="flex justify-center items-center w-screen h-screen dark:text-white  dark:bg-neutral-950 bg-neutral-50">
      <ThemeToggle />
    </div>
  );
}
