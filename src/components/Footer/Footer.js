import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-gray-900 py-10 text-center'>
            <div className='pb-4 '>
                 <span className='text-gray-500 p-3 text-5xl text-center hover:text-pink-600'><i className="fab fa-facebook"></i></span>
           <span className='text-gray-500 p-3 text-5xl text-center hover:text-pink-600'><i className="fab fa-instagram"></i></span>
            <span className='text-gray-500 p-3 text-5xl text-center hover:text-pink-600'><i className="fab fa-twitter"></i></span>
          </div>
            <p><small className='text-pink-400 font-bold m-10'>course_hub - © 2012 - 2021</small></p>
        </div>
    );
};

export default Footer;