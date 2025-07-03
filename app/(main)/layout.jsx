'use client'
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {

  const pathname = usePathname()

  let bg = 'xcopy-bg-gif' 

  if (pathname === '/home') {
    bg = 'xcopy-bg-gif'
  } else if (pathname === '/projects') {
    bg = 'test-bg-gif'
  }



  return (
    <div>
        <div id='bg-gif' className={`${bg} fixed inset-0 -z-10`}></div>
        <div className="">
          <NavBar />
        </div>
        <main className="pt-12 text-white">
          {children}
        </main>
    </div>
  );
}
