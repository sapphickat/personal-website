import Link from "next/link"
import { EB_Garamond } from "next/font/google"

const garamond = EB_Garamond({
  subsets: ['latin']
})

export default function NavBar() {
  return (
    <nav className={`text-2xl ${garamond.className} flex gap-4`}>
      {[
        ["Home", "/home"],
        ["Projects", "/projects"],
        ["Blog", "/blog"],
        ["Contact", "/contact"],
        ["About", "/about"],
      ].map(([title, link]) => {
        return (
          <div>
            <Link key={title} className="transition-all border-b hover:pb-2 " href={link}>{title}</Link>
          </div>
        )
      })
      }
      
    </nav>
  )
}