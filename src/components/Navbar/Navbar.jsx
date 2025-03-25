import React from 'react'
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return <header>
        <div className='container py-3 flex items-center justify-between'>
            {/* Logo section */}
            <div>
                <img src={Logo} alt='Logo' className='w-30'/>
            </div>
            {/* Navlink section */}
            <ul className='hidden md:flex items-center gap-5'>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Customer</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
            </ul>
            {/* button section */}
            <div>
                <button className='border border-grey-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'>Donate</button>
            </div>
        </div>
    </header> 
}

export default Navbar