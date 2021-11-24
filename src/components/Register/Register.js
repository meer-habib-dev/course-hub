import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div  style={{textAlign:'center',height:'80vh',padding:'200px'}}>
            <form action="">
            
                
            <input type="text" placeholder='Enter Name' /><br />
            <input type="email" placeholder='Enter Email' /><br />
            <input type="password" placeholder='Enter Password' /><br />
            <input type="password" placeholder='Confirm Password' /><br />
            <input type="submit" value="Register" />
                
            </form>
            <button onClick="">Sign In With Google</button><br />
            <span>Already have an account? <Link to='/login' >Please Login</Link></span>

        </div>
    );
};

export default Register;