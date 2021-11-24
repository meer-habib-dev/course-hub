import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div style={{textAlign:'center',height:'80vh',padding:'200px'}}>
            <form onSubmit="">
                <input type="email" name="" placeholder='Enter Email' id="" /><br />
                <input type="password" name="" placeholder='Enter Password' id="" /><br />
                <input type="submit" value='Log In' /><br />


            </form>
            <button onClick={signInWithGoogle}>Sign In With Google</button><br />
            <span>Dont have any account? <Link to='/register'>Register Here</Link></span>
            
        </div>
    );
};

export default Login;