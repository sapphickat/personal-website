'use client'
import { useState } from "react"
import NavBar from "@/components/NavBar"
import Logo from "@/components/Logo"
import SocialLinks from "@/components/SocialLinks"

export default function Home() {
  const [defaultColor, setDefaultColor] = useState('text-white')

  return (
    // <div className='relative overflow-hidden h-screen w-screen'>

      <div className='flex h-screen w-screen flex-col  justify-around items-center text-white'>
        <div className='peer'>
          <Logo setDefaultColor={setDefaultColor} />
        </div>
        <SocialLinks defaultColor={defaultColor}/>
      </div>
    // </div>
  )
}