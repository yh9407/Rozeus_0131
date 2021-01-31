import React from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
background-color: aqua;
`
export default (Page) => {
    const Container = (props) => {
        return (
            <ContainerStyle>
                <Page/>
            </ContainerStyle>
        )

    }
    return (Container)
}
