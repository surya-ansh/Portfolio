import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar fixed flex  justify-center  sm:justify-around gap-x-[520px] z-50 px-6 lg:px-16 py-4 font-semibold w-full items-center tracking-wide backdrop-blur-3xl  text-white  '>


      
     


  




      <div className='right-nav list-none gap-10 flex sm:gap-16 px-4 max-sm:gap-5 max-sm:text-sm text-[14px] '>

        <a href="#Home"><li className='transition ease-in hover:text-green-400 cursor-pointer'>HOME</li></a>
        <a href="#portfolio"><li className='transition  ease-in hover:text-green-400 cursor-pointer'>PORTFOLIO</li></a>
        <a href={"#about"}><li className='transition  ease-in hover:text-green-400 cursor-pointer'>ABOUT</li></a>
        <a href={"#contact"}><li className='transition  ease-in hover:text-green-400 cursor-pointer'>CONTACT</li></a>
        

        

      </div>
      <div className=' z-40  social-pop-out hidden lg:flex  '>
            
            <div className=" p-2   flex items-center gap-6 text-xl ">
              <a href="https://www.linkedin.com/in/suryansh-singh-ab1b9b263" target='_blank' rel="noopener noreferrer" className="text-4xl">
                <i className="fa-brands fa-linkedin transition ease-in-out delay-75 text-4xl hover:text-blue-400  hover:scale-125"></i>
              </a>
              <a href="https://www.instagram.com/suryansh_0903" target='_blank' rel="noopener noreferrer" className="text-4xl">
                <i className="fa-brands fa-square-instagram transition ease-in-out  hover:text-red-700  delay-75 hover:scale-125"></i>
              </a>
              <a href="https://github.com/surya-ansh" target='_blank' rel="noopener noreferrer" className="text-4xl">
                <i className="fa-brands fa-github transition ease-in-out delay-75 hover:text-purple-600 text-4xl hover:scale-125"></i>
              </a>
              <a href="https://wa.me/7011609038" target='_blank' rel="noopener noreferrer" className="text-4xl">
                <i className="fa-brands fa-square-whatsapp transition  text-4xl hover:text-green-600 ease-in-out delay-75 hover:scale-125"></i>
              </a>
            </div>
          </div>
      
    </div>
  )
}

export default Navbar
