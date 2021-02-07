import React from "react"
import styled from "styled-components"
import GlobalHeader from "./GlobalHeader";
import InsideHeader from "./InsideHeader";

const ContainerStyle = styled.div`
`
export default (Component, option) => {
    const Container = (props) => {
        if (option) {
            return (
                <ContainerStyle>
                    <GlobalHeader/>
                    <InsideHeader/>
                    <Component/>
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
