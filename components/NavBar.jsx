'use client'
import Link from "next/link"
import { EB_Garamond } from "next/font/google"
import { useEffect, useState } from "react"

          

const garamond = EB_Garamond({
  subsets: ['latin']
})

export default function NavBar() {
  const [click, setClick] = useState(null)
  useEffect(() => {
    setClick(new Audio("/sound/click.mp3"))
  }, [])
  
  const handleClick = (e) => {


    click.volume = 0.5
    click.currentTime = 0;
    click.play()
  }


  return (
    <nav className={` text-2xl ${garamond.className} flex gap-4`}>
      {[
        ["Home", "#home"],
        ["About", "#about"],
        ["Projects", "#projects"],
        ["Blog", "#blog"],
        ["Contact", "#contact"],
      ].map(([title, link]) => {
        return (
          <div key={title}>
            <a onClick={handleClick}  className="transition-all hover: border-b pb-1 hover:border-b-4 active:pb-0 active:border-b" href={link}>{title}</a>
          </div>
        )
      })
      }
      
    </nav>
  )
}