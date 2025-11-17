'use client'
import MyLink from "@/app/ui/MyLink";
import { useState } from "react";
import { IconType } from "react-icons";
import { 
    FaTumblr,
    FaSquareTumblr,
    FaInstagram, 
    FaSpotify,
    FaSoundcloud,
    FaGithub,
    FaYoutube,
    FaDiscord,
} from "react-icons/fa6";
import { ImSoundcloud2 } from "react-icons/im";

const links = [
    { href: "https://.tumblr.com", name: 'Tumblr', icon: FaSquareTumblr, color: "#36465D", customClass: "group-hover:color-tumblr " },
    { href: "https://github.com/sxpphickat", name: 'Github', icon: FaGithub , color: "#FFFFFF", customClass: "dark:group-hover:color-github group-hover:text-black" },
    { href: "https://www.instagram.com/sapphic.kat/", name: 'Instagram', icon: FaInstagram , color: "#FF0069", customClass: "group-hover:color-instagram" },
    { href: "https://open.spotify.com/user/u008sqwwc8nr9i4gvgn4snjuy", name: 'Spotify', icon: FaSpotify , color: "#1ED760", customClass: "group-hover:color-spotify" },
    { href: "https://soundcloud.com/sxpphickat", name: 'Soundcloud', icon: ImSoundcloud2 , color: "#FF5500", customClass: "rounded-md overflow-hidden group-hover:color-soundcloud" },
    { href: "https://www.youtube.com/@soophia-studies", name: 'Youtube', icon: FaYoutube , color: "#FF0000", customClass: "group-hover:color-youtube" },
    { href: "https://discord.com/users/318138449259528194", name: 'Discord', icon: FaDiscord , color: "#5865F2", customClass: "group-hover:color-discord" },
]

export default function SocialLinks({ defaultColor }: { defaultColor: string}) {
    return (
        <div className={`flex flex-col gap-2 text-2xl ${defaultColor}`}>
            {links.map(link => (
                <SocialLink 
                    key={link.href}
                    name={link.name}
                    href={link.href}
                    icon={link.icon}
                    color={link.color}
                    customClass={link.customClass}
                />
            ))}
        </div>
    )
}


function SocialLink({href, icon: Icon, name, color, customClass}: {href: string, icon: IconType, name: string, color: string, customClass: string}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <MyLink className={`  group flex gap-0.5  `} href={href} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center">
                <Icon
                    className={`${customClass} transition-colors duration-300 ease-out inline dark:text-neutral-400  text-neutral-500 `}
                />
            </span>

            <span className=" transition-colors duration-300 ease-out dark:text-neutral-400  text-neutral-500 dark:group-hover:text-white group-hover:text-black">{name}</span>
        </MyLink>
    )
}