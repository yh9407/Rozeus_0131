import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux";
import {kakaoLoginRequest} from "../../actions/authAction";
import styled, {ThemeProvider} from "styled-components"

const KakaoStyle = styled.button`
display: flex;
max-width: 150px;
max-height: 5vh; 
border: none;
outline: none;
cursor:pointer;
  img{
  max-width: 150px;
  max-height: 5vh; 
  }


`

const Kakao = ({props}) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState(false)
    const loginHandler = () => {
        window.Kakao.Auth.login({
            success: (authObj) => {
                window.Kakao.API.request({
                    url: "/v2/user/me",
                    success: (res) => {
                        dispatch(kakaoLoginRequest(res))
                        props.history.push("/")
                    },
                    fail: (error) => {
                        console.log(error)
                    },
                });
            },
            fail: (err) => {
                alert(JSON.stringify(err))
            }
        })

    }
    useEffect(() => {
    }, [])

    return (
        <KakaoStyle onClick={loginHandler}>
            <img src={"/img/kakao_img.png"}/>
        </KakaoStyle>
    )
}
export default Kakao