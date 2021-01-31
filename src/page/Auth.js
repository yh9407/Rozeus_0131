import React, {useState} from "react"
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {userLoginBtn} from "../actions/authAction";

const PageStyle = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
  .auth_btn{
  width: 20%;
  height: 5vh;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1em;
    button{
    border: none;
    border-radius: 10px;
    background-color: lightblue;
    margin: 0 0 0 1em;
    font-size: 20px;
    }
  }
`
const InputForm = styled.div`
display: flex;
width: 300px;
height: 300px;
justify-content: center;
align-content: center;
`

const Auth = (props) => {
   const [LoginBtn,setLoginBtn] = useState(false)
    const dispatch = useDispatch();
    const logBtnClicked = useSelector((state)=> state.auth.login.button)
const LoginForm = () => {
       return (
           <InputForm>
           <input placeholder="로그인폼"/>
           </InputForm>
       )
}
    return (
    <PageStyle>
            <div className="auth_btn">
                <button onClick={()=> dispatch(userLoginBtn())}>
                    로그인
                </button>
                <button>
                    회원가입
                </button>
            </div>
        </PageStyle>
    )
}
export default Auth;
