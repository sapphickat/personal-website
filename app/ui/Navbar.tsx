import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {


    return (
        <div className="grid sm:flex grid-cols-2 ">
            <div className="sm:order-1 p-4 flex  items-center mr-auto  ">
                <Link className="" href={'/'}>
                    <Image
                        className="h-[70px] w-[70px] object-cover"
                        src={'/rio-futaba.gif'}
                        width={100}
                        height={100}
                        alt="rio futaba gif"
                    >
                    </Image>
                </Link>
            </div>
            <div className="sm:order-2 order-3 p-4 sm:p-8 sm:gap-6 gap-3 grid sm:grid-flow-col sm:justify-end items-center  ">
                <Link className="" href={'/blog'}>Blog</Link>
                <Link href={'/gallery'}>Gallery</Link>
                <Link href={'/project'}>Projects</Link>
                <Link href={'/contact'}>Contact</Link>
            </div>
            <div className="sm:order-3 order-2 pt-8 pr-8 justify-self-end">
                <ThemeToggle />
            </div>
        </div>
    )
}