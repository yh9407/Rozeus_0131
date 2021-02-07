import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {naverLoginRequest} from "../../actions/authAction";
import { useLocation } from 'react-router-dom';

const NaverCallback = (props) => {
    const dispatch = useDispatch();
    const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "ikj3NzSwFPtM_apfPL4T",
        callbackUrl: "http://localhost:3000/users/naver",
        isPopup: false,
        callbackHandle: true,
    })
    const location = useLocation();
    const getNaverToken = () => {
        if (!location.hash) return;
        const token = location.hash.split('=')[1].split('&')[0];
        console.log(token);
    };
    const CallbackFun = () => {
        naverLogin.getLoginStatus((status) => {
            if (status) {
                const email = naverLogin.user.getEmail();
                const name = naverLogin.user.getName();
                const social_id =naverLogin.user.getId();
                dispatch(
                    (naverLoginRequest({
                        email, name,social_id
                    }))
                )
            } else {
                naverLogin.init()
                console.log("AccessToken Error")
            }
        })
        props.history.push("/")
    }
    useEffect(() => {
        naverLogin.init()
        CallbackFun();
    }, [])
    return null;
}
export default NaverCallback;