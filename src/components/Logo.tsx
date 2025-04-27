export default function Logo({setDefaultColor}: {setDefaultColor: Function}) {
    const handleMouseOver = () => {
        document.body.style.backgroundImage = `
        linear-gradient(
            to bottom, 
            rgba(255, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
            ), url("/xcopy.gif")`

        setDefaultColor('text-white')
    } 
    const handleMouseLeave = () => {
        document.body.style.backgroundImage = ""
        setDefaultColor('text-neutral-700')
    } 


    return (
        <>
            <h1
                className="text-5xl"
                id="logo"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                Sxxphxx
            </h1>
        </>
    )
}