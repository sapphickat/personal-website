import { FaMoon } from "react-icons/fa6"
import { FiSun, FiMoon } from "react-icons/fi";

import "@theme-toggles/react/css/InnerMoon.css"
import { InnerMoon } from "@theme-toggles/react"

export default function ThemeButton() {

  const windUp2 = new Audio("sound/wind-up-2.mp3")
  const windUp3= new Audio("sound/wind-up-3.mp3")

  windUp2.volume = 0.9
  windUp3.volume = 0.9

  const toggleDark = () => {
    
    if (document.body.classList.contains('dark')) {

      windUp3.currentTime = 0;
      windUp3.play()
    } else {
      windUp2.currentTime = 0;
      windUp2.play()
    }
    
    document.body.classList.toggle('dark')
  }



  return (
    <div className="text-4xl">

      <InnerMoon duration={800}  onClickCapture={toggleDark} />

    </div>
  )
}