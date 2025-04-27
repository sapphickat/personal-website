import { useState } from "react"

export default function Logo({setDefaultColor}: {setDefaultColor: Function}) {

    const bg = document.getElementById('bg-gif')
    const names = [
        'Sxxphxx',
    ]

    const handleMouseOver = (e: any) => {
        // document.body.style.backgroundImage = `
        // linear-gradient(
        //     to bottom, 
        //     rgba(255, 0, 0, 0.5), 
        //     rgba(0, 0, 0, 0.5)
        //     ), url("/xcopy.gif")`

        setDefaultColor('text-white')
        console.log(names.length);
        if (bg) {
            bg.style.opacity = "1"
        }
        
        // e.target.innerHTML = names[Math.floor(Math.random() * names.length)]

    } 
    const handleMouseLeave = (e: any) => {
        document.body.style.backgroundImage = ""
        setDefaultColor('text-neutral-700')
        // e.target.innerHTML = 'Soophia'
        if (bg) {
            bg.style.opacity = "0"
        }
    } 


    return (
        <>
            <h1
                className="text-5xl text-white font-mono"
                id="logo"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                &gt;_ Sxxphxx
            </h1>
        </>
    )
}