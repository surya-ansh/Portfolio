import React, { useState } from 'react';

const Connect = () => {
    const [isContactClicked, setIsContactClicked] = useState(false);
    const [isSocialClicked, setIsSocialClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);


    const handleContactClick = () => {
        setIsContactClicked(!isContactClicked);
    };

    const handleHoverIn = () => {
        setHover(true)

    }
    const handleHoverIn1 = () => {
        setHover1(true)

    }
    const handleHoverOut = () => {
        setHover(false)

    }
    const handleHoverOut1 = () => {
        setHover1(false)

    }


    const handleSocialClick = () => {
        setIsSocialClicked(!isSocialClicked);
    };

    return (
        <div className='fixed md:bottom-8 bottom-4 right-2 md:right-10 z-40 flex md:flex-col items-center gap-4'>
            {/* Social Media Button */}
      <div
        onClick={handleSocialClick}
        onMouseEnter={handleHoverIn1}
        onMouseLeave={handleHoverOut1}
       
        className='lg:hidden rounded-full cursor-pointer bg-black border-2 border-white  hover:border-green-300 h-12 w-12 flex justify-center items-center text-2xl'
      >
        
        <i className="fa-solid fa-share-alt invert hover:text-purple-700"></i>
      </div>
       {/* {hover1 && <h1 className='hiver1 text-white absolute  right-14 z-40 bg-black p-1 rounded-md text-nowrap'>Socials</h1>} */}
      

      {isSocialClicked && (
        <div className='fixed bottom-40 right-10 z-40  social-pop-out rounded-xl  bg-white'>
            
          <div className="bg-black p-2 rounded-lg text-white hover:border-b-purple-600 hover:border-r-purple-600  border-b-4 border-r-4 border-white flex flex-col items-center gap-3 text-xl ">
            <a href="https://www.linkedin.com/in/suryansh-singh-ab1b9b263" target='_blank' rel="noopener noreferrer" className="text-4xl">
              <i className="fa-brands fa-linkedin transition ease-in-out delay-75 text-4xl hover:text-blue-500  hover:scale-125"></i>
            </a>
            <a href="https://www.instagram.com/suryansh_0903" target='_blank' rel="noopener noreferrer" className="text-4xl">
              <i className="fa-brands fa-square-instagram transition ease-in-out  hover:text-red-500  delay-75 hover:scale-125"></i>
            </a>
            <a href="https://github.com/surya-ansh" target='_blank' rel="noopener noreferrer" className="text-4xl">
              <i className="fa-brands fa-github transition ease-in-out delay-75 hover:text-purple-500 text-4xl hover:scale-125"></i>
            </a>
            <a href="" target='_blank' rel="noopener noreferrer" className="text-4xl">
              <i className="fa-brands fa-square-whatsapp transition  text-4xl hover:text-green-500 ease-in-out delay-75 hover:scale-125"></i>
            </a>
          </div>
        </div>
      )}

            {/* Contact Button */}
            {/* <div
                onClick={handleContactClick}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
                className='rounded-full cursor-pointer bg-black border-2 border-green-400  hover:border-green-300 h-12 w-12 flex justify-center items-center text-2xl'
            >
                <i className="fa-solid fa-envelope invert text-purple-800"></i>
            </div>
            {hover && <h1 className='hiver text-white absolute bottom-2 right-14 z-40 bg-black p-1 rounded-md text-nowrap'>Contact Me</h1>} */}
{/* 
            {isContactClicked && (
                <div className='fixed top-1 right-1 h-screen  w-full bg-black   flex justify-center items-center z-40 pop-out'>
                    <section id="contact" className=" p-8 rounded-lg text-white ">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact Me</h2>
                            <button
                                onClick={handleContactClick}
                                className=" hover:text-gray-200 absolute top-16 right-10"
                            >
                                <i className="fa-solid fa-xmark scale-150"></i>
                            </button>
                            <form className="max-w-md mx-auto">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full mb-4 px-3 py-2 border text-sm border-white bg-inherit text-white rounded-md focus:outline-none focus:border-purple-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mb-4 px-3 py-2 border text-sm border-white bg-inherit text-white rounded-md focus:outline-none focus:border-purple-600"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows="5"
                                    className="w-full mb-4 px-3 py-2 border text-sm border-white bg-inherit text-white rounded-md resize-none focus:outline-none focus:border-purple-600"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white border-r-2 border-b-2 px-4 py-2 rounded-md shadow-sm shadow-white hover:scale-110"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            )} */}
        </div>
    );
};

export default Connect;
