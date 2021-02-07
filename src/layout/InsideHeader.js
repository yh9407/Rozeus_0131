import React from "react"
import styled, {ThemeProvider} from "styled-components"
import theme from "../theme";
import {Link} from "react-router-dom";

const HeaderStyle = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
justify-items: center;
align-items: center;
 height: 6vh;
 min-width: ${props => props.theme.minWidth};
background-color: ${props => props.theme.mainColor};
 .nav_title{
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 width: 100%;
 height: 100%;
 color: white;
 font-weight: 600;
 background-color: dimgray;
 }
 .nav_title:hover{
 background-color:${props => props.theme.successColor} ;
 }
`

const InsideHeader = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderStyle>
                <div className={"nav_title"}><Link to={"/economy"}><span>경제</span></Link></div>
                <div className={"nav_title"}>정치</div>
                <div className={"nav_title"}>연예</div>
                <div className={"nav_title"}>스포츠</div>
                <div className={"nav_title"}>해외</div>
            </HeaderStyle>
        </ThemeProvider>
    )
}
export default InsideHeader;