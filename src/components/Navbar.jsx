import React from 'react'
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png'; 
import bagIcon from '../assets/bag.png'; 
import hamburgerIcon from '../assets/hambuger.png'; 
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <header>
        <nav className='w-full flex items-center  justify-between  py-6 px-4'>
          <section className='w-16'>                                  
           <img src={logo} alt="" className='w-full'/>
          </section>
            
          <section className='flex'>
          <ul className='flex  gap-3   items-center justify-center text-res-font sm:gap-[40px] '>
              <li className='hover:border-2 hover: border-cyan-500 hover:p-2'> <NavLink  to={'/'} className={({ isActive }) =>
             `relative after:absolute after:left-0 after:bottom-[-3px]
              after:h-1 after:w-0 after:bg-red-500 after:transition-width
              after:duration-300 hover:after:w-full ${isActive ? 
                " after:w-full font-bold text-red-500" : ""}`
            }> Home</NavLink></li>

             <li className='hover:border-2 hover: border-cyan-500 hover:p-2'> <NavLink  to={'/shop'} className={({ isActive }) =>
             `relative after:absolute after:left-0 after:bottom-[-3px]
              after:h-1 after:w-0 after:bg-red-500 after:transition-width
              after:duration-300 hover:after:w-full ${isActive ? 
                " after:w-full font-bold text-red-500" : ""}`
            }>Shop</NavLink></li>

            <li className='hover:border-2 hover: border-cyan-500 hover:p-2'> <NavLink  to={'/aboutus'} className={({ isActive }) =>
             `relative after:absolute after:left-0 after:bottom-[-3px]
              after:h-1 after:w-0 after:bg-red-500 after:transition-width
              after:duration-300 hover:after:w-full ${isActive ? 
                " after:w-full font-bold text-red-500" : ""}`
            }>About us</NavLink></li>

            <li className='hover:border-2 hover: border-cyan-500 hover:p-2'> <NavLink  to={'/blog'} className={({ isActive }) =>
             `relative after:absolute after:left-0 after:bottom-[-3px]
              after:h-1 after:w-0 after:bg-red-500 after:transition-width
              after:duration-300 hover:after:w-full ${isActive ? 
                " after:w-full font-bold text-red-500" : ""}`
            }>Blog</NavLink></li>
              
            </ul>
          </section>

             {/* xs is divice of 320px */}
          <section className='flex  space-x-3 sm:space-x-[25px] '>
           <img src={searchIcon} alt="" className='w-3 h-3  sm:w-5 sm:h-5'/>
           <img src={bagIcon} alt="" className=' w-3 h-3   sm:w-5 sm:h-5' />
           <img src={hamburgerIcon} alt="" className='w-3 h-3 sm:w-5 sm:h-5' />

          </section>
        </nav>
      </header>
    </>
      

  )
}
                                                     
export default Navbar
