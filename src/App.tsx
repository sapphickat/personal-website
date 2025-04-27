import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialLinks from './components/SocialLinks'
import Logo from './components/Logo'


function App() {
  const [defaultColor, setDefaultColor] = useState('text-neutral-700')

  return (
    <div className='relative overflow-hidden h-screen w-screen'>
      <div id='bg-gif' className="absolute inset-0 transition-opacity opacity-10 peer-hover:opacity-100 duration-300"></div>

      <div className='relative z-10 h-screen w-screen flex flex-col justify-evenly items-center text-white'>
        <div className='peer'>
          <Logo setDefaultColor={setDefaultColor} />
        </div>
        <SocialLinks defaultColor={defaultColor}/>
      </div>
    </div>
  )
}

export default App
