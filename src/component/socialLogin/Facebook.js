import React from "react"
import FacebookLogin from 'react-facebook-login';
import {useDispatch} from "react-redux";
import {facebookLoginRequest} from "../../actions/authAction";
import styled, {ThemeProvider} from "styled-components"

const FacebookStyle = styled.div`
display: flex;
max-width: 400px;
max-height: 3vh;
  button{
  }
`

const Facebook = ({props}) => {
    const dispatch = useDispatch();

    const responseFacebook = (res) => {
        dispatch(facebookLoginRequest(res))
        props.history.push("/")
    }
    return (
        <FacebookStyle>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}/>
        </FacebookStyle>
    )
}
export default Facebook;