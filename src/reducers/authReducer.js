import update from "react-addons-update";
import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    NAVER_LOGIN,
    KAKAO_LOGIN,
    GOOGLE_LOGIN,
    FACEBOOK_LOGIN,
    LOGIN_BTN,
    LOGOUT,
} from "../actions/authAction";

function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function parseJwt(token) {
    if (!token) return {name: ""};
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/-/g, "/");
    let jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
    return JSON.parse(jsonPayload)
}

const initialState = {
    login: {
        isLoggedIn: !!getCookie("rozeus_test"),
        success: false,
        name: parseJwt(getCookie("rozeus_test")).name || "",
        email: parseJwt(getCookie("rozeus_test")).email || "",
        social: parseJwt(getCookie("rozeus_test")).social || "",
    },
}
export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_INIT: {
            return update(state, {
                login: {}
            })
        }
        case LOGIN_SUCCESS: {
            return update(state, {
                login: {
                    name:{$set:action.data.name},
                    email:{$set:action.data.email},
                    isLoggedIn: {$set: true},
                    success: {$set: true}
                }
            })
        }
        case LOGOUT: {
            return update(state, {
                login: {
                    isLoggedIn: {$set: false},
                    success:{$set:false}
                }
            })
        }
        case NAVER_LOGIN: {
            return update(state, {
                login: {}
            })
        }
        case KAKAO_LOGIN: {
            return update(state, {
                login: {}
            })
        }
        case FACEBOOK_LOGIN: {
            return update(state, {
                login: {}
            })
        }
        case GOOGLE_LOGIN: {
            return update(state, {
                login: {}
            })
        }
        case LOGIN_BTN:
            if (state.login.button) {
                return update(state, {
                    login: {
                        button: {$set: false},
                    }
                })
            } else {
                return update(state, {
                    login: {
                        button: {$set: true},
                    }
                })
            }
        default:
            return state;
    }
}
