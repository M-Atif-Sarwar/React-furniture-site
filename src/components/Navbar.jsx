import React from 'react'
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png'; 
import bagIcon from '../assets/bag.png'; 
import hamburgerIcon from '../assets/hambuger.png'; 


const Navbar = () => {
  return (
    <>
      <header>
        <nav className='w-full flex items-center  justify-around sm:justify-between  py-6  sm:px-5'>
          <section className='w-16  sm:w-20'>                                  
           <img src={logo} alt="" className='w-full'/>
          </section>
            
          <section >
          <ul className='flex  gap-8  text-xl xs:gap-1 xs:text-xs sm:gap-[40px] sm:text-xl'>
              <li> Home</li>
              <li> Shop</li>
              <li> About us</li>
              <li> Blog</li>
            </ul>
          </section>
             {/* xs is divice of 320px */}
          <section className='flex  space-x-3 sm:space-x-[25px] '>
           <img src={searchIcon} alt="" className=' xs:w-3 xs:h-3 w-4 h-4 sm:w-5 sm:h-5'/>
           <img src={bagIcon} alt="" className=' xs:w-3 xs:h-3 w-4 h-4 sm:w-5 sm:h-5' />
           <img src={hamburgerIcon} alt="" className='xs:w-3 xs:h-3 w-4 h-4 sm:w-5 sm:h-5' />

          </section>
        </nav>
      </header>
    </>
      

  )
}
                                                     
export default Navbar
