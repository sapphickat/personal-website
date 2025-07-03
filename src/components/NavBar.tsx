
export default function NavBar() {
  return (
      <ul id="navbar" 
        className="fixed top-0 text-white w-screen h-12 flex justify-around items-center 
        bg-black/50
        ">
        <li><a href="/home">Home</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">blog</a></li>
        <li><a href="">contact</a></li>
        <li><a href="">about</a></li>
      </ul>
  )
}