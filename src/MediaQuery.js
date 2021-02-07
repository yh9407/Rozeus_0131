import React from "react"
import { useMediaQuery } from "react-responsive"

const Mobile : React.FC = ({children}) => {
    const isMobile = useMediaQuery({
        query:"(max-width: 500px)"
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>
}
const
    Tablet : React.FC = ({children}) => {
    const isTablet = useMediaQuery({
        query:"(min-width: 501px)"
    });
    return <React.Fragment>{isTablet && children}</React.Fragment>
}
export {Mobile,Tablet}