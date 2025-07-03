import Link from "next/link"

export default function NavBar() {
  return (
      <ul id="navbar" 
        className="fixed top-0 text-white w-screen h-12 flex justify-around items-center 
        bg-black/50
        ">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/contact">contact</Link></li>
        <li><Link href="/about">about</Link></li>
      </ul>
  )
}