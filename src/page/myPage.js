import React from "react"
import styled, {ThemeProvider} from "styled-components"
import theme from "../theme";
import {useSelector} from "react-redux";

const MyPageStyle = styled.div`
display: grid;
width: 100%;
height: 100%;
grid-template-rows: 1fr 1fr;
justify-items: center;
min-width: 320px;
  .myPage_top{
  display: grid;
grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  height:40vh;
    .options{
    display: flex;
    width: 80%;
    justify-content: flex-end;
    }
    ._info{
    width: 100%;
    justify-items: center;
    display: grid;
    grid-template-rows: 3fr 1fr 1fr 1fr;
      div{
      display: flex;
      align-items: center;
      }
      .__name{
      font-size: 18px;
      font-weight: 600;
      }
      .__follow{
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: row;
      justify-content: center;
          div{
          padding: 0 0 0 8px;
          background-color: #E2E2E2;
          height: 30px;
          width: 90px;
          margin: 0 5px 0 5px;
          border-radius: 2em;
          font-size: 8px;
          color: gray;
            span{
            margin-left: 5px;
            color: deepskyblue;
            }
          }
      }
    }
    img{
    width: 120px;
    height: 90px;
    }
  }
  .myPage_bottom{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 2%;
  width: 90%;
  justify-items: center;
    div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    background-color: deepskyblue;
    }
    @media all and (max-width: 551px){
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3,1fr);
    }
  }
`

const MyPage = () => {
    const userData = useSelector((state) => state.auth.login)
    console.log(userData)
    return (
        <ThemeProvider theme={theme}>
            <MyPageStyle>
                <div className="myPage_top">
                    <div className="options">설정</div>
                    <div className="_info">
                        <img src={"/img/rion.jpg"}/>
                        <div className="__name">{userData.name}</div>
                        <div>상태메세지 자리</div>
                        <div className="__follow">
                            <div><p>Following<span>1422</span></p></div>
                            <div><p>Followers<span>2444</span></p></div>
                        </div>
                    </div>
                </div>
                <div className="myPage_bottom">
                    <div>퀵메뉴1</div>
                    <div>퀵메뉴2</div>
                    <div>퀵메뉴3</div>
                    <div>퀵메뉴4</div>
                    <div>퀵메뉴5</div>
                    <div>퀵메뉴6</div>
                    <div>퀵메뉴7</div>
                    <div>퀵메뉴8</div>
                    <div>퀵메뉴9</div>
                </div>

            </MyPageStyle>
        </ThemeProvider>
    )
}
export default MyPage