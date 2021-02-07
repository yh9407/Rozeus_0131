import React from "react"
import styled, {ThemeProvider} from "styled-components"

const BurgerStyle = styled.button`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 4vh;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  top: 1.4vh;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
   div {
    width: 2rem;
    height: 0.25rem;
    background: ${({theme}) => theme.mainColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({menuOpen, setMenuOpen}) => {
    return (
        <BurgerStyle open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div/>
            <div/>
            <div/>
        </BurgerStyle>
    )
}

export default Burger

