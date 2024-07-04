import React from 'react';
import myphoto from "../assets/myphoto.jpg"






const About = () => {
    return (
        <div id='about' className='flex mt-20 max-sm:mt-20 md:mt-10 lg:mt-8  justify-center h-[800px]  about text-white items-center  '
        // style={{
        //     backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url("https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg")`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center'
        // }}
        >
            <div id='About' className='  lg:h-[600px] flex  justify-around items-center  -mt-9'>

                {/* left content */}
                <div className='left w-1/3 lg:w-1/3 max-lg:w-3/4 md:w-3/4 max-sm:w-full max-sm:px-8  max-md:px-0 py-2  flex flex-col justify-between gap-2'>

                    {/* about and underline */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-semibold mb-2 '>About Me</h1>
                        <div className='h-1 w-32 bg-green-400 rounded-xl mb-14 '></div>
                    </div>

                    <p>Hello! I'm <span>Suryansh</span>, a curious programmer based in Uttar Pradesh, India. As a <span>Full Stack MERN Developer</span>, I specialize in creating dynamic and responsive web applications using <span>MongoDB, Express.js, React, and Node.js</span>.<br /><br />

                        I love how through programing you can change people’s preconceived notion about well-established processes and open new possibilities. I’ve always been inspired by the tech industry to explore and create. In my spare time I enjoy adjacent areas to design and coding.
                        <br /><br />


                    </p>
                    <div className=' mt-7 scale-90 lg:scale-100  ease-in-out  '>
                        <a href="#contact"><button className='hero-btn  py-4 slider2 uppercase  bg-inherit text-white  p-10     border-2  shadow-white   hover:-translate-y-2  hover:bg-green-600  '>Get In Touch</button></a>
                    </div>

                </div>



                {/* right */}
                <div className='right lg:flex justify-center items-center flex-col gap-5 w-1/4 h-[300px] p-5  bg-inherit hidden  mt-10  '>
                    <img className='about-image shadow-md shadow-white' src={myphoto} alt="" />
                </div>


            </div>



        </div>
    );
}

export default About;
