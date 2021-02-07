import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import NaverCallback from "./naverCallback";
import {naverLoginRequest} from "../../actions/authAction";
import {useLocation} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components"

const NaverStyle = styled.div`
display: flex;
      max-width: 230px;
      max-height: 5vh;
  button{
        max-width: 230px;
      max-height: 5vh;
  outline: none;
  border: none;
  cursor: pointer;
    img{
      max-width: 230px;
      max-height: 5vh;
    }
  }

`

const Naver = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.REACT_APP_NAVER,
        callbackUrl: "http://localhost:3000/users/naver",
        isPopup: false,
    })
    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        console.log(token);
    };
    const callbackFn = () => {
        naverLogin.getLoginStatus((status) => {
            if (status) {
                const email = naverLogin.user.getEmail();
                const name = naverLogin.user.getName();
                dispatch(
                    (naverLoginRequest({
                        email, name
                    }))
                )
            } else {
                console.log("AccessToken Error")
            }
        })
    }
    const CallbackFun = () => {
        naverLogin.getLoginStatus((status) => {
            if (status) {

            } else {
                naverLogin.getLoginStatus()
                console.log("AccessToken Error")
            }
        })
    }
    useEffect(() => {
        naverLogin.init()
        CallbackFun()
    }, [])

    return (
        <NaverStyle>
            <button className={"naver_button"} onClick={()=>naverLogin.authorize()}>
             <img src={"/img/naverLogin.PNG"}/>
            </button>
        </NaverStyle>
    )
}
export default Naver;

