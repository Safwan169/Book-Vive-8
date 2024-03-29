import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <div className='text-center my-10 lg:my-20'>
                <p className='font-bold text-3xl'>About us</p>
                <p className='text-gray-500 mt-4'>Our Bookstore Journey</p>
            </div>
            <div className="flex">
                <div>
                    <p className='font-bold text-2xl mb-4'>Book Vive</p>
                    <p className='text-gray-500  '>Welcome to BOOK-VIVE - Your Ultimate Destination for Quality Books and More!
                        At BDBOOKS, we are not just a bookstore; we are your trusted companion on your literary journey. With a passion for knowledge and a commitment to excellence, we have become a premier online destination for book enthusiasts and learners of all age</p>
                    <p className='font-bold text-2xl my-6'>Our Vision
                    </p>
                    <p className='text-gray-500 '>Our vision is simple yet profound: to make knowledge accessible to everyone. We believe that books have the power to inspire, educate, and transform lives. Whether you're a student preparing for exams, a professional seeking career-enhancing resources, or simply a book lover in search of your next great read, BDBOOKS.NET is here to cater to your needs.</p>
                    <p className='font-bold text-2xl mt-6'>Our Offerings</p>
                    <p className='text-gray-500 mt-6 '> BOOK-VIVE - Your Ultimate Destination for Quality Books and More!
                        At BDBOOKS, we are not just a bookstore; we are your trusted companion on your literary journey. With a passion for knowledge and a commitment to excellence, we have become a premier online destination for book enthusiasts and learners of all age</p>
                </div>

            </div>
            <div className='mt-20'>
                <p className='text-gray-700 font-semibold text-3xl mb-4'>Why Choose Books Vive</p>
                <p className='text-gray-500 mb-4'>BOOKS VIVE NET stands out for its extensive selection of educational materials, including textbooks, career resources, and stationery items. We guarantee quality, reliability, and affordability, offering wholesale options for institutions and educators. Our commitment to exceptional service, exclusive deals, and a supportive community makes us the go-to choice for those on a learning journey. Experience accessibility, reliability, and a wealth of knowledge—all in one place. Choose BDBOOKS.NET for a seamless and enriching educational experience.</p>
            </div>
            <div className='flex gap-10 text-center justify-center my-10'>
            <FaFacebook className=' text-blue-600' />
            <FaInstagram className='text-red-600' />
            <FaGithub  className='text-gray-500'/>
            <FaLinkedinIn className='text-blue-700' />



            </div>
        </div>
    );
};

export default About;