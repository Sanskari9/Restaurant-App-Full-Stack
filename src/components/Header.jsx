import React from 'react'
import Logo from './img'
const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
        {/* Desktop and tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
            <img src={Logo} className="w-10 object-cover" alt="logo" />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full  p-4"></div>
    </div>
  )
}

export default Header
