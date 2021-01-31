import update from "react-addons-update";
import {LOGIN_BTN, USER_LOGIN} from "../actions/authAction";

const initialState = {
    login: {
        isLoggedIn: false,
        button: false,
    },
}
export default function auth(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return update(state, {
                login: {
                    isLoggedIn: {$set: "true"},
                }
            })
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
