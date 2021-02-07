import React, {useEffect, useRef, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {userLoginBtn} from "../actions/authAction";
import Theme from "../theme";
import theme from "../theme";
import {Link} from "react-router-dom";
import Naver from "../component/socialLogin/Naver";
import Kakao from "../component/socialLogin/Kakao";
import Google from "../component/socialLogin/Google";
import Facebook from "../component/socialLogin/Facebook";

const PageStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
margin: 1em 0 0 0 ;
  .lay{
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  min-height: 600px;
  max-width: 600px;
  width: 90%;
  align-items: center;
  justify-items: center;
    img{
    width: 150px;
    height: 100px;
    }
    .socialBtn{
    display: grid;
    height: 100%;
    grid-template-rows: repeat(4,1fr);
    margin: 10px 0 10px 0;
    }
  }
  .login_form{
  display: flex;
  flex-direction: column;
  width: 100%;
   button{
        height: 5vh;
        border: none;
        border-radius: 5px;
        background-color: ${props => props.theme.focusColor};
        color: white;
        font-size: 20px;
        font-weight: 600;
        outline: none;
        box-shadow: 3px 3px 3px lightgray;
        }
   button:hover{
   cursor: pointer;
   background-color: ${props => props.theme.mainColor};
   }
    button:active{
   cursor: pointer;
   box-shadow: 0 1px lightgray;
   transform: translateY(2px);
   }
    input{
    border-radius: 5px;
    font-size:15px;
    border: ${props => props.theme.border};
    letter-spacing: 0.05em;
    height:5vh;
    margin: 0 0 0.5em 0;
    padding : 0 0 0 1em;
        :focus{
        outline-color: ${props => props.theme.focusColor};
        }
       
    }
    .Options{
    margin-top: 1em;
    display: grid;
    align-items: center;
    justify-items: center;
    color: gray;
    cursor: pointer;
    grid-template-columns: repeat(3,1fr);
    }
    
  }
`


const Login = (props) => {
    const dispatch = useDispatch();
const isLoggedIn = useSelector((state)=> state.auth.login.success)
    const [loginData, setLoginData] = useState({
        user_id: "",
        user_pw: "",
    })
    const user_id = useRef();
    const user_pw = useRef();

    const onChangeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        })
        if (e.key === "Enter") {
            loginSubmit()
        }
        const loginSubmit = () => {

        }
    }
    useEffect(()=>{

    },[isLoggedIn])
    return (
        <ThemeProvider theme={theme}>
            <PageStyle>
                <div className="lay">
                    <img src={'/img/Rozeus_logo.jpg'}/>
                    <article className="login_form">
                        <input
                            ref={user_id}
                            id={"user_id"}
                            placeholder={"아이디"}
                            value={loginData.user_id}
                            onChange={onChangeHandler}
                            onKeyPress={onChangeHandler}/>
                        <input
                            ref={user_pw}
                            id={"user_pw"}
                            placeholder={"비밀번호"}
                            value={loginData.user_pw}
                            onChange={onChangeHandler}
                            onKeyPress={onChangeHandler}/>
                        <button className={"submit_btn"}>로그인</button>
                        <div className={"Options"}>
                            <span>아이디 찾기</span>
                            <span>비밀번호 찾기</span>
                            <span><Link to={"/register"}>
                                <span>회원가입</span></Link></span>
                        </div>
                    </article>
                    <div className={"socialBtn"}>
                        <Naver props={props}/>
                        <Kakao props={props}/>
                        <Google props={props}/>
                        <Facebook props={props}/>
                    </div>
                </div>
            </PageStyle>
        </ThemeProvider>
    )
}
export default Login;
