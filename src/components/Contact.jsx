import React from 'react';
import { FiMail, FiPhone, FiInstagram, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
    return (
        <div id="contact" className="mt-24 text-white py-10 lg:px-[250px]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-semibold">Get In Touch</h1>
                    <div className="h-1 w-32 bg-green-400 rounded-xl mx-auto mt-4"></div>
                    <p className='mt-6 lg:mt-10 text-center mx-auto max-lg:mx-6 text-gray-300'>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                

                {/* Contact Icons */}
                <div className="flex flex-wrap lg:flex-row justify-center items-center gap-8">



                    {/* Instagram */}
                    <div className="flex items-center mb-4 lg:mb-0">
                        <a href="https://www.instagram.com/suryansh-0903/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiInstagram className="text-3xl lg:hidden mr-2 opacity-65 hover:opacity-100" />
                            
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center mb-4 lg:mb-0">
                        <a href="https://github.com/surya-ansh" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiGithub className="text-3xl lg:hidden mr-2 opacity-65 hover:opacity-100" />
                           
                        </a>
                    </div>


                    {/* Email */}
                    <div className="flex items-center mb-4 lg:mb-0">
                        <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target='_blank' className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiMail className="text-3xl mr-2 opacity-65 hover:opacity-100" />
                         
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mb-4 lg:mb-0">
                        <a href="tel:+91-7011609038" className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiPhone className="text-3xl mr-2 opacity-65 hover:opacity-100" />
                            
                        </a>
                    </div>
                    {/* LinkedIn */}
                    <div className="flex items-center mb-4 lg:mb-0">
                        <a href="https://www.linkedin.com/in/suryansh-singh-ab1b9b263" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiLinkedin className="text-3xl lg:hidden mr-2 opacity-65 hover:opacity-100" />
                            
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center">
                        <a href="https://wa.me/7011609038" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-green-400 transition duration-300 ease-in-out">
                        <FiMessageCircle className="text-3xl lg:hidden mr-2 opacity-65 hover:opacity-100" />
                          
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;
