import React, {useRef, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {userLoginBtn} from "../actions/authAction";
import Theme from "../theme";
import theme from "../theme";
import {Link} from "react-router-dom";
import CheckPage from "../component/auth/regiserCheck";

const PageStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;

align-items: center;
margin: 1em 0 0 0 ;
  .lay{
  display: grid;
  max-width: 600px;
  grid-template-rows: 0.5fr 1fr;
  min-height: 600px;
  width: 90%;
  align-items: center;
  justify-items: center;
    img{
    width: 150px;
    height: 100px;
    }
    .buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
      button{
        height: 5vh;
        border: none;
        border-radius: 5px;
        width: 45%;
        background-color: ${props => props.theme.focusColor};
        color: white;
        font-size: 20px;
        font-weight: 600;
        outline: none;
        box-shadow: 3px 3px 3px lightgray;
      }
      button:active{
       cursor: pointer;
       box-shadow: 0 1px lightgray;
       transform: translateY(2px);
   }
      button:nth-child(1){
      background-color: gray;
      }
    }
  }
  .login_form{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
    width: 100%;
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
  }
`
const CheckPageStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
max-width: 500px;
justify-content: center;

  .checkPage{
  display: grid;
  width: 100%;
  min-width: 300px;
  grid-template-rows: 2fr 3fr 3fr 3fr 2fr ;
  align-items: center;
  justify-items: flex-start;
  
    .inside:nth-child(1){
    display: grid;
    align-items: center;
    justify-items: flex-start;
    grid-template-columns: 2em 1fr;
    }
    .inside{
    display: grid;
    align-items: center;
    justify-items: flex-start;
    grid-template-columns: 2em 1fr;
      .lawArea{
      width: 100%;
      height: 100%;
      }
    }
   
    .checkbox_style{
    margin: 0 0.5em 0 0 ;
    width: 1em;
    height: 1em;
    }
    .buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
      button{
      width: 45%
      }
      button:nth-child(1){
      background-color: gray;
      }
    }
  }
`

const Register = (props) => {
    const dispatch = useDispatch();
    const [checkLaw, setCheckLaw] = useState(false)
    const [registerData, setRegisterData] = useState({
        user_id: "",
        user_pw: "",
    })
    const user_id = useRef();
    const user_pw = useRef();

    const onChangeHandler = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.id]: e.target.value
        })
        if (e.key === "Enter") {
            loginSubmit()
        }
        const loginSubmit = () => {

        }
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <PageStyle>
                    <div className="lay">
                        <img src={'/img/Rozeus_logo.jpg'}/>
                        <article className="login_form">
                            {!checkLaw ? <CheckPage setCheckLaw={setCheckLaw} props={props}/> : <> <input
                                ref={user_id}
                                id={"user_id"}
                                placeholder={"아이디"}
                                value={registerData.user_id}
                                onChange={onChangeHandler}
                                onKeyPress={onChangeHandler}/>
                                <input
                                    ref={user_pw}
                                    id={"user_pw"}
                                    placeholder={"비밀번호"}
                                    value={registerData.user_pw}
                                    onChange={onChangeHandler}
                                    onKeyPress={onChangeHandler}/>
                                <div className={"buttons"}>
                                    <button className={"submit_btn"} onClick={()=>{
                                        setCheckLaw(false)
                                    }}>취소</button>
                                    <button className={"submit_btn"}>회원가입</button>
                                </div>
                            </>
                            }
                        </article>

                    </div>
                </PageStyle>
            </ThemeProvider>

        </>
    )
}
export default Register;
