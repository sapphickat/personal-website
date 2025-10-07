'use client'
import { useState } from "react"
import NavBar from "@/components/NavBar"
import Logo from "@/components/Logo"
import SocialLinks from "@/components/SocialLinks"
import Card from "@/components/Card"
import { EB_Garamond } from "next/font/google"
import ThemeButton from "@/components/ThemeButton"

const garamond = EB_Garamond({
  subsets: ['latin']
})

export default function Home() {
  const [defaultColor, setDefaultColor] = useState('text-white')

  return (
    <div className=' max-w-[1500px] h-screen w-screen flex justify-center items-center relative '>
      <div className="absolute top-2 right-2">
        <ThemeButton />
      </div>
      <p className={`text-8xl cooperBt`}>
        Soophia<span className="text-2xl">.me</span>
      </p>
      {/* <NavBar /> */}
        {/* <Card /> */}
     </div>
  )
}