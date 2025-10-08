// import { redirect } from "next/navigation";


// export default function RootPage() {
//   redirect('/home')
// }

'use client'
import { useState } from "react"
import NavBar from "@/components/NavBar"
import ThemeButton from "@/components/ThemeButton"
import Logo from "@/components/Logo"
import SocialLinks from "@/components/SocialLinks"
import Card from "@/components/Card"


export default function Home() {
  const [defaultColor, setDefaultColor] = useState('text-white')

  return (
    <div id="home" className=' max-w-[1500px] h-screen w-screen '>

      <div className="w-full  h-full flex justify-center items-center  rounded-b-4xl shadow-lg    dark:shadow-neutral-950">
        <p className={`text-8xl cooperBt -mt-12 `}>
          Soophia<span className="text-2xl">.me</span>
        </p>
      </div>
      {/* <NavBar /> */}
        {/* <Card /> */}
      <div className=" -mt-20   h-[1000px] shadow-lg border-t-0  rounded-b-4xl flex justify-center  dark:shadow-neutral-950">
        <h1 className="pt-24" id="about" ></h1>
        <div className="flex justify-center items-center">
          <h1 className="pt-24"  >about</h1>
        </div>
      </div>
      <div className=" -mt-12  h-[1000px] shadow-lg border-t-0  rounded-b-4xl flex justify-center  dark:shadow-neutral-950">
        <h1 className="pt-24" id="projects" >Projects</h1>
      </div>
      <div className=" -mt-12  h-[1000px] shadow-lg border-t-0  rounded-b-4xl flex justify-center  dark:shadow-neutral-950">
        <h1 className="pt-24" id="blog" >Blog</h1>
      </div>
      <div className=" -mt-12  h-[1000px] shadow-lg border-t-0  rounded-b-4xl flex justify-center  dark:shadow-neutral-950">
        <h1 className="pt-24" id="contact">Contact</h1>
      </div>
     </div>
  )
}