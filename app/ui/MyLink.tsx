import Link from "next/link";
import { Children } from "react";

export default function MyLink({href, children, className}) {
    return (
        <Link 
            className={className + ' dark:text-white text-black dark:hover:decoration-white hover:decoration-black transition-colors underline underline-offset-4 dark:decoration-neutral-700 decoration-neutral-300'}
            href={href}
            
            >
            {children}
        </Link>
    )
}