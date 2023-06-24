import React from "react";
import "./Signin.css"
import {GoogleLogin} from 'react-google-login';
import  {useState} from "react";
// import { Link } from "react-router-dom";
import {BrowserRouter as Router , Link} from 'react-router-dom';
// import bcrypt from 'bcryptjs'

 const clientId='1066255000490-mo0u37mb6patetftglgbgfj0h6sfj7hs.apps.googleusercontent.com';


// Adder
// check

const Signin=()=>{
   
    setTimeout(SI, 10)

    function SI(){

        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");
    
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
    
    sign_up_btn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    });
    sign_in_btn2.addEventListener("click", () => {
        container.classList.remove("sign-up-mode2");
    });
}
const onSuccess=(res)=>{
    console.log('success',res);
};
const onFailure=(err)=>{
    console.log('failed',err);
}



    return(
        <>
            <div className="container">
        <div className="signin-signup">
            <form action="" className="sign-in-form">
                <Link to ='/dashboard'>

                <h2 className="title">Sign in</h2>
                </Link>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="name"/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                
                <Link to='/dashboard'>
                <input type="button" value="Login" className="btn"/>
               
                </Link>
                {/* <p className="social-text">Or Sign in with social platform</p> */}
                <div className="social-media">
                    {/* <a href="#" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a> */}
                    {/* <GoogleLogin
                    clientId={clientId}
                    buttonText="Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    /> */}

                </div>
                <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
            </form>
            <form action="" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" name="name"/>
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Email" name="email"/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                <input type="submit" value="Sign up" className="btn"/>
                <p className="social-text">Or Sign in with social platform</p>
                <div className="social-media">
                    {/* <a href="#" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a> */}
                    <GoogleLogin
                    clientId={clientId}
                    buttonText="Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />
                </div>
                <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign in</a></p>
            </form>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>Member of Brand?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                    <button className="btn" id="sign-in-btn">Sign in</button>
                </div>
                <img src="signin.svg" alt="" className="image"/>
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3>New to Brand?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium dolor, eos incidunt minima iure?</p>
                    <button className="btn" id="sign-up-btn">Sign up</button>
                </div>
                <img src="signup.svg" alt="" className="image"/>
            </div>
        </div>
    </div>
        </>
    )






}

const Name =()=>{
    let [Username,setUsername] = useState({
        uname:'',
        lname:''
    })
    let [Email,setEmail] = useState({
        femail:'',
        lemail:''
    })
    let [Password,setPassword] = useState({
        fpass:'',
        lpass:''
    })



}
export default Signin;