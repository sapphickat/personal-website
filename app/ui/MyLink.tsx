import Link from "next/link";
import { Children } from "react";

export default function MyLink({href, children, className}: { href: string, children: React.ReactNode, className: string}) {
    return (
        <Link 
            className={` dark:text-white text-black dark:hover:border-b-white hover:border-b-black transition-colors border-b rounded-none dark:border-b-neutral-700 border-b-neutral-300  ${className}`}
            href={href}>
            {children}
        </Link>
    )
}