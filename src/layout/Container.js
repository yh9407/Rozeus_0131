import React from "react"
import styled from "styled-components"
import GlobalHeader from "./GlobalHeader";
import InsideHeader from "./InsideHeader";

const ContainerStyle = styled.div`
  width: 100%;
  .globalHeader{
  width: 100%;
  height: 50px;
  }
  .component{
  width: 100%;
  height: 100%;
  }
  @media (max-width: 551px){
  width: 100%;
  }
`
export default (Component, option) => {
    const Container = (props) => {
        if (option) {
            return (
                <ContainerStyle>
                    <div className={"globalHeader"}><GlobalHeader/></div>
                    <InsideHeader/>
                    <div className={"component"}><Component/></div>
                    <div className={"footer"}></div>
                </ContainerStyle>
            )
        } else {
            alert("로그인 후 이용 가능한 서비스 입니다.")
            props.history.goBack()
            return null;
        }
    }
    return (Container)
}
