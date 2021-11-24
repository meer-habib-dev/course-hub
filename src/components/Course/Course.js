import React from 'react';
import Rating from 'react-rating';
import './Course.css'
import Button from '@material-tailwind/react/Button';

const Course = (props) => {
    const { title, img, instructor, description, star, price, info } = props.course
    return (
        // Course Page section
        <div className='courseContainer w-10/12 m-auto bg-gray-100 shadow-md'>

            {/* Showing each courses here */}
            <div className='flex my-8 m-auto '>
                <div className='mr-4'>
                    <img className='w-full h-full' src={img} alt="" />
                </div>
                <div className="course-info w-8/12 text-left flex flex-col justify-center align-middle">
                        <p className='font-semibold'>{title}</p>
                        <p>{description}</p>
                        <small>{instructor}</small>
                    <span className='color  font-bold align'>{star} <Rating
                        initialRating={star}
                        emptySymbol=" far fa-star color"
                        fullSymbol="fas fa-star color"
                        readonly></Rating><br />
                    </span>
                    <small>{info}</small>
                </div>
                <div className='flex flex-col justify-between py-5 text-center'>
                    <p className='font-bold text-gray-700'>${price}</p>
                    <Button className=''
                    // onClick={handleClick}
                        color="pink"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light">
                        Enroll
                    </Button>
                </div>
        </div>
       </div>
    );
};

export default Course;