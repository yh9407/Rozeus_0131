import React, {useEffect, useRef, useState} from "react"
import styled, {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux";
import {useOnClickOutside} from "../hooks/burgerMenuHooks";
import theme from "../../theme";

const MenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({theme}) => theme.primaryLight};
  height: 100%;
  width: 280px;
  text-align: left;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  cursor: auto;
  transition: transform 0.3s ease-in-out;
  transform: ${({menuOpen}) => menuOpen ? "translateX(0)" : "translateX(-100%)"};
  @media (max-width: 550px) {
    width: 150px;
    max-width: 150px;
  }
    .side_menu{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 95%;
    font-size: 13px;
    font-weight: 600;
        @media (max-width: 550px){
        width: 150px;
        font-size: 10px;
        grid-template-rows:6vh 1fr 1fr repeat(9,0.5fr) 3fr;
        align-items: center;
        justify-items: center;
        }
          >button{
            border: none;
            cursor: pointer;
            outline: none;
            font-weight: 600;
            }
          .menu__{
          align-items: center;
          display: flex;
          width: 100%;
          height: 50px;
          padding: 0 0 0 1.2em;
          border-bottom: 0.5px solid lightgray;
          }
          .menu__:nth-child(1){
          height: 56px;
          
          }
           .menu__:nth-child(2){
             display: grid;
             height: 12vh;
             grid-template-columns: 1fr 3fr 0.5fr;
             font-weight: 500;
                 img{
              width: 30px;
              height: 40px;
              border-radius: 100%;
              }
                >div:nth-child(1){
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                }
          }
          .menu__:nth-child(3){
          display: grid;
          font-size: 7px;
          grid-template-columns: repeat(4,1fr);
          height: 12vh;
            .nth3__{
            display: grid;
            grid-template-rows: 3fr 1fr;
            text-align: center;
             
            }
          }
          .menu__:nth-child(7){
          display:  grid;
          overflow: hidden;
          border: none;
          transition: all .2s ease-out;
          width: 100%;
          height:  ${props => props.newsBtn ? "200px" : "0px"};
          background-color: lightblue;
          align-content: center;
          grid-template-rows: repeat(4,1fr);
            >div{
            display: flex;
            border-bottom: 1px solid white;
            width: 100%;
            height: 50px;
            align-items: center;
            justify-items: center;
            }
             >div:nth-child(4){
            border: none;
            }
          }
          .menu__:nth-child(13) {
          border: none;
          }
    }
`;

const Menu = ({menuOpen}) => {
    const loginData = useSelector((state) => state.auth.login)
    const [newsBtn, setNewsBtn] = useState(false)

    useEffect(() => {

    }, [loginData.isLoggedIn])
    return (
        <ThemeProvider theme={theme}>
        <MenuStyle menuOpen={menuOpen} newsBtn={newsBtn}>
            <div className={"side_menu"} >
                <div className={"menu__"}></div>
                {loginData.isLoggedIn ? <div className={"menu__"}>
                        <div>프로필</div>
                        <div>{loginData.name} 님</div>
                        <div> ></div>
                    </div>
                    :
                    <div className={"menu__"}>
                        <div><img src={"/img/user_icon.jpg"}/></div>
                        <div>로그인이 필요합니다</div>
                        <div> ></div>
                    </div>}
                <div className={"menu__"}>
                    <div className={"nth3__"}>
                        <div><span>아이콘</span></div>
                        <div>최근 본 글</div>
                    </div>
                    <div className={"nth3__"}>
                        <div><span>아이콘</span></div>
                        <div>내 소식</div>
                    </div>
                    <div className={"nth3__"}>
                        <div><span>아이콘</span></div>
                        <div>통계</div>
                    </div>
                    <div className={"nth3__"}>
                        <div><span>아이콘</span></div>
                        <div>글쓰기</div>
                    </div>
                </div>
                <div className={"menu__"}>
                    광고
                </div>
                <div className={"menu__"}>
                    MY DECK
                </div>
                <button className={"menu__"} onClick={() => setNewsBtn(!newsBtn)}>
                    뉴스룸 탐색하기
                </button>
                <div className={"menu__"}>
                    <div>실시간 속보</div>
                    <div>실시간 속보</div>
                    <div>실시간 속보</div>
                    <div>실시간 속보</div>
                </div>
                <div className={"menu__"}>
                    스탠더 탐색하기
                </div>
                <div className={"menu__"}>
                    트렌딩 나우
                </div>
                <div className={"menu__"}>
                    공지사항
                </div>
                <div className={"menu__"}>
                    프리미엄 라운지
                </div>
                <div className={"menu__"}>
                    스탯드업 이벤트
                </div>
                <div className={"menu__"}>
                    고객센터 | 신고센터
                </div>
            </div>
        </MenuStyle>
        </ThemeProvider>
    )
}
export default Menu