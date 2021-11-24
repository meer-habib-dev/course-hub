import React from 'react';
// materials tailwind imports
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// const [path, setPath] = useHistory();
// const handleClick = () => {
//     setPath.push('./course')
// }

const Cards = () => {
    return (
        <div class="grid grid-cols-3 gap-4 my-20">
             {/* Courses here */}
            <Card>
            <CardImage
                src="https://img-c.udemycdn.com/course/240x135/1835828_92e5.jpg"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Adobe Photoshop CC – </H6>
                <Paragraph color="gray" className='mb-0'>
                  You'll learn advanced Photoshop techniques like Photoshop retouching & Graphic Design tutorials and many more...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button  color="lightBlue" className='m-auto' size="lg" ripple="light">
                    <Link to='/course'>Read More</Link>
                </Button>
            </CardFooter>
            </Card>
            
            <Card>
            <CardImage
                src="https://img-c.udemycdn.com/course/240x135/2201164_831a.jpg"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Modern JavaScript</H6>
                <Paragraph color="gray" className='mb-0'>
                 Learn Modern JavaScript from the very start to ninja-level & build awesome JavaScript applications....
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" className='m-auto' size="lg" ripple="light">
                   <Link to='/course'>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
            <Card>
            <CardImage
                src="https://img-c.udemycdn.com/course/240x135/1042110_ffc3_4.jpg"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Beginner Full Web Development</H6>
                <Paragraph color="gray" className='mb-0'>
                 Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node.Build many projects...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" className='m-auto' size="lg" ripple="light">
                    <Link to='/course'>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
        </div>
    );
};

export default Cards;