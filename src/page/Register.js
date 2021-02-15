import React, {useEffect, useRef, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {appRegisterInit, appRegisterRequest, userLoginBtn} from "../actions/authAction";
import Theme from "../theme";
import theme from "../theme";
import {Link} from "react-router-dom";
import CheckPage from "../component/auth/regiserCheck";
import ErrorBox from "../component/auth/errorBox";

const PageStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;

align-items: center;
margin: 1em 0 0 0 ;
  .lay{
  display: grid;
  max-width: 500px;
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
        font-size: 14px;
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
        font-size: 13px;
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

const Register = (props) => {
    //정규식(문자,순자,특수문자 포함 8~15자리)
    let regPwd = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const registerStatus = useSelector((state) => state.auth.register.status)
    const dispatch = useDispatch();
    const [errorCode, setErrorCode] = useState(null);
    const [checkItems, setCheckItems] = useState([])
    const [checkLaw, setCheckLaw] = useState(false)
    const [registerData, setRegisterData] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        recover_email: "",
        user_type: "0",

    })
    const user_name = useRef();
    const user_email = useRef();
    const user_password = useRef();
    const recover_email = useRef();

    const onChangeHandler = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.id]: e.target.value
        })
        if (e.key === "Enter") {
            registerSubmit()
        }
    }
    const errorHandler = () => {
        if (!registerData.user_name) {
            setErrorCode(1)
            user_name.current.focus();
            return false
        }
        if (!registerData.user_email) {
            setErrorCode(2)
            user_email.current.focus();
            return false
        } else if (!registerData.user_password) {
            setErrorCode(3)
            user_password.current.focus();
            return false
        } else if (!registerData.recover_email) {
            setErrorCode(4)
            recover_email.current.focus();
            return false
        } else if (!regEmail.test(registerData.user_email)) {
            setErrorCode(5)
            user_email.current.focus();
            return false
        } else if (!regPwd.test(registerData.user_password)) {
            setErrorCode(6)
            user_password.current.focus();
            return false
        } else if (!regEmail.test(registerData.recover_email)) {
            setErrorCode(7)
            recover_email.current.focus();
            return false
        } else if (registerData.user_email === registerData.recover_email) {
            setErrorCode(8)
            recover_email.current.focus();
            return false
        }
        return true;
    }

    const registerSubmit = () => {
        if (errorHandler()) {
            dispatch(appRegisterRequest(registerData))
        }
    }
    useEffect(() => {
        dispatch(appRegisterInit())
        if (registerStatus === "SUCCESS") {
            const ok = window.confirm("성공적으로 회원가입 되었습니다.")
            if (ok) {
                props.history.push("/login")
            }
        }
    }, [registerStatus])
    return (
        <>
            <ThemeProvider theme={theme}>
                <PageStyle>
                    <div className="lay">
                        <img src={'/img/Rozeus_logo.jpg'}/>
                        <article className="login_form">
                            <ErrorBox errorCode={errorCode}/>
                            {!checkLaw ? <CheckPage checkItems={checkItems} setCheckItems={setCheckItems}
                                                    setCheckLaw={setCheckLaw} props={props}/> : <> <input
                                ref={user_email}
                                type={"email"}
                                id={"user_email"}
                                placeholder={"아이디"}
                                value={registerData.user_email}
                                onChange={onChangeHandler}
                                onKeyPress={onChangeHandler}/>
                                <input
                                    ref={user_password}
                                    id={"user_password"}
                                    type={"password"}
                                    placeholder={"비밀번호"}
                                    value={registerData.user_password}
                                    onChange={onChangeHandler}
                                    onKeyPress={onChangeHandler}/>
                                <input
                                    ref={user_name}
                                    id={"user_name"}
                                    placeholder={"이름"}
                                    value={registerData.user_name}
                                    onChange={onChangeHandler}
                                    onKeyPress={onChangeHandler}
                                />
                                <input
                                    ref={recover_email}
                                    id={"recover_email"}
                                    type={"email"}
                                    placeholder={"복구 이메일"}
                                    value={registerData.recover_email}
                                    onChange={onChangeHandler}
                                    onKeyPress={onChangeHandler}/>
                                <div className={"buttons"}>
                                    <button className={"submit_btn"} onClick={() => {
                                        setCheckLaw(false)
                                        setCheckItems([])
                                        setRegisterData({});
                                        setErrorCode(null);
                                    }}>취소
                                    </button>
                                    <button className={"submit_btn"}
                                            onClick={registerSubmit}>회원가입
                                    </button>
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
