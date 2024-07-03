import React from 'react';




const Hero = () => {
    return (
        <div id='Home' className='slider hero relative m-auto  flex justify-center flex-col items-center h-screen w-full  text-white'
            // style={{
            //     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url("https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg")`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            // }}
        >

            <div className="slider text-center text-white p-4 pt-10">
                <div className=' hero  text-2xl lg:text-4xl tracking-wider font-semibold'>HEY, I'M  <span className='font-bold'>
                    SURYANSH SINGH
                    </span></div>
                <div className='hero-main font-bold text-4xl lg:text-6xl tracking-wider mt-1 '>FULL STACK WEB DEVELOPER</div>
                <div className='text-center lg:text-md text-sm  mt-8 text-white px-10'>
                    <p>A Result-Oriented Web Developer building and managing Websites and Web <br /> Applications that leads to the success of the overall product</p>
                </div>
            </div>

            <div className=' mt-7 scale-90 lg:scale-100 transition ease-in-out hover:-translate-y-2'>
                <button className='py-4 hero-btn slider2 uppercase bg-inherit bg-black text-white  p-10   border-2  shadow-white    hover:bg-purple-600  '>Take a look on my Resume <i className="fa-solid fa-download ml-3 animate-bounce"></i></button>
            </div>

            

            <div className='hero-slider h-12 w-7 border-purple-400 border-2 flex justify-center rounded-xl absolute bottom-5'>
                <div className='h-3 w-3 rounded-full bg-purple-400 mt-1 dot'></div>
            </div>
        </div>
    );
}

export default Hero;
