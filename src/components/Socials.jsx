import React from 'react'

const Socials = () => {
    return (
        <div className='slider socials hidden lg:flex flex-col items-center justify-evenly bg-black rounded-md h-60 w-16'>
            <div><a href="https://www.linkedin.com/in/suryansh-singh-ab1b9b263" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-4xl transition ease-in-out delay-75 invert hover:scale-125 hover:text-purple-500 "></i></a></div>
            <div><a href="https://www.instagram.com/suryansh_0903" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-square-instagram text-4xl transition ease-in-out delay-75 invert hover:scale-125 hover:text-purple-500 "></i></a></div>
            <div><a href="https://github.com/surya-ansh" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github text-4xl transition ease-in-out delay-75 hover:scale-125 invert hover:text-purple-500"></i></a></div>
            <div><a href="" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-square-whatsapp text-4xl transition ease-in-out delay-75 hover:scale-125 invert hover:text-purple-500"></i></a></div>
        </div>
    )
}

export default Socials
