'use client'
import { useState } from "react"
import NavBar from "@/components/NavBar"
import Logo from "@/components/Logo"
import SocialLinks from "@/components/SocialLinks"
import Card from "@/components/Card"
import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
  
})

export default function Home() {
  const [defaultColor, setDefaultColor] = useState('text-white')

  return (
    <div className='h-screen w-screen flex justify-center items-center '>
      <p className={`text-9xl cooperBt`}>
        Soophia<span className="text-2xl">.me</span>
        
      </p>
        {/* <Card /> */}
     </div>
  )
}