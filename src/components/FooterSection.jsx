import React from 'react'

const FooterSection = () => {
         // className='flex justify-between my-16 flex-wrap w-full gap-x-12 mt-10 gap-y-10'
  return (
    <>
    
      <footer className='w-full  bg-[#2B2B2B] text-white py-6 px-6 relative bottom-0'>
      <div className=' max-w-[1280px] mx-auto flex flex-col w-full '>
        <h3 className='font-bold leading-[100%] tracking-[0%] capatalize text-[31px]' >Soudemy</h3>

        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
   

            <div className='flex flex-col gap-y-6  min-w-[176px] max-w-[275px] flex-wrap break-words'>
                <h3 className='text-[26px] font-bold leading-[100%] tracking-[0%] '>About us</h3>
                <p className='text-sm sm:text-base lg:text-xl  whitespace-normal break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam </p>
            </div>

            <div className='flex flex-col gap-y-6 max-w-[275px]'>
                <h3 className='text-[26px] font-bold leading-[100%] tracking-[0%] '>Useful</h3>
                <ul className='space-y-2'>
                    <li>Download Product</li>
                    <li>Download Product</li>
                    <li>Download Product</li>
                    <li>Download Product</li>
                    <li>Download Product</li>
                    <li>Download Product</li>
                </ul>
            </div>

            
            <div className='flex flex-col gap-y-6 max-w-[275px]'>
                <h3 className='text-[26px] font-bold leading-[100%] tracking-[0%] '>Download</h3>
                <ul className='space-y-2'>
                    <li>instagram</li>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>pinteress</li>
                    <li>youtube</li>
                  
                </ul>
            </div>

            <div className='flex flex-col gap-y-6 max-w-[275px] '>
                <h3 className='text-[26px] font-bold leading-[100%] tracking-[0%] '>Call Center</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae </p>
                <p className='break-words'>soroushnorozyui@gmail.com</p>
                <p>+1 333 555</p>
            </div>

          
        </div>

        </div>
      </footer>

      
    </>
  )
}

export default FooterSection
