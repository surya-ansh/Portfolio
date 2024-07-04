import React from 'react'
import { useState,useEffect } from 'react'
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";



const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClickOnMenu = ()=>{
    setClicked(!clicked)
  }
  return (
    <>
      {clicked && <div className='sidemenu h-screen w-full  fixed z-50 sm:hidden flex flex-col  '>
        <div onClick={handleClickOnMenu} className='text-gray-300 z-50 self-end px-7 py-10 scale-150 '><ImCross /></div>
        <div className=' list-none text-gray-300 text-5xl text-center flex-col flex gap-10 justify-center items-center h-full font-semibold '>
          <a href="#Home"><li className='transition ease-in hover:text-green-400 cursor-pointer hover:scale-110'>HOME</li></a>
          <a href="#portfolio"><li className='transition  ease-in hover:text-green-400 cursor-pointer hover:scale-110'>PORTFOLIO</li></a>
          <a href={"#about"}><li className='transition  ease-in hover:text-green-400 cursor-pointer hover:scale-110'>ABOUT</li></a>
          <a href={"#contact"}><li className='transition  ease-in hover:text-green-400 cursor-pointer hover:scale-110'>CONTACT</li></a>

        </div>
      </div>}





      <div className='navbar fixed flex  justify-center sm:py-5 max-lg:py-5  sm:justify-around gap-x-[520px] z-40 px-6 lg:px-16 py-4 font-semibold w-full items-center tracking-wide backdrop-blur-3xl  text-white  '>




        <div className='w-full flex justify-between items-center sm:hidden z-40 px-3'>
          <h1>SURYANSH</h1>
          <h1 onClick={handleClickOnMenu} className='scale-125'><TiThMenu /></h1>
        </div>








        <div className='right-nav list-none gap-10 flex sm:gap-16 px-4 max-sm:gap-5 max-sm:text-sm text-[14px] max-sm:hidden '>

          <a href="#Home"><li className='transition ease-in hover:text-green-400 cursor-pointer'>HOME</li></a>
          <a href="#portfolio"><li className='transition  ease-in hover:text-green-400 cursor-pointer'>PORTFOLIO</li></a>
          <a href="#about"><li className='transition  ease-in hover:text-green-400 cursor-pointer'>ABOUT</li></a>
          <a href="#contact"><li className='transition  ease-in hover:text-green-400 cursor-pointer'>CONTACT</li></a>




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
    </>
  )
}

export default Navbar
