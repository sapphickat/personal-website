'use client'
import socialLinks from "./ui/SocialLinks";
import SocialLinks from "./ui/SocialLinks";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-5xl p-8 flex flex-col gap-4 ">
                <p>now some yapping...</p>
                <p>So, about social media, I use {socialLinks('Tumblr')} the most It's just the best. Also I use {socialLinks('Instagram')} but just because It's super addictive and when I need to farm some dopamine. 
                    Here's my {socialLinks('Youtube')} channel, but It's empty, and I don't plan o posting nothing any time soon, It's here just in case. 
                    I Listen to music a lot <span className="font-mono dark:bg-neutral-700 bg-neutral-200">d-_-b</span>, almost always on {socialLinks('Spotify')}, even though I prefer the {socialLinks('Soundcloud')}, there   
                    you can find some random playlists, nothing neat though. On {socialLinks('Discord')} I talk to my fellow gamers friends and play league and CS.
                    I post my code on {socialLinks('Github')}, you can find some projects and half done repos there.
                </p>
                <p>Here's my {socialLinks('Linkedin')}, don't tell anyone but I don't like this one.</p>

            </div>
        </div>
    )
}