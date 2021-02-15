import React from "react"
import styled, {ThemeProvider} from "styled-components"
import theme from "../../theme";

const ErrorBoxStyle = styled.div`
visibility: ${props=>props.error ? 'visible' : 'hidden'};
transition: 0.7s ease-in-out;
right: 0;
color: ${props => props.theme.dangerColor};
width: 100%;
margin-bottom: 2px;
height: 3vh;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 12px;
font-weight: 550;
`;

const errorMsg = [
    "※ 아이디를 입력해주세요",
    "※ 비밀번호를 입력해주세요",
    "※ 아이디 혹은 비밀번호가 일치하지 않습니다",
];

const ErrorBoxLogin = ({errorCode}) => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorBoxStyle error={errorCode}>
                <span>{errorMsg[errorCode-1]}</span>
            </ErrorBoxStyle>
        </ThemeProvider>
    )
}
export default ErrorBoxLogin;
