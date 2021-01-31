import React from "react"
import styled from "styled-components"
import {userLoginBtn} from "../actions/authAction";
import {useDispatch, useSelector} from "react-redux";

const HeaderStyle = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
`

const Header = () => {
    const dispatch = useDispatch();
    const logBtnClicked = useSelector((state)=> state.auth.login.button)
    const Title = "타이틀 위치"
    return (
        <HeaderStyle>
            <div>
                {Title}
            </div>
            <div>
                <button onClick={()=> dispatch(userLoginBtn())}>
                    로그인
                </button>
                <button>
                    회원가입
                </button>
            </div>
        </HeaderStyle>
    )
}
export default Header
