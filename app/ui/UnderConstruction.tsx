import Image from "next/image";
import MyLink from "./MyLink";

const gifs = [
    '/construction-gif-1.gif',
    '/construction-gif-2.gif',
    '/construction-gif-3.gif'
]

export default function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl dark:text-white text-black">This Section is under construction !! ⚒️</h1>
            <img
                className="w-[200px] sm:w-[250px]"
             src={gifs[Math.round(Math.random() * 2)]} alt="construction gif" />
             <MyLink className="" href="/">Go Back to home page</MyLink>
        </div>
    )

}