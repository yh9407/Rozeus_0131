import React from "react"
import GoogleLogin from 'react-google-login';
import {useDispatch} from "react-redux";
import {googleLoginRequest} from "../../actions/authAction";
import styled, {ThemeProvider} from "styled-components"

const GoogleStyle=styled.div`
display: flex;
max-width: 150px;
max-height: 5vh;
      button{
      width: 150px;
      }
`

const Google = ({props}) => {
    const dispatch = useDispatch();

    const responseGoogle = (res) => {
        dispatch(googleLoginRequest(res))
        props.history.push("/")
    }
    return (
        <GoogleStyle>
            <GoogleLogin clientId={process.env.REACT_APP_GOOGLE}
                         buttonText="Google"
                         onSuccess={responseGoogle}
                         onFailure={responseGoogle}
                         cookiePolicy={'single_host_origin'}
                //isSignedIn={true}
            />
        </GoogleStyle>
    )
}
export default Google;