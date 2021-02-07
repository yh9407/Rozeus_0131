import React, {useEffect, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux";

const MenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({theme}) => theme.primaryLight};
  height: 100vh;
  width: 250px;
  min-width: 150px;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({menuOpen}) => menuOpen ? "translateX(0)" : "translateX(-100%)"};
  @media (max-width: 550px) {
    width: 180px;
    max-width: 150px;
  }
    .side_menu{
    display: grid;
    height: 100%;
    width: 200px;
    grid-template-rows: repeat(4,1fr);
    align-items: center;
    justify-items: center;
    font-size: 18px;
    @media (max-width: 550px){
    width: 100px;
    font-size: 10px;
    grid-template-rows: repeat(4,1fr);
    align-items: center;
    justify-items: center;
    }
    }
`;

const Menu = ({menuOpen}) => {
    const loginData = useSelector((state) => state.auth.login)
    useEffect(()=>{

    },[loginData.isLoggedIn])
    return (
        <MenuStyle menuOpen={menuOpen}>
            <div className={"side_menu"}>
                {loginData.isLoggedIn ? (<>
                        <span>{loginData.name} 님</span>
                        <span>{loginData.email}</span></>) :
                    <><span>Menu 1</span><span>Menu 2</span></>}

                <span>Menu 3</span>
                <span>Menu 4</span>
            </div>

        </MenuStyle>
    )
}
export default Menu