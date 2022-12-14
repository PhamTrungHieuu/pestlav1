import React, { useState } from "react";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as actions from './../../action/index';
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './login.css';
function Login(props){
    const navigate = useNavigate();
    const [inputUserName,setInputUsername] = useState("")
    const [inputPassWord,setInputPassWord] = useState("")
    const MySwal = withReactContent(Swal)
    function HandlerSubmit(e){
        e.preventDefault();
        
        let user = {
            username: inputUserName,
            password: inputPassWord
        }
        
        ApiCaller('/login/','POST',user).then(res => {
            props.onLogin(res.data.token) 
        }).then(res => {
            setInputUsername("")
            setInputPassWord("")
            MySwal.fire({
                title: <strong>Thành Công!</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'success'
            })
        }).then(e => {
            navigate("/")
        })
        .catch(err => {
            MySwal.fire({
                title: <strong>Tài khoản mật khẩu không chính xác!</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        })
            
      
        
    }
    function onChange(e){
        if(e.target.name === "username"){
            setInputUsername(e.target.value)
        }else{
            setInputPassWord(e.target.value)
        }
    }
    return (
        <form onSubmit={(e) => HandlerSubmit(e)}>
            <div className="login-background"> 

                <div className="login-khung"> 
                        <div className="label-login"> Đăng nhập </div>
                        <br></br>
                        {/* Tài khoản  */}
                        <input type="text" name="username" className="username" placeholder=" Tên tài khoản" value={inputUserName} onChange={(e) => onChange(e)}></input>
                        <br></br>
                        {/* Mật khẩu */}
                        <input type="password" name="password" className="password" placeholder=" Mật khẩu" value={inputPassWord} onChange={(e) => onChange(e)}></input>
                        <br></br>
                        <button className="sumbit">Đăng nhập</button>
                
                </div>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onLogin : (token) => {
            dispatch(actions.saveLogin(token))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)