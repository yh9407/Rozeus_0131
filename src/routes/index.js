import React from "react"
import {Route, Switch} from "react-router-dom"
import Container from "../layout/Container";

import {Auth,Home} from "page"


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Container(Home)}/>
            <Route exact path="/auth" component={Auth}/>
        </Switch>
    )
}
export default Router;
