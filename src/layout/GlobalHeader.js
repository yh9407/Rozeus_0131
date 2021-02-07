import React, {useEffect, useRef, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {logoutRequest, userLoginBtn} from "../actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import theme from "../theme";
import axios from "axios";
import Burger from "../component/Burger/Burger";
import Menu from "../component/Menu/Menu";
import {useOnClickOutside} from "../component/hooks/burgerMenuHooks";

const HeaderStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-width: ${props => props.theme.minWidth};
  .Nav{
  align-items: center;
  display: grid;
  width: 100%;
  height: 6vh;
  margin: 0.5em 0 0 0;
  grid-template-columns: repeat(3,1fr);
       img{
      height:40px;
      width: 100px;
      }
    .nav_items{
    justify-self: center;
    cursor: pointer;
    
    span:hover{
        color: ${props => props.theme.mainColor};
        }
    }
    .nav_items:nth-child(1){
    margin:0 0 0 1em;
    justify-self: flex-start;
    }
    .nav_items:nth-child(3){
    justify-self: flex-end;
    margin:0 1em 0 0;
      button{
     font-size: 10px;
     border: none;
     outline: none;
     }
    }
  }
`


const GlobalHeader = (props) => {
    const node = useRef();
    useOnClickOutside(node, () => setMenuOpen(false))
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.auth.login)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
    }, [userState.isLoggedIn,menuOpen])
    return (
        <ThemeProvider theme={theme}>
            <HeaderStyle>
                <div className="Nav">
                    <div className={"nav_items"} ref={node}>
                        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div  className={"nav_items"}>
                    <Link to={"/"}>
                        <img src={"/img/Rozeus_logo.jpg"}/>
                    </Link>
                    </div>
                    <div className={"nav_items"}>
                        {userState.isLoggedIn ? <button onClick={() => dispatch(logoutRequest())}>
                                <Link to={"/login"}> <span>로그아웃</span></Link></button> :
                            <button onClick={() => dispatch(userLoginBtn())}>
                                <Link to="/login"><span>로그인</span></Link>
                            </button>}

                    </div>
                </div>
            </HeaderStyle>
        </ThemeProvider>
    )
}
export default GlobalHeader
