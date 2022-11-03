import React from "react";
import './login.css';
import Apilogin from "../apilogin/Apilogin";
import axios from "axios";
function Menu() {
    return (
        <div>
            <div className="cover-header-top" id="test">
                <div className="grid wide">
                    <div className="header-top">
                        <div className="header_contact">
                            <div className="contact-item">
                                <i className="bi bi-envelope"></i>
                                <div className="contact-text">petsla.vn@gmail.com</div>
                            </div>
                            <div className="contact-sub"></div>
                            <div className="contact-item">
                                <i className="bi bi-telephone"></i>
                                <div className="contact-text">0123 456 789</div>
                            </div>
                        </div>
                        <div className="header_logo-tablet">
                            <a href="/#" className="header_logo-link">
                                <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" alt="" className="logo_img"/>
                            </a>
                        </div>
                        <div className="header_settings">
                            <div className="settings-language">
                                <div className="nationaly"></div>
                            </div>
                            <div className="setting-time">
                                <i className="bi bi-moon"></i>
                            </div>
                            <div className="setting-check-log">
                                <i className="bi bi-box-arrow-in-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-search">
                <div className="grid wide">
                    <div className="header_width-search">
                        <div className="header_logo">
                            <a href="/#" className="header_logo-link">
                                <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" alt="" className="logo_img"/>
                            </a>
                        </div>
                        <div className="header_input-search">
                            <form >
                                <div className="cover-input">
                                    <input type="text" name="" className="input"
                                        placeholder="Everything here is better than your ex"/>
                                        <button className="search-btn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                </div>
                            </form>
                        </div>
                        <div className="header_cart">
                            <div className="cover-cart">
                                <i className="bi bi-cart3"></i>
                                <div className="text-has-hover">title.cart</div>
                                <span className="number_cart">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="grid wide">
                    <ul className="list-nav">
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.homepage</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link" >title.shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.cart</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link account" onClick={() => Loginn()} >title.account</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className = "login" id> 
                <div className = "login-khung">
                    <div className="login-khung-lable">

                        <label className="login-khung-text"> Đăng nhập </label>
                        <div className = "exit" onClick={ () => exitt()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon-exit">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

                        </div>
                    </div>
                    <div className="login-user" >
                        <input id="username" className="login-usertext" placeholder = " Tên đăng nhập"  ></input>
                        <input id = "password" className="login-usertext" type={"password"} placeholder = " Mật khẩu"></input>
                    </div>
                    <button className="login-btn" onClick={() => clicklogin()}>
                        Đăng nhập
                    </button>
                    <div className="signUp" > Đăng kí</div>
                </div>
            </div>
        </div>
    )
}
function exitt(){
    var signin = document.querySelector('.login');
    signin.style.display = 'none';
}
function Loginn(){
    var signin = document.querySelector('.login');
    signin.style.display = 'block';
}
function clicklogin(){
    checklogin();

}
function checklogin(){ 
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    Apilogin(username, password);
}

export default Menu