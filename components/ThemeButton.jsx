'use client'
import { FaMoon } from "react-icons/fa6"
import { FiSun, FiMoon } from "react-icons/fi";

import "@theme-toggles/react/css/InnerMoon.css"
import { InnerMoon } from "@theme-toggles/react"
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [windUp, setWindUp] = useState(null)
  const [rewind, setRewind] = useState(null)

  useEffect(() => {

    setWindUp(new Audio("sound/wind-up-2.mp3"))
    setRewind(new Audio("sound/wind-up-3.mp3"))

    
  }, [])
  
  
  
  const toggleDark = () => {
    
    windUp.volume = 0.6
    rewind.volume = 0.6
    if (document.body.classList.contains('dark')) {

      rewind.currentTime = 0;
      rewind.play()
    } else {
      windUp.currentTime = 0;
      windUp.play()
    }
    
    document.body.classList.toggle('dark')
  }



  return (
    <div className="text-3xl">

      <InnerMoon duration={800}  onClickCapture={toggleDark} />

    </div>
  )
}