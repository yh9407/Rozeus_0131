import React from "react"
import {useMediaQuery} from "react-responsive"
import {Mobile, Tablet} from "../MediaQuery";
import styled, {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux";
import theme from "../theme";

const HomeStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media all and (max-width: 550px){
grid-template-columns: 1fr;
min-width: ${props => props.theme.minWidth};
}
.box{
display: flex;
align-items: center;
justify-content: center;
height: 90vh;
}
  .box:nth-child(1){
  display: flex;
  height: 90vh;
  width: 30vm;
   .box1_inside{
   display: grid;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-items: center;
   grid-template-rows: 2fr 5fr ;
    .test:nth-child(1){
    display: grid;
    grid-template-rows: repeat(4,1fr);
    background-color: white;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 3em;
    width: 100%;
    height: 100%;
    }
       .test:nth-child(2){
    display: grid;
    width: 100%;
    background-color: lightcyan;
    grid-template-rows: 1fr 2.5fr 2.5fr;
    align-items: center;
    justify-items: center;
    height: 100%;
       .test_items:nth-child(1){
       display: grid;
       width: 100%;
       grid-template-columns: repeat(4,1fr);
       align-items: center;
       justify-items: center;
       
        >div{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 3px 3px 3px lightgray;
        margin: 0 1em 0 0 ;
        border: 1px solid gray ;
        text-align-all: center;
        border-radius: 100%;
        height: 4em;
        width: 4em;
          span{
          font-size: 6px;
          font-weight: 600;
          }
        }
        >div:hover{
        border : 3px solid coral;
        }
       }
       .test_items:nth-child(2){
        display: grid;
        grid-template-rows: repeat(5,1fr);
        align-items: center;
        justify-content: flex-start;
        margin: 2em 0 0 3em;
        width: 100%;
        height: 100%;
          >div{
          height: 3vh;
          width: 100%;
          font-size: 14px;
          padding:  0 0 0 1em;
          }
       }
       
    }
   }
 
   
  }
    .box:nth-child(2){
  background-color: aquamarine;
  }
    .box:nth-child(3){
  background-color: antiquewhite;
  }
    .box:nth-child(4){
  background-color: blueviolet;
  } 
   .box:nth-child(5){
  background-color: coral;
  }
`

const Home = () => {
    console.log()
    return (
        <ThemeProvider theme={theme}>
            <HomeStyle>
                <div className={"box"}>
                    <div className={"box1_inside"}>
                        <div className={"test"}>
                            <div>카카오, 인도네시아 웹툰 1위 업체 인수</div>
                            <div>[아하!! 우주] 토성의 아름다운 고리 ..</div>
                            <div>애플.. 테슬라 인력으로 애플카 개발속도 ..</div>
                            <div>태양에서 지구 거리 120배 떨어진 끝에서 ..</div>
                        </div>
                        <div className={"test"}>
                            <div className={"test_items"}>
                                <div><span>조선일보</span></div>
                                <div><span>중앙일보</span></div>
                                <div><span>한겨례일보</span></div>
                                <div><span>한국경제</span></div>
                            </div>
                            <div className={"test_items"}>
                                <div>내 뉴스룸 컨텐츠 자리</div>
                                <div>선택한 신문사에서</div>
                                <div>각 신문사의 1면</div>
                                <div>ex) 케이뱅크, 암호화폐 거래소 ..</div>
                                <div>ex) CCTV속 AI 딥러닝 접목 ..</div>
                            </div>
                            <div className={"test_items"}>D2-c</div>
                        </div>
                    </div>
                </div>
                <div className={"box"}><h2>section2</h2></div>
                <div className={"box"}><h2>section3</h2></div>
                <div className={"box"}><h2>section4</h2></div>
                <div className={"box"}><h2>section5</h2></div>
            </HomeStyle>
        </ThemeProvider>
    )
}
export default Home;
