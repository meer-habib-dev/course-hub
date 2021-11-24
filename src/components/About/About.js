import React from 'react';

const About = () => {
    return (

        // About me page
        <div className=' flex justify-center align-middle mt-48 mb-28'>
            <div className='p-10 text-center bg-white shadow-md h-8/12 w-8/12'>
                
             {/* instructor image */}
                <img className='m-auto rounded-full h-48 w-48 flex items-center justify-center' src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80" alt="" />
                
              {/* about us inof */}
                <div className='about-info mt-6'>
                    <h1 className='text-3xl font-bold text-pink-600'>Meer Habib</h1>
                    <small className='font-bold text-gray-400'>Instructor</small>
                    <div>
                        <p className='text-center font-semibold text-gray-600'>
                            Changing learning for the better.Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.At course hub, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.In total, it was a big success, I would get emails about what a fantastic resource it was.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;