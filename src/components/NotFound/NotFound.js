import Button from '@material-tailwind/react/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }
    return (
        // Not found or 404 page
        <div className='not-found-container'>
            <div className='not-found flex align-middle justify-center mb-10'>
                {/* image */}
                <img src="https://digitalagencynetwork.com/wp-content/uploads/2019/08/best-digital-agency-404-pages-for-your-inspiration.jpg" alt="" />

            </div>
            <Button className='text-center m-auto  py-10'
                onClick={handleClick}
            color="pink"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
        >
            Back Home
        </Button>

        </div>
    );
};

export default NotFound;