import React from 'react'
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png'; 
import bagIcon from '../assets/bag.png'; 
import hamburgerIcon from '../assets/hambuger.png'; 


const Navbar = () => {
  return (
    <>
      <header>
        <nav className='w-full flex items-center  justify-between  py-6 px-4'>
          <section className='max-w-[93px] sm:max-w-[150px]'>                                  
           <img src={logo} alt="" className='w-full'/>
          </section>
            
          <section className='flex'>
          <ul className='flex  gap-3   items-center justify-center text-res-font  xs:text-xs sm:gap-[40px] sm:text-xl'>
              <li> Home</li>
              <li> Shop</li>
              <li> About us</li>
              <li> Blog</li>
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
