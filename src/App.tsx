import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SocialLinks from './components/SocialLinks'
import Logo from './components/Logo'


function App() {
  const [defaultColor, setDefaultColor] = useState('text-neutral-700')

  return (
    <div className='h-screen w-screen flex flex-col justify-evenly items-center text-white'>
      <Logo setDefaultColor={setDefaultColor} />
      <SocialLinks defaultColor={defaultColor}/>
    </div>
  )
}

export default App
