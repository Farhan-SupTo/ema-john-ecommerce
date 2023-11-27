import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error,setError] =useState('')
    const {createUser} =useContext(AuthContext)

const handleSignUp = event =>{
        event.preventDefault()
        const form =event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.Confirm.value 

        console.log(email,password,confirm)
setError('')
if(password !== confirm){
setError('Password did not match')
return
}else if(password.length <6){
    setError('Password must be in 6 characters')
    return
}

createUser(email,password)
.then(result =>{
    const loggedUser =result.user
    console.log(loggedUser)
})
.catch(error =>{
    console.log(error.message)
    setError(error.message)
})



}
    
    return (
        <div>
           <div className='form-container'>
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
           
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
           
                <div className="form-control">
                    <label htmlFor="Confirm">Confirm password</label>
                    <input type="password" name="Confirm" id="" required/>
                </div>
            
            <input className='btn-submit' type="submit" value="Sign up" />
            </form>
            <p className='text-error'><small>Already have an account? <Link to='/login' className='text-color'>Login</Link></small></p>
           <p className='error'>{error}</p>
        </div>
        </div>
    );
};

export default SignUp;