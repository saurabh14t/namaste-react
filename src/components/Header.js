import {LOGO_URL} from '../utils/constants.js';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{

    const [btnName, setBtnName] = useState('Login');

    useEffect(()=>{
       console.log("use Effect called");
    },[])

    return (
        <div className="header">
            <div className="logo-containet">
                <img className = "logo" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to={"/"}>Home </Link></li>
                    <li> <Link to = {"/about"} >About Us </Link> </li>
                    <li><Link to = {"/contact"} >Contact US </Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>btnName == 'Login' ? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;