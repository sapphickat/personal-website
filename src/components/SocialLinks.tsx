import { useState } from "react";
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
    { href: "https://sophia-romantica.tumblr.com", icon: FaTumblr , color: "#36465D", customClass: "" },
    { href: "https://github.com/sxpphickat", icon: FaGithub , color: "#FFFFFF", customClass: "" },
    { href: "https://www.instagram.com/sapphic.kat/", icon: FaInstagram , color: "#FF0069", customClass: "" },
    { href: "https://open.spotify.com/user/u008sqwwc8nr9i4gvgn4snjuy", icon: FaSpotify , color: "#1ED760", customClass: "" },
    { href: "https://soundcloud.com/sxpphickat", icon: ImSoundcloud2 , color: "#FF5500", customClass: " rounded-md overflow-hidden" },
    { href: "https://www.youtube.com/@soophia-studies", icon: FaYoutube , color: "#FF0000", customClass: "" },
    { href: "https://discord.com/users/318138449259528194", icon: FaDiscord , color: "#5865F2", customClass: "" },
]

export default function SocialLinks() {
    return (
        <div className="flex gap-1 text-2xl text-neutral-700 ">
            {links.map(link => (
                <SocialLink key={link.href}
                    href={link.href}
                    icon={link.icon}
                    color={link.color}
                    customClass={link.customClass}
                />
            ))}
        </div>
    )
}


function SocialLink({href, icon: Icon, color, customClass}: {href: string, icon: any, color: string, customClass: string}) {
    const [isHovered, setIsHovered] = useState(false)
    const defaultColor = "#404040" // neutral 700

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon
                className={`${customClass} transition-colors duration-300 ease-out`}
                style={{
                    color: isHovered ? color : defaultColor
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </a>
    )
}
