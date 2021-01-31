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

const GlobalStyle = createGlobalStyle`
#app{
min-height: 100%;
display: flex;
align-items: stretch;
justify-content: stretch;
}
html,body{
height: 100%;
padding: 0;
margin: 0;
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

