import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { faL } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [show,setShow] =useState(false)
    const navigate =useNavigate()
    const location =useLocation()
    console.log(location)
    const from =location.state?.from?.pathname || '/'
    const {SignIn} =useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault()
        const form =event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)

        SignIn(email,password)
        .then(result =>{
            const loggedUser =result.user 
            console.log(loggedUser)
            navigate(from,{replace:true})
            form.reset()
        })
        .catch(error=>{
            console.log(error.message)
        })
}
    return (
        <div className='form-container'>
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
           
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show? 'text': 'password'} name="password" id="" required/>
                <p onClick={()=> setShow(!show)}><small>
                    {
                        show? <span>Hide password</span> : <span>Show password</span>
                    }
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            
            <p className='text-error'><small>New to Ema-john? <Link to='/signUp' className='text-color'>Create an account</Link></small></p>
           
        </div>
    );
};

export default Login;