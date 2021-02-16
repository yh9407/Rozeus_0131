import React from "react"
import {Route, Switch} from "react-router-dom"
import Container from "../layout/Container";

import {Login, Home} from "page"
import GlobalHeader from "../layout/GlobalHeader";
import {useSelector} from "react-redux";
import Register from "../page/Register";
import NaverCallback from "../component/socialLogin/naverCallback";
import KakaoCallback from "../component/socialLogin/kakaoCallback";
import Economy from "../page/newsSections/Economy";
import MyPage from "../page/myPage";
import MyPageUpdate from "../page/myPageUpdate";

const Router = () => {
    const logBtnClicked = useSelector((state) => state.auth.login.button)
    const isLoggedIn = useSelector((state) => state.auth.login.isLoggedIn)

    return (
        <>
            <Switch>
                <Route exact path="/" component={Container(Home, true)}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/economy" component={Container(Economy,isLoggedIn)}/>
                <Route exact path="/myPage" component={Container(MyPage,isLoggedIn)}/>
                <Route exact path="/myPage/update" component={Container(MyPageUpdate,isLoggedIn)}/>
                <Route exact path="/users/naver" component={NaverCallback}/>
                <Route exact path="/users/kakao" component={KakaoCallback}/>
            </Switch>
        </>
    )
}
export default Router;
