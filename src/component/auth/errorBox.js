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
    "※ 이름을 입력해주세요",
    "※ 아이디를 입력해주세요",
    "※ 비밀번호를 입력해주세요",
    "※ 복구 이메일을 입력해주세요",
    "※ 아이디가 이메일 형식이 아닙니다.",
    "※ 비밀번호는 문자,숫자,특수문자 포함 8~15자리 입니다.",
    "※ 복구 이메일이 이메일 형식이 아닙니다",
    "※ 아이디와 복구이메일은 같을 수 없습니다"
];

const ErrorBox = ({errorCode}) => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorBoxStyle error={errorCode}>
                <span>{errorMsg[errorCode-1]}</span>
            </ErrorBoxStyle>
        </ThemeProvider>
    )
}
export default ErrorBox;
