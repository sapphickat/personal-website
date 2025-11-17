'use client'
import Image from "next/image";
import ThemeToggle from "./ui/ThemeToggle";
import { useEffect } from "react";
import NavBar from "./ui/Navbar";
import MyLink from "./ui/MyLink";

export default function Home() {
  return (
    <div className="flex p-4 flex-col gap-8 justify-center items-center w-full h-full ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio expedita quis cum corporis nulla vel illo suscipit, veniam a voluptas maiores accusamus, non omnis minima nostrum, nobis delectus mollitia.</p>
    <p>see also <MyLink href="/not-found">not found</MyLink></p>
    </div>
  );
}
