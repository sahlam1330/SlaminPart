import React, { useState } from "react";

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

            </div>
            
            

         
        )
}
export default SignIn;