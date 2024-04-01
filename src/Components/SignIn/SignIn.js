import React, { useState } from "react";
import './signin.css'
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
        return (
            <div className="sigin-page">
                <h1>Please Sign into your account</h1>
                
                <div className="login-form"> 
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="your email" name="email" ></input>
                </div>

                <div className="login-form2">
                    <label htmlFor="password"> Password</label>
                    <input type="password" placeholder="*******" name="password" ></input>
                </div>

                <div className="btn_submit">
                    <button type="submit">Log In</button>                   
                </div>
                <div className="btn_reg">
               <button>Don't have an account? Register here.</button>
                </div>

            </div>
            
            

         
        )
}
export default SignIn;