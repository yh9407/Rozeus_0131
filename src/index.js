import React from 'react';
import ReactDOM from 'react-dom';
import Routers from 'routes'
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import {createGlobalStyle} from "styled-components"
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import rootReducer from "reducers";
import {persistStore} from "redux-persist";
import reset from "styled-reset";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
   ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
}`

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
)
//const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
                <Routers/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

