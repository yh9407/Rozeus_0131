import axios from "axios";

export const LOGIN_INIT = "LOGIN_INIT"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGIN_BTN = "LOGIN_BTN"

export const NAVER_LOGIN = "NAVER_LOGIN"
export const KAKAO_LOGIN = "KAKAO_LOGIN"
export const GOOGLE_LOGIN = "GOOGLE_LOGIN"
export const FACEBOOK_LOGIN = "FACEBOOK_LOGIN"

export const LOGOUT = "LOGOUT"

export const loginInit = () => {
    return {type: LOGIN_INIT}
}
export const loginSuccess = (data) => {
    return {type: LOGIN_SUCCESS,data:data}
}
export const loginFailure = () => {
    return {type: LOGIN_FAILURE}
}

export const userLoginBtn = () => {
    return {type: LOGIN_BTN}
}
export const userLogout = () => {
    return {type: LOGOUT}
}

//소셜로그인
export const kakaoLoginSuccess = (data) => {
    return {type: KAKAO_LOGIN, data: data}
}
export const naverLoginSuccess = (data) => {
    return {type: NAVER_LOGIN, data: data}
}
export const googleLoginSuccess = (data) => {
    return {type: GOOGLE_LOGIN, data: data}
}
export const facebookLoginSuccess = (data) => {
    return {type: FACEBOOK_LOGIN, data: data}
}

export const logoutRequest = () => async (dispatch) => {
    await axios
        .post("users/logout")
        .then((response) => {
            if (response.data.success === 1) {
                dispatch(userLogout())
            }
        })
}

export const kakaoLoginRequest = (res) => async (dispatch) => {
    dispatch(loginInit())
    await axios
        .post("/users/kakao", {...res})
        .then((response) => {
            if (response.data.success === 1) {
                dispatch(kakaoLoginSuccess(response.data))
                dispatch(loginSuccess(response.data))
            } else dispatch(loginFailure())
        })
}

export const naverLoginRequest = (res) => async (dispatch) => {
    dispatch(loginInit())
    await axios
        .post("/users/naver", {...res},
        )
        .then((response) => {
            if (response.data.success === 1) {
                dispatch(naverLoginSuccess(response.data))
                dispatch(loginSuccess(response.data))
            } else dispatch(loginFailure())
        })
}

export const googleLoginRequest = (res) => async (dispatch) => {
    dispatch(loginInit())
    await axios
        .post("/users/google", {...res},
        )
        .then((response) => {
            if (response.data.success === 1) {
                dispatch(googleLoginSuccess(response.data))
                dispatch(loginSuccess(response.data))
            } else dispatch(loginFailure())
        })
}
export const facebookLoginRequest = (res) => async (dispatch) => {
    dispatch(loginInit())
    await axios
        .post("/users/facebook", {...res},
        )
        .then((response) => {
            if (response.data.success === 1) {
                dispatch(facebookLoginSuccess(response.data))
                dispatch(loginSuccess(response.data))
            } else dispatch(loginFailure())
        })
}

